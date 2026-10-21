import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    localStorage.setItem('language', languageCode);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-gray-300 hover:text-[#10B981] hover:bg-[#111827] transition-colors"
          style={{ fontSize: 14 }}
          aria-label={t('nav.changeLanguage')}
          aria-haspopup="dialog"
        >
          <Globe className="h-4 w-4" aria-hidden="true" />
          <span aria-hidden="true">{currentLanguage.code.toUpperCase()}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-44 p-2" align="end">
        <div className="space-y-1" role="menu" aria-label={t('nav.changeLanguage')}>
          {languages.map((language) => (
            <button
              key={language.code}
              role="menuitemradio"
              aria-checked={i18n.language === language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                i18n.language === language.code
                  ? 'bg-accent text-accent-foreground font-medium'
                  : 'hover:bg-accent/50'
              }`}
            >
              <span className="flex-1 text-left">{language.name}</span>
              {i18n.language === language.code && (
                <span className="text-xs text-[#10B981]" aria-hidden="true">✓</span>
              )}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSwitcher;
