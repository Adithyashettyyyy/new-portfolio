import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  Database,
  Globe,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ContactForm";
import AnimatedBackground from "@/components/AnimatedBackground";
import TypingAnimation from "@/components/TypingAnimation";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Index() {
  const projects = [
    {
      title: "Custom-Designed Music Streaming Interface",
      description:
        "Built a responsive, genre-aware music UI using React, Tailwind CSS, and Framer Motion with dynamic theming. Features API integration for album data and personalized recommendations.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "APIs", "Vercel"],
      image: "/placeholder.svg",
      github: "https://github.com/Adithyashettyyyy",
      live: "#",
      status: "Live",
      year: "2025",
      featured: true,
    },
    {
      title: "Autoencoder-Based Adversarial Perturbation Detection",
      description:
        "Developed a robust system for detecting adversarial attacks using autoencoders trained on clean data with encoding-decoding mechanism and reconstruction error-based classification.",
      tech: ["Python", "TensorFlow", "Machine Learning", "Neural Networks"],
      image: "/placeholder.svg",
      github: "https://github.com/Adithyashettyyyy",
      live: "#",
      status: "Completed",
      year: "2024",
    },
    {
      title: "Rubik's Cube Timer Application",
      description:
        "A full-stack web app for Rubik's Cube timing with JavaScript and MongoDB. Features timer interface, automated averages, RESTful APIs, and secure authentication.",
      tech: ["JavaScript", "MongoDB", "Node.js", "Express", "Vercel"],
      image: "/placeholder.svg",
      github: "https://github.com/Adithyashettyyyy",
      live: "#",
      status: "Live",
      year: "2024",
    },
    {
      title: "Helmet Detection using YOLO v10",
      description:
        "Real-time helmet detection system using YOLO v10 dataset from DataFlow. Developed in PyCharm with Roboflow for dataset preparation and high accuracy training.",
      tech: ["Python", "YOLO v10", "Computer Vision", "Roboflow", "PyCharm"],
      image: "/placeholder.svg",
      github: "https://github.com/Adithyashettyyyy",
      live: "#",
      status: "Completed",
      year: "2024",
    },
  ];

  const skillCategories = [
    {
      category: "Languages",
      icon: <Code2 className="h-4 w-4" />,
      skills: ["Java", "C", "JavaScript", "Python", "SQL"],
      color: "bg-blue-500/20 text-blue-300 border-blue-500/50",
    },
    {
      category: "Frameworks & Libraries",
      icon: <Globe className="h-4 w-4" />,
      skills: ["React", "Node.js", "Express", "TensorFlow"],
      color: "bg-green-500/20 text-green-300 border-green-500/50",
    },
    {
      category: "Databases & Tools",
      icon: <Database className="h-4 w-4" />,
      skills: ["MongoDB", "MySQL", "Snowflake", "Git", "Power BI"],
      color: "bg-purple-500/20 text-purple-300 border-purple-500/50",
    },
    {
      category: "Technologies & Platforms",
      icon: <Zap className="h-4 w-4" />,
      skills: ["Vercel", "EmailJS", "Excel", "HTML", "CSS"],
      color: "bg-orange-500/20 text-orange-300 border-orange-500/50",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated Background */}
      <AnimatedBackground />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 relative">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="font-bold text-lg sm:text-xl lg:text-2xl text-primary">
              Adithya Shetty
            </div>
            <div className="hidden sm:flex space-x-4 md:space-x-6 lg:space-x-8">
              <a
                href="#home"
                className="text-sm md:text-base text-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm md:text-base text-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-sm md:text-base text-foreground hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-sm md:text-base text-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-sm md:text-base text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
            {/* Mobile menu button could go here */}
          </div>
        </div>
      </nav>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 px-3 sm:px-6 lg:px-8"
      >
        <div className="max-w-screen-2xl mx-auto">
          {/* Top Section - Photo and Name Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
            {/* Left Side - Professional Image */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-center">
              <div className="relative group">
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative overflow-hidden rounded-full border-4 border-primary/30 shadow-2xl group-hover:border-primary/60 transition-all duration-500 bg-gradient-to-br from-primary/10 to-purple-500/10">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F1dfbdcdd29e14740adee48d2872417cc%2F7ead23f4504c4552b801f30a47d0d9c2?format=webp&width=800"
                    alt="Adithya Shetty B"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20 opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>

                  {/* Floating elements around image */}
                  <div className="absolute -top-6 -right-6 w-10 h-10 bg-primary/30 rounded-full blur-md animate-float"></div>
                  <div
                    className="absolute -bottom-8 -left-8 w-14 h-14 bg-purple-500/20 rounded-full blur-lg animate-float"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute top-1/4 -right-10 w-8 h-8 bg-blue-500/25 rounded-full blur-sm animate-float"
                    style={{ animationDelay: "2s" }}
                  ></div>
                  <div
                    className="absolute bottom-1/4 -left-10 w-6 h-6 bg-orange-500/30 rounded-full blur-sm animate-float"
                    style={{ animationDelay: "3s" }}
                  ></div>
                </div>

                {/* Status Badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm shadow-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">
                    Available for opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Just Name */}
            <div className="order-1 lg:order-2 text-center lg:text-left flex flex-col justify-center min-h-[400px] lg:min-h-[500px]">
              <div className="text-base sm:text-lg md:text-xl text-primary font-medium mb-6 tracking-wider uppercase">
                Computer Science Student & Developer
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-6 leading-tight">
                MY NAME IS
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent leading-tight">
                ADITHYA SHETTY B
              </h1>
            </div>
          </div>

          {/* Bottom Section - All Other Content */}
          <div className="text-center space-y-8 lg:space-y-12">
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <Badge
                variant="outline"
                className="bg-blue-500/10 text-blue-300 border-blue-500/30 px-3 py-1"
              >
                🎓 Final Year Student
              </Badge>
              <Badge
                variant="outline"
                className="bg-purple-500/10 text-purple-300 border-purple-500/30 px-3 py-1"
              >
                💻 Full-Stack Developer
              </Badge>
              <Badge
                variant="outline"
                className="bg-green-500/10 text-green-300 border-green-500/30 px-3 py-1"
              >
                🤖 AI Enthusiast
              </Badge>
              <Badge
                variant="outline"
                className="bg-orange-500/10 text-orange-300 border-orange-500/30 px-3 py-1"
              >
                📊 Data Analyst
              </Badge>
            </div>

            {/* Description */}
            <div className="space-y-4 max-w-4xl mx-auto">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                <TypingAnimation
                  text="Passionate Computer Science student at Canara Engineering College with 80.2% CGPA. Experienced in building scalable web applications, implementing machine learning solutions, and solving complex data problems."
                  speed={50}
                />
              </p>
              <p className="text-sm sm:text-base text-muted-foreground/80">
                Proven track record through internships at{" "}
                <span className="text-primary font-semibold">PriceEasy AI</span>{" "}
                and{" "}
                <span className="text-primary font-semibold">
                  Dregal I PVT.LTD
                </span>
                . Based in{" "}
                <span className="text-primary font-medium">
                  Darbe, Puttur, Karnataka
                </span>
                .
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="bg-card/40 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-border/30 hover:border-primary/40 transition-all duration-300 group text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  4+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Projects Built
                </div>
              </div>
              <div className="bg-card/40 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-border/30 hover:border-primary/40 transition-all duration-300 group text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Internships
                </div>
              </div>
              <div className="bg-card/40 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-border/30 hover:border-primary/40 transition-all duration-300 group text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  80.2%
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  CGPA
                </div>
              </div>
              <div className="bg-card/40 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-border/30 hover:border-primary/40 transition-all duration-300 group text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Technologies
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <Button
                size="lg"
                className="relative text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 w-full sm:w-auto group overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:shadow-2xl"
                asChild
              >
                <a href="#projects">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                  <span className="relative z-10 flex items-center">
                    VIEW MY WORK{" "}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="relative text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 w-full sm:w-auto group overflow-hidden border-2 border-primary/30 bg-background/50 backdrop-blur-sm hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                asChild
              >
                <a
                  href="/Adithya_Shetty_Resume.pdf"
                  download="Adithya_Shetty_Resume.pdf"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                  <span className="relative z-10 flex items-center">
                    <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-200" />
                    DOWNLOAD CV
                  </span>
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 sm:gap-6 pt-4">
              <Button
                size="sm"
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                asChild
              >
                <a
                  href="https://linkedin.com/in/adithya-shetty-b-9047b0228"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                asChild
              >
                <a
                  href="https://github.com/Adithyashettyyyy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                asChild
              >
                <a href="mailto:adithyashetty2003@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 bg-muted/20"
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-6">
              Let's Work Together
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-2">
              I'm actively seeking opportunities in software development and
              data science. Let's connect and discuss potential collaborations
              or projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  Connect with me
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Prefer social media? You can find me on these platforms:
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full justify-start text-sm sm:text-base p-3 sm:p-4"
                    asChild
                  >
                    <a
                      href="https://linkedin.com/in/adithya-shetty-b-9047b0228"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="hidden sm:inline">
                        LinkedIn - Professional Network
                      </span>
                      <span className="sm:hidden">LinkedIn</span>
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full justify-start text-sm sm:text-base p-3 sm:p-4"
                    asChild
                  >
                    <a
                      href="https://github.com/Adithyashettyyyy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="hidden sm:inline">
                        GitHub - Code Portfolio
                      </span>
                      <span className="sm:hidden">GitHub</span>
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  Quick Response
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  I typically respond to messages within 24 hours. For urgent
                  inquiries, feel free to reach out directly via email or
                  LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-6 sm:py-8 md:py-10 px-3 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-screen-2xl mx-auto text-center">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground px-2">
            © {new Date().getFullYear()} Adithya Shetty B. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
