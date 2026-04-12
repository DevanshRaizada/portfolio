import { Code, Database, Palette, BarChart } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Database,
      title: 'Data & Analytics',
      skills: ['SQL', 'Python (Pandas, NumPy)', 'Scikit-learn', 'Power BI', 'Excel', 'EDA', 'Data Visualization', 'ERD'],
      color: 'blue',
      bgColor: 'from-blue-100 to-cyan-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Code,
      title: 'Core Competencies',
      skills: ['Business Analysis', 'Stakeholder Communication', 'Uplift Modeling', 'Process Optimization'],
      color: 'purple',
      bgColor: 'from-purple-100 to-pink-100',
      iconColor: 'text-purple-600',
    },
    {
      icon: BarChart,
      title: 'Machine Learning',
      skills: ['XGBoost', '2+ ML Algorithms', 'Model Optimization', 'Inference Pipeline'],
      color: 'emerald',
      bgColor: 'from-emerald-100 to-teal-100',
      iconColor: 'text-emerald-600',
    },
    {
      icon: Palette,
      title: 'Development & API',
      skills: ['Python', 'FastAPI', 'REST APIs', 'C++', 'Jupyter Notebook'],
      color: 'orange',
      bgColor: 'from-orange-100 to-red-100',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Key Skills</h2>
          <div className="flex justify-center gap-1">
            <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full animate-pulse animation-delay-100"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse animation-delay-200"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="relative">
                <div className={`bg-gradient-to-br ${category.bgColor} rounded-xl p-4 inline-block mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500`}>
                  <category.icon className={`${category.iconColor}`} size={32} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">{category.title}</h3>

                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`bg-gradient-to-r ${category.bgColor} text-gray-700 rounded-lg px-4 py-3 font-medium group-hover:shadow-md transition-all duration-300 hover:scale-105`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
