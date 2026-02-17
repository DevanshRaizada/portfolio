import { Code, Database, Palette, BarChart } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Database,
      title: 'Data & Analytics',
      skills: ['SQL', 'Data Analytics', 'Power BI', 'ERD'],
      color: 'blue',
    },
    {
      icon: Code,
      title: 'Programming',
      skills: ['C++', 'Python', 'JavaScript', 'Node.js'],
      color: 'cyan',
    },
    {
      icon: Palette,
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'React', 'TailWind'],
      color: 'teal',
    },
    {
      icon: BarChart,
      title: 'Tools & Others',
      skills: ['MongoDB', 'Excel', 'Business Analysis', 'Gen-AI'],
      color: 'green',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Key Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`bg-${category.color}-100 rounded-lg p-4 inline-block mb-4`}>
                <category.icon className={`text-${category.color}-600`} size={32} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>

              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-lg px-4 py-2 text-gray-700 font-medium hover:bg-blue-50 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
