import ProjectCard from "../components/ProjectCard.jsx";
import vnh from '../assets/images/VitsNotesHubHome.png'
import timebank from '../assets/images/TimebankHome.png'
import drawno from '../assets/images/DrawnoHome.png'
import nike from '../assets/images/Nike-redesignedHome.png'
import ford from '../assets/images/Ford-redesigned-Home.png'
import zappos from '../assets/images/ZapposHome.png'



export default function ProjectDetails() {
  const projects = [
    {
          image: timebank,
          title: "TimeBank: Trade Time - Not Money",
          description:
            "A time-based service exchange platform where users earn and spend credits by completing tasks..",
          tech: ["React.js", "Express", "Node", "Mongodb", "tailwindCSS" ,"JWT"],
            github: "https://github.com/Rakesh250305/TimeBank-Frontend",
          live: "https://timebank-alpha.vercel.app/",
        },
        {
          image: vnh,
          title: "VITS Notes Hub",
          description:
            "A centralized academic platform for students and faculty to securely upload, manage, and access study materials with role-based authentication and a clean dashboard experience.",
          tech: ["HTML5", "CSS3", "javascript", "MongoDB", "Ejs", "TailwindCSS" , "JWT"],
            github: "#",
          live: "https://vitsnoteshub.onrender.com/",
        },
        {
          image: drawno,
          title: "Drawno: Realtime Collaborative whiteboard",
          description:
            "A real-time collaborative whiteboard for drawing, studying, screen sharing, and synchronized learning.",
          tech:[ "React.js" , "express", "Node", "mopngoDB", "TailwindCSS", "Socket.io", "Youutube API"],
            github: "#",
          live: "https://drawno-frontend.vercel.app/",
        },
    {
      image: ford,
      title: "Ford : Redesigned website",
      description:
        "A premium automotive website redesign showcasing vehicles with a strong brand identity.",
      tech: ["HTML5", "CSS3", "javascript"],
      github: "https://github.com/Rakesh250305/TheTripleThreatReimagineRound1",
      live: "https://the-triple-threat-reimagine-round1.vercel.app/",
    },
    {
      image: zappos,
      title: "Zappos : Redesigned website",
      description:
        "A clean and user-friendly redesign of an e-commerce platform for shoes and apparel.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Rakesh250305/TheTripleThreatReimagineRound1",
      live: "https://the-triple-threat-reimagine-round2.vercel.app/",
    },
    {
      image: nike,
      title: "Nike : Redesigned website",
      description:
        "A bold and modern redesign of Nike’s sports footwear website with a performance-focused UI.",
      tech: ["HTML5", "CSS3", "javascript"],
      github: "https://github.com/Rakesh250305/Nike-Redesigned.git ",
      live: "https://nike-redesigned-rakesh.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-28 bg-gray-950 text-white">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold text-center mb-10">
        All Projects
      </h2>

      {/* Projects Grid */}
      <div
        className="max-w-7xl mx-auto px-6
        grid gap-6
        sm:grid-cols-2
        lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
