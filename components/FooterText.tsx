'use client';

import { useI18n } from '@/i18n/I18nContext';

export default function FooterText() {
  const { t } = useI18n();

  return (
    <footer className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-300/75">
      {t('footerText')}
    </footer>
  );
}
