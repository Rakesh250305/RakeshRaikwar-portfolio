import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "High School (10th)",
      field: "General Studies",
      institute: "Govt. Excellence Hr. Sec. Venkat No.1 Satna",
      Board: "M.P. Board",
      duration: "2018 – 2020",
      description: "93.33%",
    },
    {
      degree: "Higher Secondary (12th)",
      field: "Science (PCM)",
      institute: "Govt. Excellence Hr. Sec. Venkat No.1 Satna",
      Board: "M.P. Board",
      duration: "2020 – 2022",
      description: "87%",
    },
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institute: "Vindhya Institute of Technology & Science, Satna",
      Board: "RGPV Bhopal",
      duration: "2022 – 2026",
      description: "8.82 CGPA",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-950 text-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
        <span className="text-blue-400">Education</span>
      </h2>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Vertical spine line */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/20 transform -translate-x-1/2"></div>

        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`mb-16 flex flex-col md:flex-row items-center md:items-start gap-6 relative ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Icon */}
            <div className="absolute left-1/2 md:relative md:left-0 transform -translate-x-1/2 md:translate-x-0 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-black">
              <FaGraduationCap />
            </div>

            {/* Card */}
            <div className="bg-gray-900 border border-white/10 rounded-xl p-6 w-full md:w-[45%] hover:shadow-lg hover:shadow-blue-500/20 transition mt-6 md:mt-0">
              <h3 className="text-lg font-semibold text-blue-400">{edu.degree}</h3>
              <p className="text-sm text-gray-400 mt-1">{edu.institute} • {edu.Board}</p>
              <p className="text-xs text-gray-500 mt-1">{edu.field} · {edu.duration}</p>
              <p className="text-sm text-gray-300 mt-3">CGPA / Percentage: {edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
