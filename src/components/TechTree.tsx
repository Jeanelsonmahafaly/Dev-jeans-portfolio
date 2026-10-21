import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Code, ChevronDown } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { techBranches, type StackItem, type StackBranch } from '@/data/techStack';

const ACCENT = '#10B981';
const CORNER = 12;
const STROKE_MAIN = 2;
const STROKE_BRANCH = 1.5;

type Pt = { x: number; y: number };
type TreePath = { id: string; d: string; weight: number };
type ViewMode = 'tree' | 'grid' | 'accordion';

interface Box {
  left: number;
  top: number;
  right: number;
  bottom: number;
  cx: number;
  cy: number;
}

function round1(n: number) {
  return Math.round(n * 10) / 10;
}

function relativeBox(el: HTMLElement, origin: DOMRect): Box {
  const r = el.getBoundingClientRect();
  return {
    left: r.left - origin.left,
    top: r.top - origin.top,
    right: r.right - origin.left,
    bottom: r.bottom - origin.top,
    cx: r.left - origin.left + r.width / 2,
    cy: r.top - origin.top + r.height / 2,
  };
}

function roundedOrthoPath(points: Pt[], radius = CORNER): string {
  const raw = points.map((p) => ({ x: round1(p.x), y: round1(p.y) }));
  const cleaned: Pt[] = [];
  for (const cur of raw) {
    const prev = cleaned[cleaned.length - 1];
    if (prev && Math.abs(prev.x - cur.x) < 0.5 && Math.abs(prev.y - cur.y) < 0.5) {
      continue;
    }
    cleaned.push(cur);
  }

  const ortho: Pt[] = [];
  for (let i = 0; i < cleaned.length; i++) {
    const b = cleaned[i];
    if (i === 0 || i === cleaned.length - 1) {
      ortho.push(b);
      continue;
    }
    const a = ortho[ortho.length - 1];
    const c = cleaned[i + 1];
    const colX = Math.abs(a.x - b.x) < 0.5 && Math.abs(b.x - c.x) < 0.5;
    const colY = Math.abs(a.y - b.y) < 0.5 && Math.abs(b.y - c.y) < 0.5;
    if (colX || colY) continue;
    ortho.push(b);
  }

  if (ortho.length < 2) return '';
  if (ortho.length === 2) {
    return `M ${ortho[0].x} ${ortho[0].y} L ${ortho[1].x} ${ortho[1].y}`;
  }

  let d = `M ${ortho[0].x} ${ortho[0].y}`;
  for (let i = 1; i < ortho.length - 1; i++) {
    const prev = ortho[i - 1];
    const curr = ortho[i];
    const next = ortho[i + 1];
    const inLen = Math.hypot(curr.x - prev.x, curr.y - prev.y);
    const outLen = Math.hypot(next.x - curr.x, next.y - curr.y);
    const inDx = Math.sign(curr.x - prev.x);
    const inDy = Math.sign(curr.y - prev.y);
    const outDx = Math.sign(next.x - curr.x);
    const outDy = Math.sign(next.y - curr.y);
    const r = Math.min(radius, inLen / 2, outLen / 2);
    if (r < 1) {
      d += ` L ${curr.x} ${curr.y}`;
      continue;
    }
    d += ` L ${round1(curr.x - inDx * r)} ${round1(curr.y - inDy * r)}`;
    d += ` Q ${curr.x} ${curr.y} ${round1(curr.x + outDx * r)} ${round1(curr.y + outDy * r)}`;
  }
  const last = ortho[ortho.length - 1];
  d += ` L ${last.x} ${last.y}`;
  return d;
}

function straight(a: Pt, b: Pt): string {
  return `M ${round1(a.x)} ${round1(a.y)} L ${round1(b.x)} ${round1(b.y)}`;
}

