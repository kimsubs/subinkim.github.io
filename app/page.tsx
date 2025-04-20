import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600 text-white text-center py-12 px-4">
        <h1 className="text-5xl font-extrabold">Hello! I&rsquo;m Subin.</h1>
        <p className="mt-3 text-xl">
          Curious about how the world works — science, business, policy, and beyond.
        </p>

        <Image
          src="/profile_pic.jpg"
          alt="Profile Picture"
          width={250}
          height={250}
          className="rounded-full mt-8"
        />

        <a
          href="#projects"
          className="mt-8 px-6 py-3 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all"
        >
          See My Work
        </a>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-6 text-center bg-gray-800">
        <h2 className="text-4xl font-semibold text-white">About Me</h2>
        <div className="mt-6 text-lg max-w-4xl mx-auto space-y-6 text-gray-300">
        <p>
          Biology is messy, and I bridge experimental and computational approaches to cut through the noise. 
        </p> 
        <p> 
          I’ve worked across cancer, immunology, stem cells, aging, and even microbiology to clean up the environment. Each project has refined the way I think about biological systems and where they break.
        </p>

        <p>
        Lately, I’ve been thinking more about translational bottlenecks — what it takes to move scientific insight into impact, and how incentives, institutions, and infrastructure shape that process.
        </p>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-900 py-16 px-6">
        <h2 className="text-4xl font-semibold text-center text-white">My Projects</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Project 1 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow p-6">
          <h3 className="text-xl font-semibold text-white">Human Gut Microbiome</h3>
          <p className="mt-2 text-gray-400">
            Building an ML classifier to predict disease status (normal vs. type 2 diabetes) from human gut microbiome profiles.
          </p>
          <a
            href="https://github.com/kimsubs/microbiome-disease-classifier"
            target="_blank"
            className="mt-4 inline-block text-blue-400 hover:underline font-semibold"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow p-6">
          <h3 className="text-xl font-semibold text-white">Drivers of Immune Evasion</h3>
          <p className="mt-2 text-gray-400">
            Utilized CRISPR screens and Perturb-Seq to identify cancer-intrinsic genes that regulate immune evasion from CD8 T cells.
          </p>
          <a
            href="https://doi.org/10.1038/s41590-024-01943-5"
            target="_blank"
            className="mt-4 inline-block text-blue-400 hover:underline font-semibold"
          >
            View on publisher&rsquo;s page
          </a>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow p-6">
          <h3 className="text-xl font-semibold text-white">Neuroprotection with Stem Cell Therapies</h3>
          <p className="mt-2 text-gray-400">
            Helped demonstrate that secretome from patient-derived stem cells can protect neurons in vitro.
          </p>
          <a
            href="https://doi.org/10.1186/s40035-022-00290-5"
            target="_blank"
            className="mt-4 inline-block text-blue-400 hover:underline font-semibold"
          >
            View on publisher&rsquo;s page
          </a>
        </div>
      </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-16 px-6 text-center bg-gray-800">
        <h2 className="text-4xl font-semibold text-white mb-12">Experience & Education</h2>
        <div className="max-w-3xl mx-auto space-y-10 text-gray-300">
          <div>
            <h3 className="text-xl font-bold text-white">PhD Student, Bioinformatics & Cancer Systems Biology</h3>
            <p className="text-m text-white">MD Anderson Cancer Center · 2023–Present</p>
            <p className="mt-2"> Dissecting cancer gene networks via multiplex CRISPR-based functional genomics screens. </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">Life Science Research Professional</h3>
            <p className="text-m text-white">Stanford University · 2021–2023</p>
            <p className="mt-2">Led immune co-culture CRISPR screens to investigate immune evasion in cancer models.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">B.S., Molecular Biology</h3>
            <p className="text-m text-white">University of California, Berkeley · 2017-2021</p>
            <p className="mt-2">Investigated neuroprotective effects of stem cell-derived factors in ALS models.</p>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-900 text-center">
        <h2 className="text-4xl font-semibold text-white">Let&rsquo;s Connect!</h2>
        <div className="flex justify-center gap-8 mt-8">
          <a
            href="https://www.linkedin.com/in/subin-kim-b06577141/"
            target="_blank"
            className="text-blue-400 font-semibold hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/SubinnKimm"
            target="_blank"
            className="text-blue-400 font-semibold hover:underline"
          >
            X
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-5 text-center text-sm">
        <p>&copy; 2025 Subin Kim. All rights reserved.</p>
      </footer>
    </div>
  );
}