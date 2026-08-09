import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Realtime Chat App",
    description:
      " Developed and deployed a full-stack, real-time chat application using the MERN stack.",
    image: "./projects/chatapp.png",
    tags: ["React", "WebSocket", "NodeJS"],
    link: "https://fullstack-chatapp-t7uz.onrender.com/login",
    github: "https://github.com/prashant1s/realtime-chat-app",
  },
  {
    title: "BJ Jewelry",
    description:
      "Built a full-featured jewelry e-commerce platform with live gold rate pricing, Razorpay payments, and a Sanity-powered product catalog.",
    image: "/projects/bjjewelry.png",
    tags: ["Next.js", "TypeScript", "Prisma", "Razorpay"],
    link: "https://www.bjjewelry.in/",
    github: "https://github.com/prashant1s/bjjewelry",
  },
  {
    title: "GoDigital Agency",
    description:
      "Designed and developed the marketing website for a performance and brand growth agency, showcasing services across strategy, creative, and e-commerce growth.",
    image: "/projects/godigital.png",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    link: "https://www.godigitalagency.in/",
    github: "https://github.com/prashant1s/godigital",
  },
  {
    title: "JiyaJR E-Commerce",
    description:
      "Developed a modern e-commerce storefront with a Sanity-powered product catalog and a fully responsive shopping experience.",
    image: "/projects/ecomm.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Sanity CMS"],
    link: "https://www.jiyajr.com/",
    github: "https://github.com/prashant1s/ecomm",
  },
//   {
//     title: "AI Writing Assistant",
//     description:
//       "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
//     image: "/projects/project3.png",
//     tags: ["React", "OpenAI", "Python", "FastAPI"],
//     link: "#",
//     github: "#",
//   },
  
];

export const Projects = () => {
  return (
    <section id="projects" className="py-25 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          {/* <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p> */}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