function buildTreePaths(
  origin: DOMRect,
  rootEl: HTMLElement,
  headerEls: Array<{ id: string; el: HTMLElement }>,
  groupEls: Array<{ id: string; el: HTMLElement }>,
): TreePath[] {
  const root = relativeBox(rootEl, origin);
  const headers = headerEls
    .map(({ id, el }) => ({ id, ...relativeBox(el, origin) }))
    .filter((h) => h.right > h.left);

  if (!headers.length) return [];

  const paths: TreePath[] = [];
  const isRow = headers[0].left > root.right - 2;

  if (isRow) {
    const busX = root.right + Math.max(18, (headers[0].left - root.right) / 2);
    const railY = Math.max(8, Math.min(...headers.map((h) => h.top)) - 18);
    const lastCx = Math.max(...headers.map((h) => h.cx));

    const trunk = roundedOrthoPath([
      { x: root.right, y: root.cy },
      { x: busX, y: root.cy },
      { x: busX, y: railY },
      { x: lastCx, y: railY },
    ]);
    if (trunk) paths.push({ id: 'trunk', d: trunk, weight: STROKE_MAIN });

    for (const header of headers) {
      const drop = straight({ x: header.cx, y: railY }, { x: header.cx, y: header.top });
      paths.push({ id: `drop-${header.id}`, d: drop, weight: STROKE_MAIN });
    }
  } else {
    const spineX = Math.max(10, Math.min(root.cx, ...headers.map((h) => h.left)) - 16);
    const lastCy = Math.max(...headers.map((h) => h.cy));
    const trunk = roundedOrthoPath([
      { x: root.cx, y: root.bottom },
      { x: root.cx, y: root.bottom + 14 },
      { x: spineX, y: root.bottom + 14 },
      { x: spineX, y: lastCy },
    ]);
    if (trunk) paths.push({ id: 'trunk', d: trunk, weight: STROKE_MAIN });

    for (const header of headers) {
      const branch = roundedOrthoPath([
        { x: spineX, y: header.cy },
        { x: header.left, y: header.cy },
      ]);
      if (branch) paths.push({ id: `to-${header.id}`, d: branch, weight: STROKE_MAIN });
    }
  }

  const groupsByBranch = new Map<string, Box[]>();
  for (const { id, el } of groupEls) {
    const branchId = id.split('::')[0];
    const list = groupsByBranch.get(branchId) ?? [];
    list.push(relativeBox(el, origin));
    groupsByBranch.set(branchId, list);
  }

  for (const header of headers) {
    const groups = groupsByBranch.get(header.id);
    if (!groups?.length) continue;
    const spineX = header.left + 14;
    const last = groups.reduce((a, b) => (a.cy > b.cy ? a : b));
    const startY = header.bottom;
    if (last.cy - startY > 2) {
      paths.push({
        id: `col-${header.id}`,
        d: straight({ x: spineX, y: startY }, { x: spineX, y: last.cy }),
        weight: STROKE_BRANCH,
      });
    }
    for (let i = 0; i < groups.length; i++) {
      const group = groups[i];
      const endX = group.left - 4;
      if (endX - spineX > 2) {
        paths.push({
          id: `grp-${header.id}-${i}`,
          d: straight({ x: spineX, y: group.cy }, { x: endX, y: group.cy }),
          weight: STROKE_BRANCH,
        });
      }
    }
  }

  return paths.filter((p) => p.d);
}

const TechNode: React.FC<{
  label: string;
  icon?: React.ReactNode;
  borderColor: string;
  glowColor: string;
  fill?: boolean;
}> = ({ label, icon, borderColor, glowColor, fill = false }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className={fill ? 'relative flex w-full' : 'relative inline-flex'}
  >
    <div
      className={`
        relative rounded-full px-4 py-3
        bg-transparent
        border-2 ${borderColor}
        backdrop-blur-sm
        group
        ${fill ? 'flex min-h-[4.5rem] w-full items-center' : ''}
      `}
      style={{
        boxShadow: `
          inset 0 1px 0 rgba(255,255,255,0.1),
          0 4px 14px rgba(0,0,0,0.5),
          0 0 20px ${glowColor}20
        `,
      }}
    >
      <div className="flex items-center gap-3 text-white">
        {icon && <div className="flex-shrink-0">{icon}</div>}
        {label ? (
          <span className="font-bold text-sm md:text-base drop-shadow-lg">
            {label}
          </span>
        ) : null}
      </div>
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent" />
    </div>
  </motion.div>
);

