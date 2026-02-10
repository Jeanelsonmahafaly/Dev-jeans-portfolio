import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openImage = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedIndex(null), 200);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      const newIndex = selectedIndex > 0 ? selectedIndex - 1 : images.length - 1;
      setSelectedIndex(newIndex);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      const newIndex = selectedIndex < images.length - 1 ? selectedIndex + 1 : 0;
      setSelectedIndex(newIndex);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevious();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNext();
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      closeImage();
    }
  };

  // Gérer les événements clavier au niveau du document
  useEffect(() => {
    if (isOpen) {
      const handleKeyDownGlobal = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          if (selectedIndex !== null) {
            const newIndex = selectedIndex > 0 ? selectedIndex - 1 : images.length - 1;
            setSelectedIndex(newIndex);
          }
        }
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          if (selectedIndex !== null) {
            const newIndex = selectedIndex < images.length - 1 ? selectedIndex + 1 : 0;
            setSelectedIndex(newIndex);
          }
        }
        if (e.key === 'Escape') {
          e.preventDefault();
          setIsOpen(false);
          setTimeout(() => setSelectedIndex(null), 200);
        }
      };
      document.addEventListener('keydown', handleKeyDownGlobal);
      return () => document.removeEventListener('keydown', handleKeyDownGlobal);
    }
  }, [isOpen, selectedIndex, images.length]);

  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <>
      <div className={cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", className)}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg bg-[#1F2937] border border-[#374151] hover:border-[#10B981] transition-all duration-300 hover:scale-105"
            onClick={() => openImage(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-sm font-medium truncate">{image.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-w-4xl w-full p-0 bg-[#030712] border-[#374151]"
          onKeyDown={handleKeyDown}
        >
          {currentImage && (
            <>
              <div className="relative">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain bg-[#111827]"
                />
                
                {/* Navigation buttons */}
                {images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border border-[#374151] rounded-full w-12 h-12"
                      onClick={goToPrevious}
                      aria-label="Image précédente"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border border-[#374151] rounded-full w-12 h-12"
                      onClick={goToNext}
                      aria-label="Image suivante"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </>
                )}

                {/* Close button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4 bg-black/50 hover:bg-black/70 text-white border border-[#374151] rounded-full w-10 h-10"
                  onClick={closeImage}
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </Button>

                {/* Image counter */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm border border-[#374151]">
                    {selectedIndex !== null ? selectedIndex + 1 : 0} / {images.length}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="p-6 bg-[#111827] border-t border-[#374151]">
                <DialogHeader>
                  <DialogTitle className="text-white text-xl mb-2">
                    {currentImage.title}
                  </DialogTitle>
                  <DialogDescription className="text-gray-400 text-base leading-relaxed">
                    {currentImage.description}
                  </DialogDescription>
                </DialogHeader>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;

