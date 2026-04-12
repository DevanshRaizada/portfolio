import { FolderGit2, Users, Calendar, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Fraud Detection Model',
      tech: ['Python', 'Scikit-learn', 'EDA', 'Visualization', 'REST API'],
      date: 'Mar, 2026',
      teamSize: 4,
      description: [
        'Built and benchmarked 3 machine learning models achieving p95 sub-2ms inference latency',
        'Developed cross-functional analytical dashboard and REST API infrastructure',
        'Engineered end-to-end data pipeline with synthetic dataset generation and 98% model evaluation accuracy',
      ],
      link: 'https://github.com/DevanshRaizada',
      bgColor: 'from-red-100 to-orange-100',
      iconColor: 'text-red-600',
      accentColor: 'bg-red-50 text-red-700',
    },
    {
      title: 'Customer Acquisition Targeting Model',
      tech: ['Python', 'XGBoost', 'ML Algorithms', 'FastAPI', 'Gen-AI'],
      date: 'Nov, 2025',
      teamSize: 2,
      description: [
        'Drove Data-Driven Customer Acquisition Strategies using uplift modeling with XGBoost and Python',
        'Delivered Actionable Insights translated into clear recommendations better than 90% using FastAPI',
        'Used Gen-AI API for automation achieving 95% faster response times',
      ],
      link: 'https://github.com/DevanshRaizada',
      bgColor: 'from-blue-100 to-cyan-100',
      iconColor: 'text-blue-600',
      accentColor: 'bg-blue-50 text-blue-700',
    },
    {
      title: 'Swiggy Data Analysis',
      tech: ['SQL', 'Data Insights', 'ERD', 'Analysis'],
      date: 'Jun, 2025',
      teamSize: 1,
      description: [
        'Analyzed Swiggy customer data on 10 different metrics comprehensively',
        'Drew 5 key insights along with 5 actionable recommendations to increase sales and profit',
      ],
      link: 'https://github.com/DevanshRaizada/SQL_Swiggy',
      bgColor: 'from-emerald-100 to-teal-100',
      iconColor: 'text-emerald-600',
      accentColor: 'bg-emerald-50 text-emerald-700',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="flex justify-center gap-1">
            <div className="w-8 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full animate-pulse"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full animate-pulse animation-delay-100"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-teal-600 to-green-600 rounded-full animate-pulse animation-delay-200"></div>
          </div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link || '#'}
              target={project.link ? '_blank' : undefined}
              rel={project.link ? 'noopener noreferrer' : undefined}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group block overflow-hidden cursor-pointer hover:-translate-y-2`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className="relative flex items-start gap-6 mb-6">
                <div className={`bg-gradient-to-br ${project.bgColor} rounded-2xl p-4 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500 flex-shrink-0`}>
                  <FolderGit2 className={`${project.iconColor}`} size={32} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-green-600 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <ExternalLink size={24} className="text-gray-300 group-hover:text-green-600 group-hover:translate-x-2 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
                  </div>

                  <div className="flex flex-wrap gap-6 mb-4 text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                    <div className="flex items-center gap-2">
                      <Users size={18} />
                      <span className="font-medium">Team Size: {project.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span className="font-medium">{project.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`${project.accentColor} px-4 py-2 rounded-full text-sm font-semibold group-hover:shadow-md transition-all duration-300 hover:scale-105`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3">
                    {project.description.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${project.bgColor}`}></div>
                        <span className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
