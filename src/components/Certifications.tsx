import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Career Essentials in Business Analysis',
      issuer: 'Microsoft and LinkedIn',
      date: 'Jun, 2025',
      link: 'https://drive.google.com/file/d/1Ydg5aVYYGWvk1_2ysoVmb3w4FbhINyTZ/view?usp=sharing',
      color: 'from-blue-100 to-blue-200',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Power BI Analysis',
      issuer: 'Microsoft',
      date: '2024',
      link: 'https://learn.microsoft.com/en-us/users/devanshraizada-8738/',
      color: 'from-purple-100 to-pink-200',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Gen-AI Master Mind',
      issuer: 'Online Course',
      date: '2025',
      link: 'https://drive.google.com/file/d/10PgxQ820xlfsZAuYTJP7Qx1_Y1ttqP2y/view',
      color: 'from-cyan-100 to-blue-200',
      iconColor: 'text-cyan-600',
    },
    {
      title: 'Advance SQL Course',
      issuer: 'By Satish Dhawale',
      date: '2024',
      link: 'https://drive.google.com/file/d/11vzNLB9Ei7Wk__ts2lqWWK2vmHBOKXz5/view',
      color: 'from-green-100 to-emerald-200',
      iconColor: 'text-green-600',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="flex justify-center gap-1">
            <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full animate-pulse"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-cyan-600 to-green-600 rounded-full animate-pulse animation-delay-100"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full animate-pulse animation-delay-200"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link || '#'}
              target={cert.link ? '_blank' : undefined}
              rel={cert.link ? 'noopener noreferrer' : undefined}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className="relative flex items-start gap-4">
                <div className={`bg-gradient-to-br ${cert.color} rounded-xl p-3 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500 flex-shrink-0`}>
                  <Award className={`${cert.iconColor}`} size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 mb-1 group-hover:text-gray-700 transition-colors">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">{cert.date}</p>
                </div>
                <ExternalLink size={20} className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
