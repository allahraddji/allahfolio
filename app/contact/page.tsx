import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import HomeButton from '@/components/HomeButton';
import FooterText from '@/components/FooterText';

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip px-4 py-8 md:px-8 lg:px-10">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-7 lg:grid-cols-[360px_minmax(0,1fr)]">
          <HomeButton />

          <div className="space-y-6">
            <SiteNav />

            <section className="glass rounded-[30px] p-6 md:p-8">
              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300/70">Contact</p>
                  <h1 className="text-3xl font-bold text-white md:text-4xl">Let’s Work Together</h1>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Link href="mailto:allahradionadji@gmail.com" className="glass glass-hover rounded-[24px] p-5">
                    <p className="text-sm text-slate-300/80">Email</p>
                    <p className="mt-2 text-lg font-semibold text-white">allahradionadji@gmail.com</p>
                  </Link>

                  <Link href="tel:+23566431655" className="glass glass-hover rounded-[24px] p-5">
                    <p className="text-sm text-slate-300/80">Phone</p>
                    <p className="mt-2 text-lg font-semibold text-white">+235 66 43 16 55</p>
                  </Link>

                  <a
                    href="https://www.linkedin.com/in/allahradionadji"
                    target="_blank"
                    rel="noreferrer"
                    className="glass glass-hover rounded-[24px] p-5"
                  >
                    <p className="text-sm text-slate-300/80">LinkedIn</p>
                    <p className="mt-2 text-lg font-semibold text-white">allahradionadji</p>
                  </a>

                  <a
                    href="https://github.com/allahraddji"
                    target="_blank"
                    rel="noreferrer"
                    className="glass glass-hover rounded-[24px] p-5"
                  >
                    <p className="text-sm text-slate-300/80">GitHub</p>
                    <p className="mt-2 text-lg font-semibold text-white">allahraddji</p>
                  </a>
                </div>
              </div>
            </section>

            <FooterText />
          </div>
        </div>
      </div>
    </main>
  );
}
