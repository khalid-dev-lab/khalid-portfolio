export default function Home() {
  return (
    <main className="bg-gray-100 font-sans text-gray-900">
      {/* HEADER */}
      <header className="fixed left-0 top-0 z-50 w-full px-4 py-3 bg-white/45 backdrop-blur-md lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {/* Logo */}
          <button className="group flex items-center gap-3 rounded-2xl px-2 py-1.5 transition hover:bg-white/70">
            <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-blue-600/25">
              <span className="text-xl font-bold text-blue-600">K</span>
            </span>
            <span className="leading-none">
              <span className="block text-xl font-extrabold tracking-tight text-gray-950">Khalid</span>
            </span>
          </button>

          {/* Menu */}
          <nav className="hidden items-center gap-1 rounded-2xl border border-gray-200/70 bg-white/70 p-1 shadow-sm backdrop-blur-xl lg:flex">
            <a href="#home" className="bg-blue-600 text-white shadow-lg shadow-blue-600/25 rounded-xl px-4 py-2.5 text-sm font-bold">Home</a>
            <a href="#about" className="text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl px-4 py-2.5 text-sm font-bold">About</a>
            <a href="#skills" className="text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl px-4 py-2.5 text-sm font-bold">Skills</a>
            <a href="#projects" className="text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl px-4 py-2.5 text-sm font-bold">Projects</a>
            <a href="#contact" className="text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl px-4 py-2.5 text-sm font-bold">Contact</a>
          </nav>

          {/* Resume Button */}
          <div className="hidden items-center gap-2 lg:flex">
            <button className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700">
              Resume
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="grid h-12 w-12 place-items-center rounded-2xl border border-gray-200 bg-white/80 text-gray-900 lg:hidden">☰</button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen overflow-hidden bg-gray-100 p-4 py-24 md:p-12 md:py-12">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'linear-gradient(rgba(37,99,235,.55) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.55) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}></div>
          <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-green-300/20 blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">
          {/* Kiri */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/10 bg-blue-200/10 px-5 py-2 text-sm font-bold text-blue-700 backdrop-blur">
              Web Developer · Frontend Specialist
            </span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl xl:text-5xl">
              <span className="block">Crafting</span>
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">beautiful web</span>
              <span className="block">experiences</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-gray-600">
              Saya membangun website yang cepat, responsif, dan fungsional menggunakan teknologi modern.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-extrabold text-white shadow-xl shadow-blue-600/30 transition hover:-translate-y-1 hover:bg-blue-700">
                Lihat Karya →
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white/60 px-7 py-4 font-extrabold text-gray-700 transition hover:-translate-y-1 hover:bg-gray-100">
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Kanan - Card Foto */}
          <div className="flex justify-center">
            <div className="relative h-[400px] w-[300px] overflow-hidden rounded-3xl bg-white/60 shadow-2xl backdrop-blur-xl md:h-[400px] md:w-[360px]">
              {/* Placeholder Foto */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
                <span className="text-8xl font-black text-white">K</span>
              </div>
              
              {/* Teks di Foto */}
              <div className="absolute inset-x-0 bottom-0 z-30 rounded-2xl p-6">
                <div className="inline-block rounded-xl bg-slate-950/25 px-6 py-3 text-white backdrop-blur-md ring-1 ring-white/15">
                  <h3 className="text-xl font-semibold">Khalid</h3>
                  <p className="text-sm opacity-80">Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative overflow-hidden bg-gray-100 px-3 py-24 md:px-12">
        <div className="relative z-10 mx-auto max-w-7xl px-3 md:px-6">
          <div className="relative mb-12 overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 px-5 py-12 shadow-2xl shadow-blue-600/5 backdrop-blur-xl md:px-10 md:py-16 lg:px-14">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-600/10 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span> About Me
            </span>
            <h2 className="mt-10 text-5xl font-semibold leading-[0.9] tracking-tight text-gray-950 md:text-7xl">
              Tentang Saya
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-8 text-gray-600 md:text-xl">
              Saya adalah seorang frontend developer yang passionate dalam membangun website yang indah, responsif, dan fungsional. Saya fokus pada pengembangan frontend menggunakan teknologi modern seperti React, Next.js, dan Tailwind CSS.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="relative overflow-hidden bg-gray-100 px-3 py-24 md:px-12">
        <div className="relative z-10 mx-auto max-w-7xl px-3 md:px-6">
          <div className="relative mb-12 overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 px-5 py-12 shadow-2xl backdrop-blur-xl md:px-10 md:py-16 lg:px-14">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-600/10 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span> Skills
            </span>
            <h2 className="mt-10 text-5xl font-semibold leading-[0.9] tracking-tight text-gray-950 md:text-7xl">
              Keahlian
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Git', 'Responsive Design'].map((skill) => (
                <div key={skill} className="rounded-2xl border border-gray-200 bg-white p-6 text-center font-semibold text-gray-800 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative overflow-hidden bg-gray-100 px-3 py-24 md:px-12">
        <div className="relative z-10 mx-auto max-w-7xl px-3 md:px-6">
          <div className="relative mb-12 overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 px-5 py-12 shadow-2xl shadow-blue-600/5 backdrop-blur-xl md:px-10 md:py-16 lg:px-14">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-600/10 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span> Portfolio
            </span>
            <h2 className="mt-10 text-5xl font-semibold leading-[0.9] tracking-tight text-gray-950 md:text-7xl">
              Projects
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { title: 'Personal Portfolio', desc: 'Website portfolio pribadi', tech: 'Next.js' },
                { title: 'Landing Page', desc: 'Halaman landing modern', tech: 'React' },
                { title: 'Web App', desc: 'Aplikasi web interaktif', tech: 'JavaScript' },
              ].map((project, index) => (
                <div key={index} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{project.desc}</p>
                  <p className="mt-4 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{project.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative overflow-hidden bg-gray-100 py-24">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/70 px-4 py-1.5 text-sm font-semibold text-blue-700">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600"></span> Contact
              </span>
              <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
                Let&apos;s Build <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Something Together</span>
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-gray-600">
                Tertarik bekerja sama atau punya pertanyaan? Jangan ragu untuk menghubungi saya.
              </p>
              
              <div className="mt-8 grid gap-4 text-sm text-gray-700">
                <a href="mailto:khaliddev051@gmail.com" className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-blue-200">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600">✉</span>
                  <span>
                    <span className="block text-xs text-gray-400">Email</span>
                    <span className="font-semibold text-gray-800">khaliddev051@gmail.com</span>
                  </span>
                </a>
                <a href="https://github.com/khalid-dev-lab" target="_blank" className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-blue-200">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600">🐙</span>
                  <span>
                    <span className="block text-xs text-gray-400">GitHub</span>
                    <span className="font-semibold text-gray-800">khalid-dev-lab</span>
                  </span>
                </a>
                <a href="https://linkedin.com/in/khalid.dev" target="_blank" className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-blue-200">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600">💼</span>
                  <span>
                    <span className="block text-xs text-gray-400">LinkedIn</span>
                    <span className="font-semibold text-gray-800">khalid.dev</span>
                  </span>
                </a>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl backdrop-blur-xl md:p-8">
              <h3 className="text-2xl font-bold text-gray-900">Mari Berkolaborasi</h3>
              <p className="mt-2 text-sm text-gray-500">Pilih jenis proyek Anda</p>
              
              <div className="mt-8 grid gap-4">
                <button className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:border-blue-200 hover:shadow-lg">
                  <span className="block font-bold text-gray-900">Website Development</span>
                  <span className="mt-1 block text-sm leading-relaxed text-gray-500">Membangun website modern dan responsif.</span>
                </button>
                <button className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:border-blue-200 hover:shadow-lg">
                  <span className="block font-bold text-gray-900">Frontend Development</span>
                  <span className="mt-1 block text-sm leading-relaxed text-gray-500">Membangun UI/UX yang interaktif dan menarik.</span>
                </button>
                <button className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:border-blue-200 hover:shadow-lg">
                  <span className="block font-bold text-gray-900">Landing Page</span>
                  <span className="mt-1 block text-sm leading-relaxed text-gray-500">Membuat landing page yang konversi.</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden bg-white text-gray-800">
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold text-gray-900"><span className="text-blue-600">Khalid</span></h3>
            <p className="max-w-sm text-sm leading-relaxed text-gray-600">
              Frontend Developer fokus pada pembangunan website modern, responsif, dan fungsional.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">Navigation</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#home" className="text-gray-600 hover:text-blue-600">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-blue-600">About</a></li>
              <li><a href="#skills" className="text-gray-600 hover:text-blue-600">Skills</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">Connect</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="mailto:khaliddev051@gmail.com" className="text-gray-600 hover:text-blue-600">khaliddev051@gmail.com</a></li>
              <li><a href="https://github.com/khalid-dev-lab" className="text-gray-600 hover:text-blue-600">GitHub</a></li>
              <li><a href="https://linkedin.com/in/khalid.dev" className="text-gray-600 hover:text-blue-600">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
          © 2024 Khalid. Crafted with purpose.
        </div>
      </footer>
    </main>
  );
}