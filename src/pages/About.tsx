import { useState } from "react";
import { LinkedinIcon, Github, Mail, Code2, GraduationCap, Briefcase } from "lucide-react";


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
        <p className="text-foreground text-base text-center mb-8">Researcher at PoliTech and Co-founder of Kura Customs</p>
        {/* Social media links underline the texts */}
      <a
        target="_blank" 
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/ahmedzarif"
        className="flex items-center gap-2 text-foreground hover:text-accent-foreground transition-colors text-base font-medium group"
      >
        <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="underline underline-offset-2">LinkedIn</span>
      </a>
      <a 
        target="_blank" 
        rel="noopener noreferrer" 
        href="https://github.com/Zarif-SBU" 
        className="flex items-center gap-2 text-foreground hover:text-accent-foreground transition-colors text-base font-medium group"
      >
        <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="underline underline-offset-2">GitHub</span>
      </a>
      <button 
        onClick={onMailClick} 
        className="relative flex items-center gap-2 text-foreground hover:text-accent-foreground transition-colors text-base font-medium group"
      >
        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="underline underline-offset-2">zarifahnaf1@gmail.com</span>
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
      <div className="flex-1 p-8">
        <div className="bg-accent/10 border-l-4 border-accent px-3 py-2 rounded-r shadow-sm flex-shrink-0 mb-2">
          <p className="text-base font-medium text-accent-foreground">
           👷🚧 Portfolio still in progress but feel free to explore!
          </p>
        </div>        
        <h1 className="text-4xl font-bold mb-4 text-foreground">About Me</h1>
        <p className="text-lg leading-relaxed text-foreground">
          Hello! I'm Zarif, a recent graduate from Stony Brook University who majored both Applied Mathematics and Computer Science. I have a strong passion for problem-solving and coding, which drove me to pursue a career in data science and software engineering. As I continued my acedemic journey I found an appreciation for using Computer simulations and Mathematical models to solve complex biological problems. With that interest, 
          I aspire to persue a master's in computational biology or a related field in the future.
        </p>
       {/* 2x2 Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Education */}
          <div className="bg-accent/5 border-r border-b border-border p-6">
            <h3 className="text-lg font-semibold text-accent-foreground mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Education
            </h3>
            <p className="text-sm font-medium text-foreground">Stony Brook University</p>
            <p className="text-xs text-foreground mt-1">B.S. Applied Mathematics</p>
            <p className="text-xs text-foreground">B.S. Computer Science</p>
            <p className="text-xs text-accent-foreground font-medium mt-2">Class of 2024</p>
          </div>

          {/* Skills */}
          <div className="bg-accent/5 border-l border-b border-border p-6">
            <h3 className="text-lg font-semibold text-accent-foreground mb-3 flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              Skills & Technologies
            </h3>
            <div className="space-y-2">
              <div>
                <h4 className="text-xs font-semibold text-foreground mb-1">Languages</h4>
                <div className="flex flex-wrap gap-1">
                  {skills.languages.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-foreground mb-1">Data Science & ML</h4>
                <div className="flex flex-wrap gap-1">
                  {skills.data.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-foreground mb-1">Web Development</h4>
                <div className="flex flex-wrap gap-1">
                  {skills.web.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Current */}
          <div className="bg-accent/5 border-r border-t border-border p-6 ">
            <h3 className="text-lg font-semibold text-accent-foreground mb-3 flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Current
            </h3>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent-foreground mt-1">•</span>
                <span>Researcher at PoliTech</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-foreground mt-1">•</span>
                <span>Co-founder of Kura Customs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-foreground mt-1">•</span>
                <span>Pursuing opportunities in data science and software engineering</span>
              </li>
            </ul>
          </div>

          {/* Hobbies */}
          <div className="bg-accent/5 border-l border-t border-border p-6 ">
            <h3 className="text-lg font-semibold text-accent-foreground mb-3 flex items-center gap-2">
              {/* <Heart className="w-5 h-5" /> */}
              Interests
            </h3>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent-foreground mt-1">•</span>
                <span>Computational Biology</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-foreground mt-1">•</span>
                <span>Mathematical Modeling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-foreground mt-1">•</span>
                <span>Computer Simulations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


// import { useState } from "react";
// import { Linkedin, Github, Mail, GraduationCap, Code2, Brain, Sparkles } from "lucide-react";

// function About() {
//   const [copied, setCopied] = useState(false);

//   const onMailClick = () => {
//     navigator.clipboard.writeText("zarifahnaf1@gmail.com")
//     .then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     })
//   }

//   const skills = {
//     languages: ["Python", "TypeScript", "JavaScript", "R", "C++", "Java"],
//     data: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Matplotlib"],
//     web: ["React", "Node.js", "MongoDB", "Tailwind CSS", "D3.js"]
//   };

//   return (
//     <div className="h-[calc(100vh-6rem)] overflow-hidden bg-gradient-to-br from-background via-accent/5 to-background p-3 md:p-4 animate-fadeIn">
//       <div className="h-full max-w-7xl mx-auto flex flex-col gap-3">
//         {/* Notice Banner */}
//         <div className="bg-accent/10 border-l-4 border-accent px-3 py-2 rounded-r shadow-sm flex-shrink-0">
//           <p className="text-xs font-medium text-accent-foreground">
//             ✨ Portfolio in progress—feel free to explore!
//           </p>
//         </div>

//         {/* Main Grid Layout */}
//         <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-3 min-h-0">
//           {/* Left Column - Profile */}
//           <div className="lg:col-span-1 flex flex-col gap-3">
//             {/* Profile Card */}
//             <div className="bg-card border border-border rounded-xl shadow-lg p-4 flex flex-col items-center text-center">
//               <div className="w-24 h-32 bg-accent rounded-lg shadow-md mb-3"></div>
//               <h1 className="text-xl font-bold text-foreground mb-0.5">Zarif Ahmed</h1>
//               <p className="text-xs text-muted-foreground mb-3">Data Scientist & Software Engineer</p>
              
//               {/* Social Links */}
//               <div className="flex flex-wrap justify-center gap-2 w-full">
//                 <a 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   href="https://www.linkedin.com/in/ahmedzarif" 
//                   className="flex items-center gap-1.5 px-2.5 py-1.5 bg-accent/10 border border-border rounded-lg hover:bg-accent/20 hover:border-accent transition-all group"
//                 >
//                   <Linkedin className="w-4 h-4 text-foreground group-hover:scale-110 transition-transform" />
//                   <span className="text-xs font-medium text-foreground">LinkedIn</span>
//                 </a>
                
//                 <a 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   href="https://github.com/Zarif-SBU" 
//                   className="flex items-center gap-1.5 px-2.5 py-1.5 bg-accent/10 border border-border rounded-lg hover:bg-accent/20 hover:border-accent transition-all group"
//                 >
//                   <Github className="w-4 h-4 text-foreground group-hover:scale-110 transition-transform" />
//                   <span className="text-xs font-medium text-foreground">GitHub</span>
//                 </a>
                
//                 <button 
//                   onClick={onMailClick} 
//                   className="relative flex items-center gap-1.5 px-2.5 py-1.5 bg-accent/10 border border-border rounded-lg hover:bg-accent/20 hover:border-accent transition-all group"
//                 >
//                   <Mail className="w-4 h-4 text-foreground group-hover:scale-110 transition-transform" />
//                   <span className="text-xs font-medium text-foreground">Email</span>
//                   {copied && (
//                     <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 
//                            text-secondary-foreground bg-secondary rounded-md
//                            px-2 py-1 border text-xs font-medium shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200 whitespace-nowrap">
//                       Copied!
//                     </span>
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Education Card */}
//             <div className="bg-card border border-border rounded-xl shadow-lg p-4 flex-1">
//               <div className="flex items-center gap-2 mb-2">
//                 <GraduationCap className="w-4 h-4 text-accent-foreground" />
//                 <h2 className="text-sm font-bold text-foreground">Education</h2>
//               </div>
//               <div className="space-y-1.5">
//                 <div>
//                   <p className="font-semibold text-foreground text-sm">Stony Brook University</p>
//                   <p className="text-xs text-muted-foreground">B.S. Applied Mathematics</p>
//                   <p className="text-xs text-muted-foreground">B.S. Computer Science</p>
//                   <p className="text-xs text-accent-foreground font-medium mt-1">Class of 2024</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Middle Column - About & Goals */}
//           <div className="lg:col-span-1 flex flex-col gap-3">
//             {/* About Card */}
//             <div className="bg-card border border-border rounded-xl shadow-lg p-4 flex-1 overflow-y-auto">
//               <h2 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
//                 <Sparkles className="w-4 h-4 text-accent-foreground" />
//                 About Me
//               </h2>
//               <div className="space-y-2 text-xs leading-relaxed text-foreground">
//                 <p>
//                   Recent graduate from Stony Brook University with a double major in <span className="font-semibold text-accent-foreground">Applied Mathematics</span> and <span className="font-semibold text-accent-foreground">Computer Science</span>.
//                 </p>
//                 <p>
//                   I'm passionate about problem-solving and using computational methods to tackle complex challenges in data science and software engineering.
//                 </p>
//                 <p>
//                   I've developed a strong interest in using <span className="font-semibold">computer simulations</span> and <span className="font-semibold">mathematical models</span> to solve biological problems.
//                 </p>
//               </div>
//             </div>

//             {/* Goals Card */}
//             <div className="bg-card border border-border rounded-xl shadow-lg p-4 flex-1">
//               <div className="flex items-center gap-2 mb-2">
//                 <Brain className="w-4 h-4 text-accent-foreground" />
//                 <h2 className="text-sm font-bold text-foreground">Current Goals</h2>
//               </div>
//               <div className="space-y-1.5">
//                 <div className="flex items-start gap-2">
//                   <div className="w-1 h-1 rounded-full bg-accent-foreground mt-1.5 flex-shrink-0"></div>
//                   <p className="text-xs text-foreground">Pursuing opportunities in data science and software engineering</p>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <div className="w-1 h-1 rounded-full bg-accent-foreground mt-1.5 flex-shrink-0"></div>
//                   <p className="text-xs text-foreground">Planning to pursue a master's in computational biology or related field</p>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <div className="w-1 h-1 rounded-full bg-accent-foreground mt-1.5 flex-shrink-0"></div>
//                   <p className="text-xs text-foreground">Building projects at the intersection of biology and computer science</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Skills */}
//           <div className="lg:col-span-1 bg-card border border-border rounded-xl shadow-lg p-4 overflow-y-auto">
//             <div className="flex items-center gap-2 mb-3">
//               <Code2 className="w-4 h-4 text-accent-foreground" />
//               <h2 className="text-sm font-bold text-foreground">Skills & Technologies</h2>
//             </div>
            
//             <div className="space-y-3">
//               {/* Languages */}
//               <div>
//                 <h3 className="text-xs font-semibold text-foreground mb-1.5">Languages</h3>
//                 <div className="flex flex-wrap gap-1.5">
//                   {skills.languages.map((skill) => (
//                     <span 
//                       key={skill} 
//                       className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Data Science */}
//               <div>
//                 <h3 className="text-xs font-semibold text-foreground mb-1.5">Data Science & ML</h3>
//                 <div className="flex flex-wrap gap-1.5">
//                   {skills.data.map((skill) => (
//                     <span 
//                       key={skill} 
//                       className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Web Development */}
//               <div>
//                 <h3 className="text-xs font-semibold text-foreground mb-1.5">Web Development</h3>
//                 <div className="flex flex-wrap gap-1.5">
//                   {skills.web.map((skill) => (
//                     <span 
//                       key={skill} 
//                       className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Quick Stats */}
//               <div className="pt-2 border-t border-border">
//                 <div className="grid grid-cols-2 gap-2">
//                   <div className="text-center p-2 bg-accent/5 rounded-lg">
//                     <div className="text-lg font-bold text-accent-foreground">2024</div>
//                     <div className="text-xs text-muted-foreground">Graduated</div>
//                   </div>
//                   <div className="text-center p-2 bg-accent/5 rounded-lg">
//                     <div className="text-lg font-bold text-accent-foreground">6+</div>
//                     <div className="text-xs text-muted-foreground">Languages</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;