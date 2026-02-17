import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Career Essentials in Business Analysis',
      issuer: 'Microsoft and LinkedIn',
      date: 'Jun, 2025',
      link: undefined,
    },
    {
      title: 'Power BI Analysis',
      issuer: 'Microsoft',
      date: '2024',
      link: undefined,
    },
    {
      title: 'Gen-AI Master Mind',
      issuer: 'Online Course',
      date: '2025',
      link: 'https://drive.google.com/file/d/10PgxQ820xlfsZAuYTJP7Qx1_Y1ttqP2y/view',
    },
    {
      title: 'Advance SQL Course',
      issuer: 'By Satish Dhawale',
      date: '2024',
      link: undefined,
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link || '#'}
              target={cert.link ? '_blank' : undefined}
              rel={cert.link ? 'noopener noreferrer' : undefined}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group block ${
                cert.link ? 'cursor-pointer' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-3 group-hover:scale-110 transition-transform">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                </div>
                {cert.link && <ExternalLink size={20} className="text-gray-400 group-hover:text-blue-600 transition-colors" />}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
