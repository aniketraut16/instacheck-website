import { Lightbulb } from 'lucide-react'

interface StatItem {
  number: string;
  label: string;
}

interface SectionContent {
  stats?: StatItem[];
  description?: string;
  problem?: string;
  solution?: string;
}

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: SectionContent;
}

export default function AbouttheProject() {
  const section: Section = {
    id: 'inspiration',
    title: 'Our Inspiration',
    icon: <Lightbulb className="w-8 h-8" />,
    content: {
      stats: [
        { number: '1.8B', label: 'Monthly users consume reels' },
        { number: '66%', label: 'Rely on shorts for news weekly' }
      ],
      description: `Reels and short videos have become one of the world's biggest sources of information. But here's the problem: these videos are often short, catchy, and persuasive — yet highly prone to misuse, manipulation, and misinformation. Algorithms amplify this influence, and unchecked claims can easily shape opinions or spread falsehoods at scale.`,
      problem: `I've personally seen situations where friends repeated a "fact" from a reel that turned out to be completely wrong. It was embarrassing for them, but more importantly, it showed how easy it is for misinformation to spread without any real-time way to verify it.`,
      solution: `That gap inspired me to build InstaCheck — a tool that brings real-time, claim-by-claim fact-checking into the short-video experience, so users can trust what they're watching.`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-black">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="relative">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white">
              {section.icon}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {section.title}
            </h2>
          </div>

          {/* Inspiration Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {section.content.stats?.map((stat, i) => (
                  <div key={i} className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">The Problem</h3>
                <p className="text-gray-300 leading-relaxed">{section.content.description}</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-2xl p-8 border border-red-500/30 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-red-300 mb-4">Personal Experience</h3>
                <p className="text-red-200 leading-relaxed">{section.content.problem}</p>
              </div>
              <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-2xl p-8 border border-green-500/30 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-green-300 mb-4">Our Solution</h3>
                <p className="text-green-200 leading-relaxed">{section.content.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}