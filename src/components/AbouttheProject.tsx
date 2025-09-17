import { Lightbulb } from 'lucide-react'
import { Timeline } from './ui/timeline';

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
  const data = [
    {
      title: "Input",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">User Input</h3>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
            User pastes a reel URL or uploads an .mp4 file through the Chrome extension interface. The system supports multiple platforms including Instagram Reels, YouTube Shorts, TikTok videos, and other popular short-form video formats.
          </p>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
            The extension provides a clean, intuitive interface that seamlessly integrates with your browsing experience. Users can simply right-click on any video or use the extension popup to submit content for fact-checking.
          </p>
          <div className="mt-4 p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
            <p className="text-blue-200 text-xs mb-2">
              <strong>Supported Formats:</strong> MP4, MOV, AVI, WebM
            </p>
            <p className="text-blue-200 text-xs">
              <strong>Platforms:</strong> Instagram, YouTube, TikTok, Twitter, Facebook
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Transcription",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Audio Processing & Speech Recognition</h3>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
            Audio is extracted from the video using advanced audio processing techniques and transcribed using OpenAI Whisper, one of the most accurate speech-to-text models available. The system handles multiple languages, accents, and audio qualities.
          </p>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
            Our transcription pipeline includes noise reduction, audio normalization, and speaker diarization to ensure maximum accuracy. The system can handle background music, multiple speakers, and various audio conditions commonly found in social media videos.
          </p>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
            Advanced preprocessing techniques filter out irrelevant audio segments and focus on speech content, improving both speed and accuracy of the transcription process.
          </p>
          <div className="mt-4 p-4 bg-green-900/30 rounded-lg border border-green-500/30">
            <p className="text-green-200 text-xs mb-2">
              <strong>Technology:</strong> OpenAI Whisper, FFmpeg, Audio Processing
            </p>
            <p className="text-green-200 text-xs">
              <strong>Features:</strong> Multi-language support, Noise reduction, Speaker identification
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Claim Extraction",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Intelligent Claim Identification</h3>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
            GPT-OSS analyzes the transcript using advanced natural language processing to identify factual claims, statements, and assertions that can be verified. The system distinguishes between opinions, jokes, and factual statements that require verification.
          </p>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
            Our claim extraction algorithm uses contextual understanding to identify not just explicit statements, but also implied claims and statistical assertions. It categorizes claims by type (scientific, historical, statistical, etc.) and priority level for verification.
          </p>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
            The system employs semantic analysis to understand the context and intent behind statements, ensuring that metaphors and figurative language are not mistakenly flagged as factual claims requiring verification.
          </p>
          <div className="mt-4 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
            <p className="text-purple-200 text-xs mb-2">
              <strong>Technology:</strong> GPT-OSS, NLP, Semantic Analysis
            </p>
            <p className="text-purple-200 text-xs">
              <strong>Capabilities:</strong> Context awareness, Claim categorization, Priority scoring
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Verification",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Comprehensive Fact-Checking Process</h3>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
            Each extracted claim undergoes rigorous verification through multiple channels. The system searches trusted databases, academic sources, news outlets, and government publications to find relevant evidence supporting or contradicting each claim.
          </p>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
            Our verification engine uses a combination of real-time web scraping, vector database searches through pre-indexed reliable sources, and cross-referencing with fact-checking organizations like Snopes, PolitiFact, and Reuters Fact Check.
          </p>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
            The system employs confidence scoring based on source reliability, recency of information, and consensus across multiple sources. Claims are evaluated not just for accuracy, but also for context and potential for misinterpretation.
          </p>
          <div className="mt-4 p-4 bg-orange-900/30 rounded-lg border border-orange-500/30">
            <p className="text-orange-200 text-xs mb-2">
              <strong>Sources:</strong> Academic databases, Government sites, Fact-checkers, News outlets
            </p>
            <p className="text-orange-200 text-xs">
              <strong>Methods:</strong> Real-time search, Vector similarity, Cross-referencing
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Final Verdict",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Intelligent Results Compilation</h3>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
            The system compiles all verification results into a comprehensive verdict for each claim. Results are categorized as Authentic (supported by reliable evidence), Misleading (partially true but lacking context), False (contradicted by evidence), or Unverifiable (insufficient reliable sources).
          </p>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
            Each verdict includes confidence scores, source citations, and explanatory context to help users understand not just what is true or false, but why. The system provides links to original sources and suggests related fact-checks for deeper understanding.
          </p>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
            Advanced algorithms detect potential bias in sources and adjust confidence scores accordingly. The system also identifies when claims require temporal context or when new information might change the verdict.
          </p>
          <div className="mt-4 p-4 bg-red-900/30 rounded-lg border border-red-500/30">
            <p className="text-red-200 text-xs mb-2">
              <strong>Verdicts:</strong> Authentic, Misleading, False, Unverifiable
            </p>
            <p className="text-red-200 text-xs">
              <strong>Features:</strong> Confidence scoring, Source citations, Context explanations
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Seamless Experience",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">User-Friendly Interface</h3>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
            All results are displayed directly within the Chrome extension interface, providing a non-intrusive fact-checking experience that doesn't interrupt your social media browsing. The interface is designed for quick scanning and detailed exploration.
          </p>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
            Users can view summary verdicts at a glance or dive deeper into detailed explanations, source materials, and related fact-checks. The extension remembers previous checks and provides a history of verified content for future reference.
          </p>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
            The system includes customizable notification settings, allowing users to choose how they want to be alerted about potentially misleading content. Integration with browser bookmarks enables easy saving and sharing of fact-checked content.
          </p>
          <div className="mt-4 p-4 bg-indigo-900/30 rounded-lg border border-indigo-500/30">
            <p className="text-indigo-200 text-xs mb-2">
              <strong>Features:</strong> Quick summaries, Detailed analysis, History tracking
            </p>
            <p className="text-indigo-200 text-xs">
              <strong>Experience:</strong> Non-intrusive, Customizable, Shareable results
            </p>
          </div>
        </div>
      ),
    },
  ];

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
        <Timeline data={data} />



    </div>
  )
}