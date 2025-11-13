import { useState } from "react";
import { LinkedinIcon, Github, Mail, Code2, GraduationCap, Briefcase, SquareCheckBig, BicepsFlexed, Book, Bike } from "lucide-react";


function About() {
  const [copied, setCopied] = useState(false);

  const onMailClick = () => {
    navigator.clipboard.writeText("zarifahnaf1@gmail.com")
    .then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    })
  }

  const skills = {
    languages: ["Python", "TypeScript", "JavaScript", "R", "C++", "Java"],
    data: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Matplotlib"],
    web: ["React", "Node.js", "MongoDB", "Tailwind CSS", "D3.js"]
  };
  return (
    <div className="flex h-full md:h-auto animate-fadeIn">
      {/* Left section */}
      <div className="hidden md:flex md:sticky md:top-24 md:h-[calc(100vh-6rem)] flex-col items-center justify-start w-1/5 bg-accent/5 border-r border-border pt-8 pb-6 px-6 overflow-y-auto">
        <div className="w-56 h-64 bg-accent rounded-md"></div>
        <p className="mt-4 text-foreground text-lg font-semibold">Zarif Ahmed</p>
        <p className="text-muted-foreground text-base text-center mb-3">Researcher at PoliTech and Co-founder of Kura Customs</p>
        {/* Social media links underline the texts */}
        <a
          target="_blank" 
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ahmedzarif"
          className="flex items-center gap-2 text-foreground hover:text-accent-foreground transition-colors text-lg font-medium group"
        >
          <LinkedinIcon className="w-5 h-5 group-hover:scale-120 transition-transform" />
          <span className="underline translate-y-[1.5px]">LinkedIn</span>
        </a>
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://github.com/Zarif-SBU" 
          className="flex items-center gap-2 text-foreground hover:text-accent-foreground transition-colors text-lg font-medium group "
        >
          <Github className="w-5 h-5 group-hover:scale-120 transition-transform" />
          <span className="underline translate-y-[1.5px] ">GitHub</span>
        </a>
        <button 
          onClick={onMailClick} 
          className="relative flex items-center gap-2 text-foreground hover:text-accent-foreground transition-colors text-lg font-medium group cursor-pointer"
        >
          <Mail className="w-5 h-5 group-hover:scale-120 transition-transform" />
          <span className="underline translate-y-[1.5px]">zarifahnaf1@gmail.com</span>
          {copied && (
            <span className="pointer-events-none absolute left-full ml-2 top-1/2 -translate-y-1/2 
                  text-secondary-foreground bg-secondary rounded-md
                  px-3 py-1 border text-sm font-medium shadow-lg animate-in fade-in slide-in-from-left-2 duration-200">
              Copied!
            </span>
          )}
        </button>
      </div>

      {/* Right section (content) */}
      <main className="flex-1 pt-6 px-6 overflow-y-auto animate-fadeIn">
        <div className="max-w-352 mx-auto">
        <div className="bg-accent/10 border-l-4 border-accent px-3 py-2 rounded-r shadow-sm flex-shrink-0 mb-2">
          <p className="text-base font-medium text-accent-foreground">
           👷🚧 Portfolio still in progress but feel free to explore!
          </p>
        </div>        
        <h1 className="text-3xl font-bold mb-4 text-foreground">About Me</h1>
        <p className="text-base leading-relaxed text-foreground mb-4">
          Hello! I'm Zarif, a recent graduate from Stony Brook University who majored in both Applied Mathematics and Computer Science. I have a strong passion for problem-solving and coding, which drove me to pursue a career in data science and software engineering. As I continued my acedemic journey I found an appreciation for using Computer simulations and Mathematical models to solve complex biological problems. With that interest, 
          I aspire to persue a master's in computational biology or a related field in the future.
        </p>
       {/* 2x2 Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Education */}
          <div className="bg-accent/5 border-border px-6 pt-4">
            <h3 className="text-xl font-semibold text-accent-foreground mb-3 flex items-center gap-2 border-b">
              <GraduationCap className="w-6 h-6" />
              Education
            </h3>
            <p className="text-lg font-bold text-foreground">Stony Brook University</p>
            <p className="text-base text-foreground mt-1">B.S. Applied Mathematics</p>
            <p className="text-base text-foreground">B.S. Computer Science</p>
            <p className="text-base text-accent-foreground font-medium mt-2">Class of 2025</p>
          </div>

          {/* Skills */}
          <div className="bg-accent/5 border-border px-6 pt-4">
            <h3 className="text-xl font-semibold text-accent-foreground mb-3 flex items-center gap-2 border-b">
              <Code2 className="w-5 h-5" />
              Skills & Technologies
            </h3>
            <div className="space-y-2">
              <div>
                <h4 className="text-base font-semibold text-foreground mb-1">Languages</h4>
                <div className="flex flex-wrap gap-1">
                  {skills.languages.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-0.5 bg-accent/20 text-foreground text-sm rounded-md border border-accent/30 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-1">Data Science & ML</h4>
                <div className="flex flex-wrap gap-1">
                  {skills.data.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-0.5 bg-accent/20 text-foreground text-sm rounded-md border border-accent/30 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-1">Web Development</h4>
                <div className="flex flex-wrap gap-1">
                  {skills.web.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-0.5 bg-accent/20 text-foreground text-sm rounded-md border border-accent/30 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Current */}
          <div className="bg-accent/5 border-border px-6 pt-4 ">
            <h3 className="text-xl font-semibold text-accent-foreground mb-3 flex items-center gap-2 border-b">
              <Briefcase className="w-5 h-5" />
              Current
            </h3>
            <ul className="space-y-2 text-base text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent-foreground mt-1">•</span>
                <span className="translate-y-[3.5px]">Researcher at PoliTech building our data repository and data visualization tools.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-foreground mt-1">•</span>
                <span className="translate-y-[4px]">Co-founder of Kura Customs an e-commerce project built alongside my friends!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-foreground mt-1">•</span>
                <span className="translate-y-[4px]">Activly looking for opportunities in data science and software engineering.</span>
              </li>
            </ul>
          </div>

          {/* Hobbies */}
          <div className="bg-accent/5 border-border px-6 pt-4 ">
            <h3 className="text-xl font-semibold text-accent-foreground mb-3 flex items-center gap-2 border-b">
              <SquareCheckBig className="w-5 h-5" />
              Hobbies and Interests
            </h3>
            <ul className="space-y-2 text-base text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent-foreground mt-1"> <BicepsFlexed className="w-5 h-5"/></span>
                <span className="translate-y-[3px]"> I love going to the gym, almost about to reach 225lbs bench and 315lbs deadlift. </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-foreground mt-1"> <Book className="w-5 h-5"/></span>
                <span className="translate-y-[3px]"> I recently picked up reading books again, currently reading the Dune series. </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-foreground mt-1"> <Bike className="w-5 h-5"/></span>
                <span className="translate-y-[2px]"> Snowboarding, sky diving, jet skiing, surfing and getting a motor cycle license are some of things in my bucket list I want to be able to do . </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}

export default About;
