import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-5">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white tracking-wide">
             Rakesh Raikwar
            </h3>
            
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/rakesh250305"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/rakesh0325"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="mailto:rakesh.r250305@gmail.com"
              aria-label="Email"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom */}
        <div className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Rakesh Raikwar. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
