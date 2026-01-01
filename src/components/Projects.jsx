import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import VNH from '../assets/images/VitsNotesHubHome.png'
import timebank from '../assets/images/TimebankHome.png'
import drawno from '../assets/images/DrawnoHome.png'

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projects = [
    {
      title: "TimeBank: Trade Time - Not Money",
      description:
        "A time-based service exchange platform where users earn and spend credits by completing tasks..",
      github: "https://github.com/Rakesh250305/TimeBank-Frontend",
      demo: "https://timebank-alpha.vercel.app/",
      image: timebank,
    },
    {
      title: "VITS Notes Hub",
      description:
        "A centralized academic platform for students and faculty to securely upload, manage, and access study materials with role-based authentication and a clean dashboard experience.",
      github: "#",
      demo: "https://vitsnoteshub.onrender.com/",
      image: VNH,
    },
    {
      title: "Drawno: Realtime Collaborative whiteboard",
      description:
        "A real-time collaborative whiteboard for drawing, studying, screen sharing, and synchronized learning.",
      github: "https://github.com/Rakesh250305/drawno-frontend.git",
      demo: "https://drawno-frontend.vercel.app/",
      image: drawno,
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".project-card").forEach((card, i) => {
        const image = card.querySelector(".project-image");
        const content = card.querySelector(".project-content");

        gsap.fromTo(
          image,
          { x: i % 2 === 0 ? -80 : 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
            },
          }
        );

        gsap.fromTo(
          content,
          { x: i % 2 === 0 ? 80 : -80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top 65%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-gray-950 text-white py-20 px-6"
    >
      {/* Section Heading */}
      <h2 className="text-3xl font-semibold text-center mb-14">
        <span className="text-blue-400">Projects</span> I’ve Built
      </h2>

      {/* Projects */}
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="project-image w-full md:w-1/2 rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-blue-500/20 transition">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="project-content w-full md:w-1/2">
              <h3 className="text-lg font-semibold text-blue-400">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                {project.description}
              </p>

              {/* Links */}
              <div className="mt-5 flex gap-6 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More */}
      <div className="flex justify-center mt-16">
        <button
          onClick={() => window.location.href = "/project-details"}
          className="px-8 py-3 text-sm font-medium rounded-full border border-blue-400/40 text-blue-400 hover:bg-blue-400 hover:text-black transition"
        >
          Explore More Projects →
        </button>
      </div>
    </section>
  );
};

export default Projects;
