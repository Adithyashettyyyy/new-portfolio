import { Badge } from "@/components/ui/badge";
import { MapPin, Code2, Database, Globe, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [contentRef, contentVisible] = useScrollAnimation(0.1);
  const [skillsRef, skillsVisible] = useScrollAnimation(0.1);

  const skillCategories = [
    {
      category: "Languages",
      icon: <Code2 className="h-4 w-4" />,
      skills: ["Java", "C", "JavaScript", "Python", "SQL"],
      color: "bg-blue-500/20 text-blue-300 border-blue-500/50"
    },
    {
      category: "Frameworks & Libraries", 
      icon: <Globe className="h-4 w-4" />,
      skills: ["React", "Node.js", "Express", "TensorFlow"],
      color: "bg-green-500/20 text-green-300 border-green-500/50"
    },
    {
      category: "Databases & Tools",
      icon: <Database className="h-4 w-4" />,
      skills: ["MongoDB", "MySQL", "Snowflake", "Git", "Power BI"],
      color: "bg-purple-500/20 text-purple-300 border-purple-500/50"
    },
    {
      category: "Technologies & Platforms",
      icon: <Zap className="h-4 w-4" />,
      skills: ["Vercel", "EmailJS", "Excel", "HTML", "CSS"],
      color: "bg-orange-500/20 text-orange-300 border-orange-500/50"
    }
  ];

  return (
    <section id="about" className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-screen-2xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-6">About Me</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-2">
            Passionate developer with a love for creating digital experiences that make a difference
          </p>
        </div>
        
        <div
          ref={contentRef}
          className={`max-w-2xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 delay-300 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4 sm:mb-6">My Journey</h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                My journey into technology began with curiosity about how digital systems work. Currently pursuing my
                <span className="text-primary font-semibold"> Bachelor of Engineering in Computer Science</span> at
                <span className="text-primary font-semibold"> Canara Engineering College, Bantwal</span>, I've maintained
                a strong academic record with <span className="text-primary font-semibold">80.2% CGPA</span>.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                What sets me apart is my hands-on approach to learning. Through internships at
                <span className="text-primary font-semibold"> PriceEasy AI</span> as a Product Analyst and
                <span className="text-primary font-semibold"> Dregal I PVT.LTD</span> as a Software Developer,
                I've gained real-world experience in data analysis, machine learning, and full-stack development.
              </p>
              <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-muted-foreground">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span>Based in <span className="text-primary font-medium">Darbe, Puttur, Karnataka</span></span>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {/* Achievement Cards */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-blue-500/20">
                <h4 className="text-lg font-semibold text-blue-300 mb-2">🎓 Academic Excellence</h4>
                <p className="text-sm text-muted-foreground">Maintaining 80.2% CGPA in Computer Science Engineering with focus on AI, Machine Learning, and Software Development</p>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-green-500/20">
                <h4 className="text-lg font-semibold text-green-300 mb-2">💼 Professional Experience</h4>
                <p className="text-sm text-muted-foreground">2 successful internships in product analysis and software development, working with real-world datasets and production systems</p>
              </div>

              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-orange-500/20">
                <h4 className="text-lg font-semibold text-orange-300 mb-2">🚀 Project Impact</h4>
                <p className="text-sm text-muted-foreground">Built 4+ production-ready applications including AI systems, web platforms, and data analysis tools</p>
              </div>
            </div>
          </div>

          {/* Interests and Passions */}
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-6 sm:mb-8">What Drives Me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-card/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-border/30 hover:border-primary/40 transition-all duration-300 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🤖</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">AI & Machine Learning</h4>
                <p className="text-sm text-muted-foreground">Fascinated by neural networks, computer vision, and the potential of AI to solve real-world problems</p>
              </div>

              <div className="bg-card/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-border/30 hover:border-primary/40 transition-all duration-300 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🌐</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Web Innovation</h4>
                <p className="text-sm text-muted-foreground">Creating seamless user experiences with modern frameworks and responsive design principles</p>
              </div>

              <div className="bg-card/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-border/30 hover:border-primary/40 transition-all duration-300 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📊</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Data Science</h4>
                <p className="text-sm text-muted-foreground">Extracting insights from complex datasets to drive informed business decisions and strategies</p>
              </div>
            </div>
          </div>


        </div>
        
        <div 
          ref={skillsRef}
          className={`text-center transition-all duration-1000 delay-600 ${
            skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6 sm:mb-8 lg:mb-10">
            Skills & Technologies
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-screen-xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.category}
                className={`transition-all duration-500 ${
                  skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${800 + categoryIndex * 150}ms` }}
              >
                <div className="bg-card/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-border/60 hover:border-primary/60 hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      {category.icon}
                    </div>
                    <h4 className="font-semibold text-sm sm:text-base text-foreground">
                      {category.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className={`text-xs px-2 py-1 border transition-all duration-300 hover:scale-105 ${category.color}`}
                        style={{ 
                          animationDelay: `${1000 + categoryIndex * 150 + skillIndex * 50}ms` 
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
