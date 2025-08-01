import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Star, Clock, Code2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
    github: string;
    live: string;
    status?: string;
    year?: string;
    featured?: boolean;
  };
  index: number;
}

const techColors: Record<string, string> = {
  "React": "bg-blue-500/20 text-blue-300 border-blue-500/50",
  "JavaScript": "bg-yellow-500/20 text-yellow-300 border-yellow-500/50",
  "Python": "bg-green-500/20 text-green-300 border-green-500/50",
  "Node.js": "bg-emerald-500/20 text-emerald-300 border-emerald-500/50",
  "MongoDB": "bg-green-600/20 text-green-400 border-green-600/50",
  "TensorFlow": "bg-orange-500/20 text-orange-300 border-orange-500/50",
  "TypeScript": "bg-blue-600/20 text-blue-400 border-blue-600/50",
  "Tailwind CSS": "bg-cyan-500/20 text-cyan-300 border-cyan-500/50",
  "Framer Motion": "bg-purple-500/20 text-purple-300 border-purple-500/50",
  "YOLO v10": "bg-red-500/20 text-red-300 border-red-500/50",
  "Vercel": "bg-gray-500/20 text-gray-300 border-gray-500/50",
  "Express": "bg-gray-600/20 text-gray-300 border-gray-600/50"
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <Card
      ref={ref}
      className={`group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border/60 hover:border-primary/60 hover:bg-card/90 transition-all duration-500 h-full shadow-xl hover:shadow-2xl hover:shadow-primary/10 ${
        isVisible
          ? 'animate-slide-up opacity-100'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        animationDelay: `${index * 150}ms`,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)'
      }}
    >
      {project.featured && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-primary/20 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="h-3 w-3 text-primary fill-primary" />
            <span className="text-xs text-primary font-medium">Featured</span>
          </div>
        </div>
      )}

      <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/20 rounded-t-lg overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay with quick actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button size="sm" variant="secondary" className="backdrop-blur-sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View Code
            </a>
          </Button>
        </div>
      </div>

      <CardHeader className="relative">
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
            {project.title}
          </CardTitle>
          {project.year && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {project.year}
            </div>
          )}
        </div>
        <CardDescription className="text-sm leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className={`text-xs px-2 py-1 border transition-all duration-300 hover:scale-105 ${
                techColors[tech] || "bg-muted/50 text-muted-foreground border-muted"
              }`}
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="w-full group/btn" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-3 w-3 group-hover/btn:rotate-12 transition-transform duration-200" />
              View Source Code
            </a>
          </Button>
        </div>

        {project.status && (
          <div className="mt-3 pt-3 border-t border-border/50">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                project.status === 'Live' ? 'bg-green-400' : 
                project.status === 'In Development' ? 'bg-yellow-400' : 'bg-gray-400'
              } animate-pulse`} />
              <span className="text-xs text-muted-foreground">{project.status}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
