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
    <section id="additional" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Leadership & Activities</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-lg p-3 group-hover:scale-110 transition-transform">
                  <activity.icon className="text-green-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">{activity.organization}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar size={16} />
                    <span>{activity.date}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Let's Connect!</h3>
          <p className="text-lg mb-8 opacity-90">
            Interested in collaborating or have a project in mind? Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:your-email@example.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all hover:scale-105 border-2 border-white"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center text-gray-600 pb-8">
        <p>© 2025 Devansh Raizada. All rights reserved.</p>
      </footer>
    </section>
  );
}
