import { Mail, Linkedin, Github, Code2, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-block mb-8">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
              <img
                src="/Gemini_Generated_Image_c30y5lc30y5lc30y.png"
                alt="Devansh Raizada"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Devansh Raizada
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Computer Science Engineer
          </p>

          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Data Analyst | Software Developer | Problem Solver
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="tel:your-phone"
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Phone size={20} className="text-blue-600" />
              <span className="text-gray-700 font-medium">Phone</span>
            </a>

            <a
              href="mailto:your-email@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Mail size={20} className="text-blue-600" />
              <span className="text-gray-700 font-medium">Email</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Linkedin size={20} className="text-blue-600" />
              <span className="text-gray-700 font-medium">LinkedIn</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Github size={20} className="text-blue-600" />
              <span className="text-gray-700 font-medium">GitHub</span>
            </a>

            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Code2 size={20} className="text-blue-600" />
              <span className="text-gray-700 font-medium">LeetCode</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">1400+</div>
              <div className="text-sm text-gray-600">Coding Problems</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">5★</div>
              <div className="text-sm text-gray-600">SQL HackerRank</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">AIR 947</div>
              <div className="text-sm text-gray-600">UGC-NET CS</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">7.66</div>
              <div className="text-sm text-gray-600">CGPA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
