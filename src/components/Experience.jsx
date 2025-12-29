import { motion } from "framer-motion";
import Tthlogo from "../assets//images/TechharvestLogo.jpg";

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer (Intern)",
      company: "TechHarvest Solutions Pvt. Ltd.",
      duration: "July 2025 – Present",
      description:
        "Developed scalable MERN applications, implemented JWT authentication, and built responsive admin dashboards.",
      highlights: [
        "Built REST APIs using Node & Express",
        "Implemented role-based authentication",
        "Optimized MongoDB queries",
      ],
      image: Tthlogo,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950 text-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
        <span className="text-blue-400">Experience</span>
      </h2>

      <div className="max-w-5xl mx-auto px-6 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            {/* Company Image */}
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border border-white/10 bg-gray-900 flex items-center justify-center">
              <img
                src={exp.image}
                alt={exp.company}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Experience Details */}
            <div className="bg-gray-900 border border-white/10 rounded-xl p-6 flex-1 hover:shadow-lg hover:shadow-blue-500/20 transition">
              <h3 className="text-lg font-semibold text-blue-400">{exp.role}</h3>
              <p className="text-sm text-gray-400 mt-1">
                {exp.company} • {exp.duration}
              </p>
              <p className="text-sm text-gray-300 mt-3">{exp.description}</p>

              <ul className="mt-4 space-y-2 text-sm text-gray-400 list-disc list-inside">
                {exp.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
