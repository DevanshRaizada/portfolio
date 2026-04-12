import { Mail, Linkedin, Github, Code2, Phone, Database, BarChart3, Brain } from 'lucide-react';

export default function Hero() {
  const techStack = [
    { icon: Database, label: 'Data', color: 'text-blue-600' },
    { icon: Brain, label: 'ML/AI', color: 'text-purple-600' },
    { icon: BarChart3, label: 'Analytics', color: 'text-emerald-600' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-block mb-8 group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-white hover:ring-blue-400 transition-all duration-500 group-hover:scale-105">
              <img
                src="/Gemini_Generated_Image_c30y5lc30y5lc30y.png"
                alt="Devansh Raizada"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 animate-fade-in">
            Devansh Raizada
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-2 font-semibold">
            Data & Business Analyst
          </p>

          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-Stack Data Solutions • Business Intelligence • Python & SQL Expertise
          </p>

          <div className="flex justify-center gap-3 mb-12">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110 group/tech"
              >
                <tech.icon className={`${tech.color}`} size={20} />
                <span className="text-sm font-semibold text-gray-700">{tech.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="tel:your-phone"
              className="group relative flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <Phone size={20} className="text-blue-600 relative" />
              <span className="text-gray-700 font-medium relative">Phone</span>
            </a>

            <a
              href="mailto:your-email@example.com"
              className="group relative flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <Mail size={20} className="text-blue-600 relative" />
              <span className="text-gray-700 font-medium relative">Email</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <Linkedin size={20} className="text-blue-600 relative" />
              <span className="text-gray-700 font-medium relative">LinkedIn</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <Github size={20} className="text-blue-600 relative" />
              <span className="text-gray-700 font-medium relative">GitHub</span>
            </a>

            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <Code2 size={20} className="text-blue-600 relative" />
              <span className="text-gray-700 font-medium relative">LeetCode</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative">
                <div className="text-3xl font-bold text-blue-600 mb-2">24%</div>
                <div className="text-sm text-gray-600 font-medium">Sales Uplift</div>
              </div>
            </div>
            <div className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative">
                <div className="text-3xl font-bold text-emerald-600 mb-2">30%</div>
                <div className="text-sm text-gray-600 font-medium">Ad Spend Reduced</div>
              </div>
            </div>
            <div className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative">
                <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-sm text-gray-600 font-medium">Model Accuracy</div>
              </div>
            </div>
            <div className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative">
                <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                <div className="text-sm text-gray-600 font-medium">ML Models Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
