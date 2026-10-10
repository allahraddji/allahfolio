'use client';

import { useI18n } from '@/i18n/I18nContext';

export default function LangToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="glass flex items-center gap-1 rounded-xl p-1">
      {(['en', 'fr'] as const).map((item) => (
        <button
          key={item}
          onClick={() => setLocale(item)}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
            locale === item ? 'bg-white/15 text-white' : 'text-slate-300'
          }`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
