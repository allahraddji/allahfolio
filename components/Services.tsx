'use client';

import { useI18n } from '@/i18n/I18nContext';

const services = [
  {
    icon: '⚙',
    titleKey: 'serviceItConsulting'
  },
  {
    icon: '💻',
    titleKey: 'serviceSoftwareSolutions'
  },
  {
    icon: '📡',
    titleKey: 'serviceIotSystems'
  },
  {
    icon: '🔧',
    titleKey: 'serviceEmbeddedDesign'
  },
  {
    icon: '🤖',
    titleKey: 'serviceAiRobotics'
  },
  {
    icon: '🎛',
    titleKey: 'serviceControlEngineering'
  },
  {
    icon: '🌐',
    titleKey: 'serviceNetworking'
  }
];

export default function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="space-y-5">
      <div className="space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300/70">
          {t('navServices')}
        </p>
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          {t('servicesTitle')}
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.titleKey} className="glass glass-hover rounded-[24px] p-5">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-xl">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">
              {t(service.titleKey as keyof typeof import('@/i18n/en.json'))}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
