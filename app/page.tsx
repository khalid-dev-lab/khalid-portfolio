export default function Home() {
  const projects = [
    {
      title: "Project 1",
      description: "Deskripsi project pertama Anda",
      tech: "Next.js",
      link: "#",
    },
    {
      title: "Project 2",
      description: "Deskripsi project kedua Anda",
      tech: "React",
      link: "#",
    },
    {
      title: "Project 3",
      description: "Deskripsi project ketiga Anda",
      tech: "HTML/CSS",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-5xl font-bold mb-4">
          Hi, Saya <span className="text-blue-500">Khalid</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Web Developer Portfolio
        </p>
        <div className="flex gap-4">
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
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Tentang <span className="text-blue-500">Saya</span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          Saya adalah seorang web developer yang passionate dalam membangun
          website yang indah dan fungsional. Saya fokus pada pengembangan
          frontend menggunakan teknologi modern seperti React dan Next.js.
          Saya senang belajar hal baru dan selalu bersemangat untuk
          menciptakan pengalaman web yang luar biasa.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Keahlian <span className="text-blue-500">Saya</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'].map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Proyek <span className="text-blue-500">Saya</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition"
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
            Tertarik bekerja sama atau punya pertanyaan?
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