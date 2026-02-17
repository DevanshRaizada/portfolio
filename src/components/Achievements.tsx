import { Trophy, Star } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: 'SQL 5★ in HackerRank',
      description: 'Successfully tackled more than 1400 coding questions spanning multiple platforms',
      highlight: '5★',
    },
    {
      title: 'UGC-NET Computer Science',
      description: 'Qualified UGC-NET examination with AIR 947 in Computer Science',
      highlight: 'AIR 947',
    },
    {
      title: 'Outreachy Internship',
      description: 'Advanced to the second round of the Outreachy Internships in 2023',
      highlight: 'Round 2',
    },
    {
      title: 'Flipkart Grid 5.0',
      description: 'Achieved second-round qualification in the Flipkart Grid 5.0 competition featuring 4 lakh participants in 2023',
      highlight: '4L+ Participants',
    },
    {
      title: 'Debate Competition Victory',
      description: 'Secured 2nd position in a debate competition during Cultrang, IIT Goa Fest',
      highlight: '2nd Position',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-3 group-hover:scale-110 transition-transform">
                  {index === 0 ? (
                    <Star className="text-yellow-600" size={24} fill="currentColor" />
                  ) : (
                    <Trophy className="text-yellow-600" size={24} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                    {achievement.highlight}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
