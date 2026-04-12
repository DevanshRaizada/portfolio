import { Briefcase, Users, Calendar, TrendingUp, BarChart3, ExternalLink } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Freelance Data & Business Analyst',
      type: 'Professional',
      date: 'Mar, 2025 – Feb, 2026',
      company: 'Local Clients',
      icon: TrendingUp,
      points: [
        'Increased sales 24% for a garment manufacturer via competitive pricing benchmarking against Jockey and revised bundling strategy.',
        'Reduced Amazon/Meesho ad spend 30% by developing a customer retention scoring model optimizing marketing allocation.',
        'Delivered Power BI dashboards translating pricing and retention insights into actionable decisions for non-technical stakeholders.',
      ],
      bgColor: 'from-blue-100 to-cyan-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Accenture Data Strategy Simulation',
      type: 'Professional Development',
      date: 'Dec, 2024 – Feb, 2025',
      company: 'Virtual Program',
      icon: BarChart3,
      points: [
        'Analyzed inventory datasets to identify working capital inefficiencies.',
        'Reduced tied-up capital by 12% without impacting sales volume through strategic optimization.',
      ],
      bgColor: 'from-purple-100 to-pink-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Codechef Chapter Lead',
      type: 'Leadership',
      date: 'Mar, 2021 - Mar, 2022',
      company: 'IIIT Bhagalpur',
      icon: Users,
      points: [
        'Led and grew a technical community of 500+ students across 12+ workshops, competitions, and mentorship initiatives.',
        'Delivered hands-on training sessions in Data Structures and SQL, improving placement readiness for 500+ junior students.',
      ],
      bgColor: 'from-green-100 to-emerald-100',
      iconColor: 'text-green-600',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white via-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="flex justify-center gap-1">
            <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full animate-pulse"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full animate-pulse animation-delay-100"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-pulse animation-delay-200"></div>
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className="relative flex items-start gap-6 mb-6">
                <div className={`bg-gradient-to-br ${exp.bgColor} rounded-2xl p-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 flex-shrink-0`}>
                  <exp.icon className={`${exp.iconColor}`} size={32} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                        {exp.title}
                      </h3>
                      <p className={`${exp.iconColor} font-medium mt-1`}>{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 group-hover:text-gray-800 transition-colors">
                      <Calendar size={18} />
                      <span className="text-sm font-medium whitespace-nowrap">{exp.date}</span>
                    </div>
                  </div>
                  <span className={`inline-block bg-gradient-to-r ${exp.bgColor} text-gray-700 px-4 py-1 rounded-full text-sm font-semibold group-hover:shadow-md transition-all`}>
                    {exp.type}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${exp.bgColor}`}></div>
                    <span className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">{point}</span>
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
