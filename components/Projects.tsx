'use client';

import { useI18n } from '@/i18n/I18nContext';

const projects = [
  {
    titleKey: 'project1Title',
    textKey: 'project1Text',
    pill: 'Autonomy',
    accent: 'from-[#7BBDE8]/30 to-[#0A4174]/10'
  },
  {
    titleKey: 'project2Title',
    textKey: 'project2Text',
    pill: 'Automation',
    accent: 'from-[#4E8EA2]/35 to-[#0A4174]/10'
  },
  {
    titleKey: 'project3Title',
    textKey: 'project3Text',
    pill: 'Control',
    accent: 'from-[#6EA2B3]/30 to-[#49769F]/10'
  }
];

export default function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="space-y-5">
      <div className="space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300/70">
          {t('navProjects')}
        </p>
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          {t('projectsTitle')}
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.titleKey} className="glass glass-hover rounded-[24px] p-5">
            <div className={`mb-4 h-28 rounded-2xl border border-white/15 bg-gradient-to-br ${project.accent}`} />
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-200">
              {project.pill}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-white">
              {t(project.titleKey as keyof typeof import('@/i18n/en.json'))}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-200/80">
              {t(project.textKey as keyof typeof import('@/i18n/en.json'))}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
