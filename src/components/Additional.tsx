import { Users, Megaphone, Calendar } from 'lucide-react';

export default function Additional() {
  const activities = [
    {
      title: 'PR & Marketing Head',
      organization: 'Enyugma 2022',
      description: 'Led the PR and marketing efforts for Enyugma 2022, the techno-cultural festival of IIIT Bhagalpur',
      date: 'Dec, 2022',
      icon: Megaphone,
    },
    {
      title: 'Coordinator of Samwaad',
      organization: 'IIIT Bhagalpur',
      description: 'Successfully led and coordinated activities for Samwaad, the literature club at IIIT Bhagalpur',
      date: 'Jun, 2022 – Jun, 2023',
      icon: Users,
    },
  ];

  return (
    <section id="additional" className="py-20 bg-gradient-to-b from-white via-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Leadership & Activities</h2>
          <div className="flex justify-center gap-1">
            <div className="w-8 h-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-full animate-pulse"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full animate-pulse animation-delay-100"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-cyan-600 to-green-600 rounded-full animate-pulse animation-delay-200"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-teal-100 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-3 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 flex-shrink-0">
                  <activity.icon className="text-green-600" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-teal-600 group-hover:bg-clip-text transition-all duration-300">
                    {activity.title}
                  </h3>
                  <p className="text-green-600 font-medium mb-2 group-hover:text-green-700 transition-colors">{activity.organization}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3 group-hover:text-gray-700 transition-colors">
                    <Calendar size={16} />
                    <span>{activity.date}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 rounded-3xl p-12 text-white text-center shadow-2xl group overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-500"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-4 animate-fade-in">Let's Connect!</h3>
            <p className="text-lg mb-8 opacity-95">
              Interested in collaborating or have a project in mind? Feel free to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:your-email@example.com"
                className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-110 shadow-lg hover:shadow-2xl"
              >
                Send Email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/40 transition-all hover:scale-110 border-2 border-white/50 hover:border-white"
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center text-gray-600 pb-8">
        <p className="animate-fade-in">© 2025 Devansh Raizada. All rights reserved.</p>
      </footer>
    </section>
  );
}
