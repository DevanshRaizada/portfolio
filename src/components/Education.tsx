import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology',
      major: 'Computer Science & Engineering',
      institution: 'Indian Institute of Information Technology',
      location: 'Bhagalpur, Bihar',
      cgpa: '7.66 / 10.00',
      date: 'June, 2024',
      coursework: ['Object Oriented Programming', 'Database Management System', 'Operating Systems', 'Data Structures & Algorithms'],
    },
    {
      degree: '10+2, CBSE',
      institution: 'Boston Public School',
      location: 'Agra, U.P',
      percentage: '76.00 / 100.00',
      date: 'Mar, 2020',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="flex justify-center gap-1">
            <div className="w-8 h-1 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full animate-pulse"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full animate-pulse animation-delay-100"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full animate-pulse animation-delay-200"></div>
          </div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-blue-100 to-cyan-100' : 'from-slate-100 to-blue-100'} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className="relative flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`bg-gradient-to-br ${index === 0 ? 'from-blue-100 to-cyan-100' : 'from-slate-100 to-blue-100'} rounded-xl p-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500`}>
                      <GraduationCap className={index === 0 ? 'text-blue-600' : 'text-slate-600'} size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">{edu.degree}</h3>
                      {edu.major && (
                        <p className={`text-lg ${index === 0 ? 'text-blue-600' : 'text-slate-600'} font-medium group-hover:font-bold transition-all`}>{edu.major}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-xl text-gray-800 font-semibold mb-2 group-hover:text-gray-900 transition-colors">{edu.institution}</p>

                  <div className="flex flex-wrap gap-6 text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span>{edu.date}</span>
                    </div>
                  </div>

                  {edu.cgpa && (
                    <div className="inline-block bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg px-4 py-2 mb-4 group-hover:shadow-md transition-all">
                      <span className="text-emerald-700 font-semibold">{edu.cgpa} CGPA</span>
                    </div>
                  )}

                  {edu.percentage && (
                    <div className="inline-block bg-gradient-to-r from-sky-100 to-blue-100 rounded-lg px-4 py-2">
                      <span className="text-sky-700 font-semibold">{edu.percentage}</span>
                    </div>
                  )}

                  {edu.coursework && (
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-3">
                        {edu.coursework.map((course, idx) => (
                          <span
                            key={idx}
                            className="bg-gradient-to-r from-slate-100 to-blue-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium group-hover:shadow-md transition-all hover:scale-105"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
