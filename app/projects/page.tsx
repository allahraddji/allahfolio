import SiteNav from '@/components/SiteNav';
import HomeButton from '@/components/HomeButton';
import FooterText from '@/components/FooterText';
import Projects from '@/components/Projects';

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip px-4 py-8 md:px-8 lg:px-10">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[360px_minmax(0,1fr)]">
          <HomeButton />

          <div className="min-w-0 space-y-6">
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
