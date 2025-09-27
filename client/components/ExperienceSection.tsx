import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ExperienceSection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [experienceRef, experienceVisible] = useScrollAnimation(0.1);

  return (
    <section id="experience" className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-6">Experience</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-2">
            Professional experience and internships that have shaped my career
          </p>
        </div>
        
        <div 
          ref={experienceRef}
          className={`space-y-6 sm:space-y-8 md:space-y-10 transition-all duration-1000 delay-300 ${
            experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Pricing Strategy & Data Engineer */}
          <div className="flex gap-4 sm:gap-6 md:gap-8 group hover:bg-card/40 backdrop-blur-sm rounded-lg p-4 border border-border/30 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                Pricing Strategy & Data Engineer
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-primary mb-2 sm:mb-3 font-medium">
                PriceEasy AI | Feb 2025 – Present
              </p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Built and automated pipelines processing fuel price data from multiple sources, handling millions of records weekly. 
                Scheduled hourly ingestion reducing latency from 24h to under 1h. Designed ETL workflows in Snowflake, 
                optimized SQL queries cutting execution time by 30%, and applied validation rules reducing erroneous entries by 40%.
              </p>
            </div>
          </div>

          {/* Product Analyst Intern */}
          <div className="flex gap-4 sm:gap-6 md:gap-8 group hover:bg-card/40 backdrop-blur-sm rounded-lg p-4 border border-border/30 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                Product Analyst Intern
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-primary mb-2 sm:mb-3 font-medium">
                PriceEasy AI | 2025
              </p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Contributed to product analysis and data-driven decision-making to support pricing strategies. 
                Managed large datasets using SQL and Snowflake, identified competitor pricing trends, and 
                improved product accuracy through high-quality data annotation.
              </p>
            </div>
          </div>

          {/* Software Developer Intern */}
          <div className="flex gap-4 sm:gap-6 md:gap-8 group hover:bg-card/40 backdrop-blur-sm rounded-lg p-4 border border-border/30 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                Software Developer Intern
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-primary mb-2 sm:mb-3 font-medium">
                Dregal I PVT.LTD | 2024
              </p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Created a personal portfolio website using ReactJS, HTML, CSS, and EmailJS for contact form integration. 
                Deployed the site using Vercel to ensure fast and reliable cloud hosting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
