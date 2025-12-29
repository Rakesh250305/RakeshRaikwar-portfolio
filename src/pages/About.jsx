import Education from "../components/Education.jsx";
import Experience from "../components/Experience.jsx";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";


export default function About() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-screen xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          About <span className="text-blue-400">Me</span>
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base leading-8 text-gray-300 text-center max-w-4xl mx-auto">
          Hello! I'm <span className="text-white font-medium">Rakesh Raikwar</span>, a passionate 
          <span className="text-blue-400"> MERN Stack Developer</span> with experience in building 
          scalable and responsive web applications. I work extensively with 
          React.js, Node.js, Express, and MongoDB to create clean user interfaces 
          and efficient backend systems.
          <br /><br />
          I enjoy solving real-world problems, collaborating in team environments,
          and continuously learning new technologies. Outside of development,
          I actively explore modern web trends and contribute to meaningful projects.
        </p>

        {/* Education */}
        <div className="mt-20">
          <Education />
        </div>

        {/* Experience */}
        <Experience />

            


      </div>
    </section>
  );
}
