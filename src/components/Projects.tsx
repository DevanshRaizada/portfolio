import { FolderGit2, Users, Calendar, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Swiggy Data Analysis',
      tech: ['SQL', 'Data Insights', 'ERD'],
      date: 'Jun, 2025',
      teamSize: 1,
      description: [
        'Analyzed Swiggy customer data on 10 different metrics',
        'Drew 5 key insights along with 5 actionable recommendations to increase sales and profit',
      ],
    },
    {
      title: 'Library Management System',
      tech: ['SQL', 'Excel', 'Python'],
      date: 'Mar, 2024',
      teamSize: 4,
      description: [
        'Made a DBMS for central library of college',
        'Managed record of over 1200 students',
        'Designed the system to the custom needs of the library',
      ],
    },
    {
      title: 'BhagExpress',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js', 'MongoDB'],
      date: 'Apr, 2023',
      teamSize: 3,
      description: [
        'Managed a logistics management initiative aimed at supporting 100+ small logistics firms',
        'Enhanced Customer Service: Developed package status tracking functionality',
        'Utilized React, CSS, and JavaScript for the front-end, while MongoDB, Node.js, and React.js for the back-end',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-3 group-hover:scale-110 transition-transform">
                  <FolderGit2 className="text-blue-600" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink size={20} className="text-gray-400 group-hover:text-blue-600 transition-colors mt-2 md:mt-0" />
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span>Team Size: {project.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3">
                    {project.description.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
