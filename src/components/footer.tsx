import { Globe, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Creator Section */}
          <div className="flex items-center space-x-3">
            <img
              src="https://avatars.githubusercontent.com/u/138971524?v=4"
              alt="Aniket Raut"
              className="w-8 h-8 rounded-full border border-purple-500"
            />
            <div className="flex items-center space-x-4">
              <span className="text-white font-medium">Aniket Raut</span>
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/aniketraut16/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <Linkedin/>
                </a>
                <a
                  href="https://aniketraut.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  <Globe/>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
