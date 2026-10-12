'use client';

import Link from 'next/link';
import { useI18n } from '@/i18n/I18nContext';

export default function HomeButton() {
  const { t } = useI18n();

  return (
    <aside className="lg:sticky lg:top-6 lg:h-fit">
      <Link
        href="/"
        className="glass glass-hover flex min-h-14 w-full items-center justify-between rounded-2xl px-5 py-4 text-sm font-semibold text-slate-900 dark:text-white"
      >
        <span>{t('navHome')}</span>
        <span aria-hidden="true" className="text-lg">←</span>
      </Link>
    </aside>
  );
}