'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/i18n/I18nContext';
import ThemeToggle from './ThemeToggle';
import LangToggle from './LangToggle';

const navItems = [
  { href: '/', labelKey: 'navHome' },
  { href: '/about', labelKey: 'navAbout' },
  { href: '/services', labelKey: 'navServices' },
  { href: '/highlights', labelKey: 'navHighlights' },
  { href: '/projects', labelKey: 'navProjects' },
  { href: '/contact', labelKey: 'navContact' }
];

export default function SiteNav() {
  const pathname = usePathname();
  const { t } = useI18n();

  return (
    <header className="glass sticky top-6 z-20 rounded-[24px] px-4 py-3 md:px-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <nav aria-label="Main navigation" className="order-3 grid w-full min-w-0 grid-cols-3 gap-x-2 gap-y-3 pb-1 md:order-none md:flex md:w-auto md:items-center md:gap-6 md:pb-0">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`min-w-0 text-center text-xs transition md:shrink-0 md:whitespace-nowrap md:text-sm ${
                  isActive ? 'font-semibold text-sky-600 dark:text-sky-300' : 'text-slate-600 hover:text-slate-900 dark:text-slate-200/80 dark:hover:text-white'
                }`}
              >
                {t(item.labelKey as keyof typeof import('@/i18n/en.json'))}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LangToggle />
        </div>
      </div>
    </header>
  );
}
