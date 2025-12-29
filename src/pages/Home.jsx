import { Helmet } from "react-helmet-async";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import { Typewriter } from 'react-simple-typewriter';
import { FaChevronDown } from "react-icons/fa";


export default function Home() {
  return (
    <>
      <Helmet>
        <title>Rakesh Raikwar | MERN Stack Developer</title>
        <meta
          name="description"
          content="Rakesh Raikwar – B.Tech CSE fresher, MERN Stack and React.js Developer seeking a full-time Software Engineer role."
        />
        <meta name="author" content="Rakesh Raikwar" />
        <meta
          name="keywords"
          content="Rakesh Raikwar, MERN Stack Developer, React Developer, Software Engineer, Frontend Developer"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6">
        <div className="max-w-4xl text-center">
          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Hi, I’m <span className="text-blue-500">Rakesh</span>
          </h1>

          {/* Tagline */}
          <p className="mt-6 text-lg md:text-2xl text-gray-300">
  <Typewriter
    words={[
      "MERN Stack Developer",
      "Full Stack Web Developer",
      "Software Engineer",
    ]}
    loop
    cursor
    cursorStyle="|"
    typeSpeed={40}
    deleteSpeed={40}
    delaySpeed={1500}
  />
</p>

          {/* Short intro */}
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I’m a B.Tech Computer Science student passionate about building
            scalable web applications using modern technologies like React,
            Node.js, MongoDB, and Express. I’m actively seeking an opportunity to
contribute to dynamic projects while enhancing my skills in a collaborative environment.

          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
            >
              About me
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <a
      href="#contact"
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="animate-bounce text-gray-300 hover:text-white transition">
        <FaChevronDown size={28} />
      </div>
    </a>
      </section>

      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}
