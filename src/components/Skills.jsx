import SkillBadge from "./SkillBadge";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "C/C++",
    "Java",
  ];

  const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "npm",
    "Vercel",
    "Render",
    "Netlify",
    "MongoDB Atlas",
    "Canva",
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Skills & Tools
      </h2>

      {/* Skills Marquee */}
      <div className="overflow-hidden py-6">
        <motion.div
          className="flex gap-10 whitespace-nowrap min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <SkillBadge key={`skill-${i}`} name={skill} />
          ))}
          {[...skills, ...skills].map((skill, i) => (
            <SkillBadge key={`skill-${i}`} name={skill} />
          ))}
        </motion.div>
      </div>

      {/* Tools Marquee (Reverse Direction) */}
      <div className="overflow-hidden py-6">
        <motion.div
          className="flex gap-10 whitespace-nowrap min-w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 45,
            ease: "linear",
          }}
        >
          {[...tools, ...tools].map((tool, i) => (
            <SkillBadge key={`tool-${i}`} name={tool} />
          ))}
          {[...tools, ...tools].map((tool, i) => (
            <SkillBadge key={`tool-${i}`} name={tool} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