const TechPill: React.FC<{ item: StackItem; index: number }> = ({ item, index }) => {
  const reduced = useReducedMotion();
  const Icon = item.icon;

  return (
    <motion.li
      initial={reduced ? false : { opacity: 0, y: 8 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: 'easeOut' }}
      className="w-full list-none"
    >
      <div
        className="flex w-full items-center gap-2 rounded-full border-2 border-[#374151] bg-transparent text-white select-none transition-[transform,opacity,border-color] duration-150 hover:-translate-y-0.5 hover:border-[#10B981] focus-visible:-translate-y-0.5 focus-visible:border-[#10B981] focus-visible:outline-none"
        style={{
          fontSize: 14,
          fontWeight: 600,
          padding: '8px 14px',
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.05),
            0 2px 8px rgba(0,0,0,0.4),
            0 0 8px #10B98115
          `,
        }}
      >
        <Icon
          width={20}
          height={20}
          className="object-contain flex-shrink-0"
          color={item.color}
          aria-hidden
        />
        <span className="drop-shadow-md">{item.name}</span>
      </div>
    </motion.li>
  );
};

const PillList: React.FC<{ items: StackItem[]; startIndex?: number }> = ({
  items,
  startIndex = 0,
}) => (
  <ul className="flex min-w-0 flex-wrap gap-2">
    {items.map((item, i) => (
      <TechPill key={item.name} item={item} index={startIndex + i} />
    ))}
  </ul>
);

const GroupTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4
    className="text-gray-300 font-semibold mb-2"
    style={{ fontSize: 13, letterSpacing: '0.04em' }}
  >
    {children}
  </h4>
);

const BranchGroups: React.FC<{
  branch: StackBranch;
  registerGroup?: (key: string, el: HTMLElement | null) => void;
}> = ({ branch, registerGroup }) => {
  let running = 0;
  return (
    <div className="mt-4 space-y-3">
      {branch.groups.map((group) => {
        const start = running;
        running += group.items.length;
        const key = `${branch.id}::${group.title}`;
        return (
          <div key={group.title} className="pl-7">
            <h4
              ref={registerGroup ? (el) => registerGroup(key, el) : undefined}
              className="mb-2 w-fit font-semibold text-gray-300"
              style={{ fontSize: 13, letterSpacing: '0.04em' }}
            >
              {group.title}
            </h4>
            <PillList items={group.items} startIndex={start} />
          </div>
        );
      })}
    </div>
  );
};

const TechTree: React.FC = () => {
  const treeRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const headerRefs = useRef<Record<string, HTMLElement | null>>({});
  const groupRefs = useRef<Record<string, HTMLElement | null>>({});
  const [paths, setPaths] = useState<TreePath[]>([]);
  const [canvas, setCanvas] = useState({ w: 0, h: 0 });
  const [drawn, setDrawn] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('tree');
  const [openBranch, setOpenBranch] = useState<string | null>(techBranches[0]?.id ?? null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const compute = (): ViewMode => {
      const w = window.innerWidth;
      if (w >= 1024) return 'tree';
      if (w >= 640) return 'grid';
      return 'accordion';
    };
    const apply = () => setViewMode(compute());
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);

  const measure = useCallback(() => {
    const tree = treeRef.current;
    const root = rootRef.current;
    if (!tree || !root) return;

    const origin = tree.getBoundingClientRect();
    setCanvas((current) =>
      current.w === origin.width && current.h === origin.height
        ? current
        : { w: origin.width, h: origin.height },
    );
    const headers = techBranches
      .map((branch) => {
        const el = headerRefs.current[branch.id];
        return el ? { id: branch.id, el } : null;
      })
      .filter((entry): entry is { id: string; el: HTMLElement } => entry !== null);

    const groups: Array<{ id: string; el: HTMLElement }> = [];
    for (const branch of techBranches) {
      for (const group of branch.groups) {
        const key = `${branch.id}::${group.title}`;
        const el = groupRefs.current[key];
        if (el) groups.push({ id: key, el });
      }
    }

    setPaths(buildTreePaths(origin, root, headers, groups));
  }, []);

  useLayoutEffect(() => {
    if (viewMode === 'tree') {
      measure();
    } else {
      setPaths([]);
    }
  }, [measure, viewMode]);

  useEffect(() => {
    if (viewMode !== 'tree') return;
    const tree = treeRef.current;
    if (!tree) return;

    const observer = new ResizeObserver(() => measure());
    observer.observe(tree);
    if (rootRef.current) observer.observe(rootRef.current);
    for (const el of Object.values(headerRefs.current)) {
      if (el) observer.observe(el);
    }

    window.addEventListener('resize', measure);
    const fontsReady = document.fonts?.ready.then(() => measure());

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
      fontsReady?.catch(() => undefined);
    };
  }, [measure, viewMode]);

  useEffect(() => {
    if (!paths.length) return;
    const tree = treeRef.current;
    if (!tree) return;
    if (reduced) {
      setDrawn(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(tree);
    return () => io.disconnect();
  }, [paths.length, reduced]);

  // ---------- Accordéon (<640px) ----------
  if (viewMode === 'accordion') {
    return (
      <div className="w-full">
        <div className="space-y-3">
          {techBranches.map((branch) => {
            const BranchIcon = branch.icon;
            const isOpen = openBranch === branch.id;
            const panelId = `tech-branch-panel-${branch.id}`;
            const buttonId = `tech-branch-button-${branch.id}`;
            return (
              <div
                key={branch.id}
                className="rounded-2xl border border-gray-800 bg-gray-900/50 overflow-hidden"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenBranch(isOpen ? null : branch.id)}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left text-white hover:bg-gray-800/50 transition-colors duration-150"
                  >
                    <span className="flex items-center gap-3">
                      <BranchIcon className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT }} aria-hidden />
                      <span className="font-bold text-sm md:text-base">{branch.label}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 flex-shrink-0 text-gray-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-2 pb-4"
                >
                  {branch.groups.map((group, gi) => (
                    <div key={group.title} className="pl-3 pr-2 pt-3">
                      <GroupTitle>{group.title}</GroupTitle>
                      <PillList items={group.items} startIndex={gi * 4} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ---------- Grille (640–1023px) : 2–3 colonnes, sans connecteurs ----------
  if (viewMode === 'grid') {
    return (
      <div className="w-full py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <TechNode
              label=""
              icon={<Code className="w-6 h-6" width={24} height={24} />}
              borderColor="border-[#10B981]"
              glowColor={ACCENT}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {techBranches.map((branch) => {
              const BranchIcon = branch.icon;
              const headingId = `tech-branch-heading-${branch.id}`;
              return (
                <section key={branch.id} aria-labelledby={headingId}>
                  <h3 id={headingId} className="w-full">
                    <TechNode
                      label={branch.label}
                      icon={<BranchIcon className="w-5 h-5" width={20} height={20} />}
                      borderColor="border-[#374151]"
                      glowColor={ACCENT}
                      fill
                    />
                  </h3>
                  <BranchGroups branch={branch} />
                </section>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ---------- Arbre (≥1024px) : 6 colonnes espacées avec connecteurs ----------
  return (
    <div className="w-full max-w-full py-12">
      <div className="w-full min-w-0">
        <div ref={treeRef} className="relative overflow-visible pt-6">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0"
            width={canvas.w || undefined}
            height={canvas.h || undefined}
            overflow="visible"
          >
            {paths.map((path) => (
              <path
                key={path.id}
                d={path.d}
                fill="none"
                stroke={ACCENT}
                strokeWidth={path.weight}
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1}
                style={
                  reduced
                    ? undefined
                    : {
                        strokeDasharray: 1,
                        strokeDashoffset: drawn ? 0 : 1,
                        transition: 'stroke-dashoffset 600ms ease-out',
                      }
                }
              />
            ))}
          </svg>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-10">
            <div ref={rootRef} className="w-fit flex-shrink-0">
              <TechNode
                label=""
                icon={<Code className="w-6 h-6" width={24} height={24} />}
                borderColor="border-[#10B981]"
                glowColor={ACCENT}
              />
            </div>

            <div className="grid min-w-0 flex-1 grid-cols-6 gap-4">
              {techBranches.map((branch) => {
                const BranchIcon = branch.icon;
                const headingId = `tech-branch-heading-${branch.id}`;
                return (
                  <section
                    key={branch.id}
                    className="min-w-0"
                    aria-labelledby={headingId}
                  >
                    <h3
                      id={headingId}
                      ref={(el) => {
                        headerRefs.current[branch.id] = el;
                      }}
                      className="w-full"
                    >
                      <TechNode
                        label={branch.label}
                        icon={<BranchIcon className="w-5 h-5" width={20} height={20} />}
                        borderColor="border-[#374151]"
                        glowColor={ACCENT}
                        fill
                      />
                    </h3>
                    <BranchGroups
                      branch={branch}
                      registerGroup={(key, el) => {
                        groupRefs.current[key] = el;
                      }}
                    />
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechTree;
