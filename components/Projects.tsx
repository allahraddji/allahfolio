'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useI18n } from '@/i18n/I18nContext';

// 1. Define the project structure with the new requested fields
type Project = typeof projects[0];

const projects = [
  {
    id: 'proj-1',
    category: 'Robotic',
    status: 'Accomplished',
    titleKey: 'project1Title',
    textKey: 'project1Text',
    abstractKey: 'project1Abstract',
    teamKey: 'project1Team',
    tools: ['ROS', 'C++', 'Python'],
    pill: 'Autonomy',
    accent: 'from-[#7BBDE8]/30 to-[#0A4174]/10'
  },
  {
    id: 'proj-2',
    category: 'AI',
    status: 'On-going',
    titleKey: 'project2Title',
    textKey: 'project2Text',
    abstractKey: 'project2Abstract',
    teamKey: 'project2Team',
    tools: ['PyTorch', 'TensorFlow', 'CUDA'],
    pill: 'Automation',
    accent: 'from-[#4E8EA2]/35 to-[#0A4174]/10'
  },
  {
    id: 'proj-3',
    category: 'WebDev',
    status: 'Accomplished',
    titleKey: 'project3Title',
    textKey: 'project3Text',
    abstractKey: 'project3Abstract',
    teamKey: 'project3Team',
    tools: ['Next.js', 'React', 'Tailwind'],
    pill: 'Control',
    accent: 'from-[#6EA2B3]/30 to-[#49769F]/10'
  },
  {
    id: 'proj-4',
    category: 'Programming',
    status: 'On-going',
    titleKey: 'project4Title',
    textKey: 'project4Text',
    abstractKey: 'project4Abstract',
    teamKey: 'project4Team',
    tools: ['Rust', 'Go', 'Docker'],
    pill: 'Architecture',
    accent: 'from-[#8B5CF6]/30 to-[#4C1D95]/10'
  },
  {
    id: 'proj-5',
    category: 'Robotic',
    status: 'On-going',
    titleKey: 'project5Title',
    textKey: 'project5Text',
    abstractKey: 'project5Abstract',
    teamKey: 'sampleProjectTeam',
    tools: ['ROS 2', 'Gazebo', 'C++'],
    pill: 'Navigation',
    accent: 'from-[#43B3AE]/30 to-[#155E63]/10'
  },
  {
    id: 'proj-6',
    category: 'Robotic',
    status: 'Accomplished',
    titleKey: 'project6Title',
    textKey: 'project6Text',
    abstractKey: 'project6Abstract',
    teamKey: 'sampleProjectTeam',
    tools: ['Arduino', 'C++', 'Ultrasonic sensors'],
    pill: 'Embedded',
    accent: 'from-[#E0A458]/30 to-[#9A4F21]/10'
  },
  {
    id: 'proj-7',
    category: 'Robotic',
    status: 'On-going',
    titleKey: 'project7Title',
    textKey: 'project7Text',
    abstractKey: 'project7Abstract',
    teamKey: 'sampleProjectTeam',
    tools: ['OpenCV', 'Python', 'Raspberry Pi'],
    pill: 'Computer Vision',
    accent: 'from-[#E87979]/30 to-[#8F344B]/10'
  },
  {
    id: 'proj-8',
    category: 'AI',
    status: 'On-going',
    titleKey: 'project8Title',
    textKey: 'project8Text',
    abstractKey: 'project8Abstract',
    teamKey: 'sampleProjectTeam',
    tools: ['Python', 'Scikit-learn', 'Pandas'],
    pill: 'Prediction',
    accent: 'from-[#65B891]/30 to-[#28664B]/10'
  },
  {
    id: 'proj-9',
    category: 'AI',
    status: 'Accomplished',
    titleKey: 'project9Title',
    textKey: 'project9Text',
    abstractKey: 'project9Abstract',
    teamKey: 'sampleProjectTeam',
    tools: ['PyTorch', 'OpenCV', 'YOLO'],
    pill: 'Computer Vision',
    accent: 'from-[#E98954]/30 to-[#854126]/10'
  },
  {
    id: 'proj-10',
    category: 'AI',
    status: 'On-going',
    titleKey: 'project10Title',
    textKey: 'project10Text',
    abstractKey: 'project10Abstract',
    teamKey: 'sampleProjectTeam',
    tools: ['Python', 'TensorFlow', 'Pandas'],
    pill: 'Optimization',
    accent: 'from-[#5FA9D1]/30 to-[#275987]/10'
  },
  {
    id: 'proj-11',
    category: 'WebDev',
    status: 'Accomplished',
    titleKey: 'project11Title',
    textKey: 'project11Text',
    abstractKey: 'project11Abstract',
    teamKey: 'sampleProjectTeam',
    tools: ['Next.js', 'TypeScript', 'PostgreSQL'],
    pill: 'Full Stack',
    accent: 'from-[#D97EA7]/30 to-[#813D70]/10'
  },
  {
    id: 'proj-12',
    category: 'WebDev',
    status: 'On-going',
    titleKey: 'project12Title',
    textKey: 'project12Text',
    abstractKey: 'project12Abstract',
    teamKey: 'sampleProjectTeam',
    tools: ['React', 'Node.js', 'Socket.IO'],
    pill: 'Real Time',
    accent: 'from-[#6AB9A0]/30 to-[#2B665F]/10'
  },
  {
    id: 'proj-13',
    category: 'WebDev',
    status: 'Accomplished',
    titleKey: 'project13Title',
    textKey: 'project13Text',
    abstractKey: 'project13Abstract',
    teamKey: 'sampleProjectTeam',
    tools: ['Next.js', 'Tailwind CSS', 'REST API'],
    pill: 'Dashboard',
    accent: 'from-[#D8A84E]/30 to-[#79552A]/10'
  },
  {
    id: 'proj-14',
    category: 'Programming',
    status: 'On-going',
    titleKey: 'project14Title',
    textKey: 'project14Text',
    abstractKey: 'project14Abstract',
    teamKey: 'sampleProjectTeam',
    tools: ['Python', 'FastAPI', 'PostgreSQL'],
    pill: 'Backend',
    accent: 'from-[#DB766C]/30 to-[#813E37]/10'
  },
  {
    id: 'proj-15',
    category: 'Programming',
    status: 'Accomplished',
    titleKey: 'project15Title',
    textKey: 'project15Text',
    abstractKey: 'project15Abstract',
    teamKey: 'sampleProjectTeam',
    tools: ['C++', 'FreeRTOS', 'UART'],
    pill: 'Embedded',
    accent: 'from-[#78A9D6]/30 to-[#3C5F8C]/10'
  },
  {
    id: 'proj-16',
    category: 'Programming',
    status: 'On-going',
    titleKey: 'project16Title',
    textKey: 'project16Text',
    abstractKey: 'project16Abstract',
    teamKey: 'sampleProjectTeam',
    tools: ['Go', 'Docker', 'Redis'],
    pill: 'Distributed Systems',
    accent: 'from-[#83B46C]/30 to-[#426B43]/10'
  }
];

