import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SkillBadge from "./SkillBadge";

export default function ProjectCard({
  image,
  title,
  description,
  tech = [],
  github,
  live,
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl
      bg-gradient-to-br from-gray-900 via-gray-950 to-black
      border border-white/10
      hover:border-blue-500/40
      transition-all duration-500"
    >
      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover
          group-hover:scale-110 transition-transform duration-700"
        />

        {/* IMAGE OVERLAY */}
        <div
          className="absolute inset-0 bg-gradient-to-t
          from-black via-black/60 to-transparent opacity-80"
        />

        {/* LINKS ON HOVER */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-6
          opacity-0 group-hover:opacity-100 transition duration-300"
        >
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black/70 text-white
              hover:bg-white hover:text-black transition"
            >
              <FaGithub size={22} />
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 text-white
              hover:bg-blue-500 transition"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t) => (
            <SkillBadge key={t} name={t} />
          ))}
        </div>

        {/* FOOTER LINKS */}
        <div className="flex justify-between items-center">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
            >
              <FaGithub /> GitHub
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-500"
            >
              Live Demo <FaExternalLinkAlt size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
