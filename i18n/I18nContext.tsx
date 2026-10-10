'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import en from './en.json';
import fr from './fr.json';

const dictionaries = { en, fr };

type Locale = keyof typeof dictionaries;

const I18nContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof typeof en) => string;
}>({
  locale: 'en',
  setLocale: () => {},
  t: (key) => en[key]
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-locale') as Locale | null;
    if (saved && dictionaries[saved]) {
      setLocaleState(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
  };

  const value = {
    locale,
    setLocale,
    t: (key: keyof typeof en) => dictionaries[locale][key] || en[key]
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

export function T({ k }: { k: keyof typeof en }) {
  const { t } = useI18n();
  return <>{t(k)}</>;
}
