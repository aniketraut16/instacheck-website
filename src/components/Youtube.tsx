export default function Youtube() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-black py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See it works
          </h2>
        </div>
        
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/nRiEk4YI8to?si=9p1Z7YQvc7ytRsov"
              title="InstaCheck Demo"
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  )
}
