import ProjectCard from "@/components/ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ProjectsSection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);

  const projects = [
    {
      title: "Audify - Music Streaming Interface",
      description: "Built a responsive, genre-aware music streaming platform called Audify using React, Tailwind CSS, and Framer Motion with dynamic theming. Features API integration for album data and personalized recommendations.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "APIs", "Vercel"],
      image: "https://cdn.builder.io/api/v1/image/assets%2F1dfbdcdd29e14740adee48d2872417cc%2F60c23bf13c024fd3aef92490813d1ed6?format=webp&width=800",
      github: "https://github.com/Adithyashettyyyy",
      status: "Completed",
      year: "2025",
      featured: true
    },
    {
      title: "Autoencoder-Based Adversarial Perturbation Detection",
      description: "Developed a robust system for detecting adversarial attacks using autoencoders trained on clean data with encoding-decoding mechanism and reconstruction error-based classification.",
      tech: ["Python", "TensorFlow", "Machine Learning", "Neural Networks"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop&crop=center",
      github: "https://github.com/Adithyashettyyyy",
      status: "Completed",
      year: "2024"
    },
    {
      title: "Rubik's Cube Timer Application",
      description: "A full-stack web app for Rubik's Cube timing with JavaScript and MongoDB. Features timer interface, automated averages, RESTful APIs, and secure authentication.",
      tech: ["JavaScript", "MongoDB", "Node.js", "Express", "Vercel"],
      image: "https://cdn.builder.io/api/v1/image/assets%2F1dfbdcdd29e14740adee48d2872417cc%2F53a1323a642e416b8c8ad27fd2c7800c?format=webp&width=800",
      github: "https://github.com/Adithyashettyyyy",
      status: "Completed",
      year: "2024"
    },
    {
      title: "Helmet Detection using YOLO v10",
      description: "Real-time helmet detection system using YOLO v10 dataset from DataFlow. Developed in PyCharm with Roboflow for dataset preparation and high accuracy training.",
      tech: ["Python", "YOLO v10", "Computer Vision", "Roboflow", "PyCharm"],
      image: "https://cdn.builder.io/api/v1/image/assets%2F1dfbdcdd29e14740adee48d2872417cc%2F210b5acbea9a47fea4e2acec89ae19e1?format=webp&width=800",
      github: "https://github.com/Adithyashettyyyy",
      status: "Completed",
      year: "2024"
    }
  ];

  return (
    <section id="projects" className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-6">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-2">
            A selection of my recent work showcasing different technologies and approaches
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
