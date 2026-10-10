'use client';

import { useI18n } from '@/i18n/I18nContext';

const stats = ['highlight1', 'highlight2', 'highlight3'];

export default function Highlights() {
  const { t } = useI18n();

  return (
    <section id="highlights" className="space-y-5">
      <div className="space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300/70">
          {t('navHighlights')}
        </p>
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          {t('highlightsTitle')}
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat} className="glass glass-hover rounded-[24px] p-6">
            <p className="text-center text-base font-medium text-white/90">
              {t(stat as keyof typeof import('@/i18n/en.json'))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
