'use client';

import Link from 'next/link';
import { useI18n } from '@/i18n/I18nContext';

export default function ProfileCard() {
  const { t } = useI18n();

  return (
    <aside className="glass glass-hover sticky top-6 h-fit rounded-[28px] p-5 lg:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-lg font-black tracking-[0.15em] text-white">
          AD
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex justify-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-sky-300/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] dark:from-[#49769F]/60 dark:to-[#0A4174]/30">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-sky-300/40 to-white/10 text-4xl font-black text-white dark:from-[#7BBDE8]/50 dark:to-[#0A4174]/40">
              A
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300/80">
            {t('greeting')}
          </p>
          <h1 className="text-balance text-2xl font-bold leading-tight text-white lg:text-[2rem]">
            {t('name')}
          </h1>
          <p className="text-base font-semibold text-sky-200 dark:text-[#7BBDE8]">
            {t('role')}
          </p>
          <p className="text-sm leading-7 text-slate-200/80">
            {t('summary')}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="mailto:allahradionadji@gmail.com"
            className="glass-hover flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            {t('emailLabel')}
          </Link>
          <Link
            href="tel:+23566431655"
            className="glass-hover flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            {t('phoneLabel')}
          </Link>
        </div>

      </div>
    </aside>
  );
}
