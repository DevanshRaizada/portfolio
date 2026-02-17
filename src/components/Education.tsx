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
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <GraduationCap className="text-blue-600" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                      {edu.major && (
                        <p className="text-lg text-blue-600 font-medium">{edu.major}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-xl text-gray-800 font-semibold mb-2">{edu.institution}</p>

                  <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
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
                    <div className="inline-block bg-green-50 border border-green-200 rounded-lg px-4 py-2 mb-4">
                      <span className="text-green-700 font-semibold">CGPA: {edu.cgpa}</span>
                    </div>
                  )}

                  {edu.percentage && (
                    <div className="inline-block bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                      <span className="text-green-700 font-semibold">Percentage: {edu.percentage}</span>
                    </div>
                  )}

                  {edu.coursework && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
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
