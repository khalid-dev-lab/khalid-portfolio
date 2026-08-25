export default function Home() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "Website portfolio pribadi yang menampilkan karya dan keahlian",
      tech: "Next.js & Tailwind CSS",
      link: "#",
    },
    {
      title: "Landing Page",
      description: "Halaman landing modern dengan desain responsif",
      tech: "React & Tailwind CSS",
      link: "#",
    },
    {
      title: "Web App",
      description: "Aplikasi web interaktif dengan fitur lengkap",
      tech: "JavaScript & REST API",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-5xl font-bold mb-4 text-center">
          Hi, Saya <span className="text-blue-500">Khalid</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 text-center">
          Frontend Developer
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://github.com/khalid-dev-lab"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/khalid.dev"
            target="_blank"
            className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            LinkedIn
          </a>
          <a
            href="#projects"
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Lihat Karya
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Tentang <span className="text-blue-500">Saya</span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          Saya adalah seorang Frontend Developer & Web Designer yang passionate dalam membangun
          website yang indah, responsif, dan fungsional. Saya fokus pada
          pengembangan frontend menggunakan teknologi modern seperti React,
          Next.js, dan Tailwind CSS. Saya percaya bahwa desain yang baik dan
          kode yang bersih adalah kunci untuk menciptakan pengalaman web yang
          luar biasa. Saya senang belajar hal baru dan selalu bersemangat untuk
          mengerjakan proyek yang menantang.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Keahlian <span className="text-blue-500">Saya</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Git', 'Responsive Design'].map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Proyek <span className="text-blue-500">Saya</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <p className="text-blue-500 text-sm mb-4">{project.tech}</p>
              <a
                href={project.link}
                className="text-blue-400 hover:text-blue-300"
              >
                Lihat Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Hubungi <span className="text-blue-500">Saya</span>
        </h2>
        <div className="text-center">
          <p className="text-gray-300 mb-6">
            Tertarik bekerja sama atau punya pertanyaan? Jangan ragu untuk
            menghubungi saya melalui email di bawah ini.
          </p>
          <a
            href="mailto:khaliddev051@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold inline-block transition"
          >
            Email Saya
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        <p>© 2024 Khalid. All rights reserved.</p>
      </footer>
    </main>
  );
}