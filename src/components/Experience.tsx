import { Briefcase, Users, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Accenture Job Simulation',
      type: 'Internship',
      date: 'Dec, 2024 – Feb, 2025',
      points: [
        'Worked in a real live project high pressure environment',
        'Analyzed 3 dataset of more than 1000 people to draw actionable insights',
      ],
    },
    {
      title: 'Codechef Chapter Lead',
      type: 'Leadership',
      date: 'Mar, 2021 - Mar, 2022',
      points: [
        'Guided a coding community of more than 500 students',
        'Organized workshops, competitions, mentored and coordinated more than 12 events',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-100 rounded-lg p-3">
                  {exp.type === 'Leadership' ? (
                    <Users className="text-blue-600" size={28} />
                  ) : (
                    <Briefcase className="text-blue-600" size={28} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
                      <Calendar size={18} />
                      <span className="text-sm font-medium">{exp.date}</span>
                    </div>
                  </div>
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.type}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
