'use client';

import Image from 'next/image';
import Link from 'next/link';
import ProfileCard from '@/components/ProfileCard';
import TechRibbon from '@/components/TechRibbon';
import FooterText from '@/components/FooterText';
import SiteNav from '@/components/SiteNav';
import { useI18n } from '@/i18n/I18nContext';

export default function HomePage() {
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

            <section className="glass glass-hover grid gap-6 rounded-[30px] p-5 md:p-7 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-5">
                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300/70">
                    {t('heroTitle')}
                  </p>
                  <h2 className="text-balance text-3xl font-bold leading-tight text-white md:text-5xl">
                    {t('name')}
                  </h2>
                </div>

                <p className="max-w-xl text-base leading-8 text-slate-200/80">
                  {t('heroSubtitle')}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/projects"
                    className="rounded-xl border border-sky-300/20 bg-sky-300/15 px-4 py-3 text-sm font-semibold text-sky-100 dark:border-[#7BBDE8]/30 dark:bg-[#7BBDE8]/15 dark:text-[#BDD8E9]"
                  >
                    {t('viewProjects')}
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white"
                  >
                    {t('contactMe')}
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[220px] overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-sky-300/15 via-white/5 to-cyan-400/10 dark:from-[#7BBDE8]/15 dark:via-[#0A4174]/15 dark:to-[#4E8EA2]/20">
                <div className="grid-pattern absolute inset-0 opacity-40" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.28),_transparent_50%)]" />
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
                  alt="Engineering workspace"
                  fill
                  className="object-cover opacity-70"
                />
              </div>
            </section>

            <TechRibbon />

            <FooterText />
          </div>
        </div>
      </div>
    </main>
  );
}
