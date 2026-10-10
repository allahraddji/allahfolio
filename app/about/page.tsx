'use client';

import SiteNav from '@/components/SiteNav';
import ProfileCard from '@/components/ProfileCard';
import FooterText from '@/components/FooterText';
import { useI18n } from '@/i18n/I18nContext';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 md:px-8 lg:px-10">
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-7 lg:grid-cols-[360px_minmax(0,1fr)]">
          <ProfileCard />

          <div className="space-y-6">
            <SiteNav />

            <section className="glass rounded-[30px] p-6 md:p-8">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300/70">{t('aboutLabel')}</p>
                <h1 className="text-3xl font-bold text-white md:text-4xl">{t('aboutTitle')}</h1>
                <p className="text-base leading-8 text-slate-200/80">
                  {t('aboutDescription')}
                </p>
                <p className="text-base leading-8 text-slate-200/80">
                  {t('aboutClosing')}
                </p>
              </div>
            </section>

            <FooterText />
          </div>
        </div>
      </div>
    </main>
  );
}
