import { Trophy, Star, ExternalLink, Code, Target, Zap } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: 'SQL 5★ in HackerRank',
      description: 'Successfully tackled more than 1400 coding questions spanning multiple platforms',
      highlight: '5★',
      link: 'https://www.hackerrank.com/profile/devanshraizada41',
      bgColor: 'from-red-100 to-orange-100',
      iconColor: 'text-red-600',
      icon: Star,
    },
    {
      title: 'UGC-NET Computer Science',
      description: 'Qualified UGC-NET examination with AIR 947 in Computer Science',
      highlight: 'AIR 947',
      link: 'https://drive.google.com/file/d/1jf9DOe1MnGDZH2nDfdal58_Sy3G0FjiP/view',
      bgColor: 'from-amber-100 to-yellow-100',
      iconColor: 'text-amber-600',
      icon: Trophy,
    },
    {
      title: 'Outreachy Internship',
      description: 'Advanced to the second round of the Outreachy Internships in 2023',
      highlight: 'Round 2',
      bgColor: 'from-teal-100 to-cyan-100',
      iconColor: 'text-teal-600',
      icon: Code,
    },
    {
      title: 'Flipkart Grid 5.0',
      description: 'Achieved second-round qualification in the Flipkart Grid 5.0 competition featuring 4 lakh participants in 2023',
      highlight: '4L+ Participants',
      link: 'https://drive.google.com/file/d/1ec0VAACEHyjNFjImPbQ-pqzng5V8rm6Z/view',
      bgColor: 'from-blue-100 to-indigo-100',
      iconColor: 'text-blue-600',
      icon: Target,
    },
    {
      title: 'Debate Competition Victory',
      description: 'Secured 2nd position in a debate competition during Cultrang, IIT Goa Fest',
      highlight: '2nd Position',
      bgColor: 'from-rose-100 to-pink-100',
      iconColor: 'text-rose-600',
      icon: Zap,
    },
    {
      title: 'Accenture Job Simulation',
      description: 'Completed comprehensive job simulation program and advanced through multiple assessment rounds',
      highlight: 'Completed',
      link: 'https://drive.google.com/drive/u/0/folders/1AzjNpbtdrJaEx8Ujhi7WNHV_KqeoDTSV',
      bgColor: 'from-orange-100 to-red-100',
      iconColor: 'text-orange-600',
      icon: Trophy,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="flex justify-center gap-1">
            <div className="w-8 h-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-full animate-pulse"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full animate-pulse animation-delay-100"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-yellow-600 to-red-600 rounded-full animate-pulse animation-delay-200"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <a
              key={index}
              href={achievement.link || '#'}
              target={achievement.link ? '_blank' : undefined}
              rel={achievement.link ? 'noopener noreferrer' : undefined}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                achievement.link ? 'cursor-pointer' : ''
              } overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`bg-gradient-to-br ${achievement.bgColor} rounded-xl p-3 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 flex-shrink-0`}>
                    <achievement.icon className={`${achievement.iconColor}`} size={28} fill={achievement.iconColor === 'text-red-600' ? 'currentColor' : 'none'} />
                  </div>
                  <div className="flex-1">
                    <div className={`bg-gradient-to-r ${achievement.bgColor} text-gray-700 px-3 py-1 rounded-full text-xs font-bold inline-block mb-2 group-hover:shadow-md transition-all`}>
                      {achievement.highlight}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                      {achievement.title}
                    </h3>
                  </div>
                  {achievement.link && <ExternalLink size={18} className="text-gray-300 group-hover:text-red-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 mt-1" />}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                  {achievement.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