const categories = ['All', 'WebDev', 'Robotic', 'AI', 'Programming'];

export default function Projects() {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on the active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // Accessibility: Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selectedProject]);

  return (
    <section id="projects" className="space-y-8 relative">
      {/* Header Section */}
      <div className="space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300/70">
          {t('navProjects')}
        </p>
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          {t('projectsTitle')}
        </h2>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-white text-slate-900 shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-5 md:grid-cols-3">
        {filteredProjects.map((project) => (
          <article 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="glass glass-hover group cursor-pointer rounded-[24px] p-5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Status Indicator */}
            <div className="absolute top-7 right-7 flex items-center gap-2 z-10 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
               <div className={`h-2 w-2 rounded-full ${project.status === 'On-going' ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
               <span className="text-[9px] font-bold uppercase tracking-wider text-white/80">{project.status}</span>
            </div>

            <div className={`mb-4 h-28 rounded-2xl border border-white/15 bg-gradient-to-br ${project.accent} transition-opacity group-hover:opacity-80`} />
            
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-200">
              {project.pill}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-blue-200 transition-colors">
              {t(project.titleKey as keyof typeof import('@/i18n/en.json'))}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-200/80 line-clamp-2">
              {t(project.textKey as keyof typeof import('@/i18n/en.json'))}
            </p>
          </article>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overscroll-contain p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          />
          
          {/* Modal Content */}
          <div className="relative max-h-[calc(100dvh-2rem)] w-full max-w-2xl transform overflow-y-auto overscroll-contain rounded-3xl border border-white/10 bg-slate-900 shadow-2xl transition-all sm:max-h-[calc(100dvh-3rem)]">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
            >
              ✕
            </button>

            {/* Modal Header Gradient */}
            <div className={`h-32 w-full bg-gradient-to-br ${selectedProject.accent} opacity-80`} />
            
            <div className="px-8 pb-8 pt-6 space-y-6">
              {/* Title & Status */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-200">
                    {selectedProject.pill}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white">
                  {t(selectedProject.titleKey as keyof typeof import('@/i18n/en.json'))}
                </h3>
              </div>

              {/* Abstract */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">Abstract</h4>
                <p className="text-slate-300 leading-relaxed">
                  {/* Fallback to textKey if abstractKey isn't defined in your translation files yet */}
                  {t(selectedProject.abstractKey as keyof typeof import('@/i18n/en.json')) || t(selectedProject.textKey as keyof typeof import('@/i18n/en.json'))}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Team Members */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">Team</h4>
                  <p className="text-slate-300">
                    {t(selectedProject.teamKey as keyof typeof import('@/i18n/en.json'))}
                  </p>
                </div>

                {/* Tools Used */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map(tool => (
                      <span key={tool} className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-medium text-slate-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}