import SiteNav from '@/components/SiteNav';
import ProfileCard from '@/components/ProfileCard';
import FooterText from '@/components/FooterText';
import Projects from '@/components/Projects';

export default function ProjectsPage() {
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
              <Projects />
            </section>

            <FooterText />
          </div>
        </div>
      </div>
    </main>
  );
}
