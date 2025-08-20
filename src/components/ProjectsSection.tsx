import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-commerce Storefront",
    description: "A full-stack e-commerce platform with user authentication, product listings, and a shopping cart.",
    imageUrl: "https://via.placeholder.com/400x250/F0F0F0/333333?text=E-commerce",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Task Management App",
    description: "A minimalist task manager with drag-and-drop functionality and real-time updates.",
    imageUrl: "https://via.placeholder.com/400x250/F0F0F0/333333?text=Task+App",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Personal Blog",
    description: "A responsive blog platform with markdown support and comment sections.",
    imageUrl: "https://via.placeholder.com/400x250/F0F0F0/333333?text=Blog",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather application fetching data from a public API.",
    imageUrl: "https://via.placeholder.com/400x250/F0F0F0/333333?text=Weather",
    githubLink: "#",
    liveLink: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center text-foreground">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
