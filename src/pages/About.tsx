import { useState } from "react";
import { LinkedinIcon, Github, Mail, GraduationCap, Briefcase, BicepsFlexed, Book, Bike } from "lucide-react";
import { Badge } from "@/components/ui/badge";
export default function PortfolioLandingPage() {
  const [copied, setCopied] = useState(false);

  const onMailClick = () => {
    navigator.clipboard.writeText("zarifahnaf1@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  return (
    <div className="font-sans text-foreground">
      <section className="relative min-h-screen bg-linear-to-b from-accent/30 to-accent/10">
        <div className="grid min-h-screen place-items-center px-6 pb-24"> 
          <div className="mx-auto w-full max-w-3xl text-center">
        <div className="bg-accent/10 border-l-4 border-accent px-3 py-2 rounded-r shadow-sm flex-shrink-0 mb-2">
          <p className="text-base font-medium text-accent-foreground">
           👷🚧 Portfolio still work in progress but feel free to look through!
          </p>
        </div>  
            <img src="/headshot/profile.png" alt="Profile Picture" className="mx-auto mb-6 lg:h-80 lg:w-80 sm:h-48 sm:w-48 md:h-60 md:w-60 rounded-full object-cover border-4 border-accent"/>
            <h1 className="mb-4 font-bold leading-tight text-4xl sm:text-5xl md:text-6xl">
              Hi, I'm Zarif Ahmed!
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground">
              Recent Applied Mathematics & Computer Science Graduate | Data Scientist | Software Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <button onClick={onMailClick} className=" relative flex items-center gap-2 rounded-lg border border-accent px-4 py-2 text-sm sm:text-base transition hover:bg-accent hover:text-accent-foreground">
                <Mail className="h-5 w-5" />
                zarifahnaf1@gmail.com
                {copied && (<span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground shadow-lg animate-in fade-in slide-in-from-top-1">
                    Copied!
                  </span>
                )}
              </button>

              <a href="https://www.linkedin.com/in/ahmedzarif" target="_blank" rel="noopener noreferrer" className=" flex items-center gap-2 rounded-lg border border-accent px-4 py-2 text-sm sm:text-base transition hover:bg-accent hover:text-accent-foreground">
                <LinkedinIcon className="h-5 w-5" />
                LinkedIn
              </a>

              <a href="https://github.com/Zarif-SBU" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg border border-accent px-4 py-2 text-sm sm:text-base transition hover:bg-accent hover:text-accent-foreground">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pointer-events-none absolute bottom-6 border-accent-foreground/70 border-2 px-2.5 left-1/2 -translate-x-1/2 animate-bounce rounded">
          <span className="block text-3xl text-accent-foreground/70">
            ⬇
          </span>
        </div>
      </section>


      {/* About Me */}
      <section id="about" className="bg-accent/20 w-full ">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left">About Me</h2>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center md:text-left">
            Hello! I'm Zarif, a recent graduate from Stony Brook University with dual degrees in Applied Mathematics and Computer Science. 
            I enjoy solving complex problems through coding, simulations, and mathematical models. 
          My goal is to apply these skills in data science and software engineering, and I aspire to pursue a master's in computational biology in the future.
          </p>
        </div>
      </section>
      
      {/* Education */}
      <section className=" py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center md:text-left">
            Education
          </h2>

          <div className="bg-accent/5 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-accent-foreground mb-2">
              <GraduationCap className="w-5 h-5" />
              Stony Brook University
            </h3>
            <p className="text-muted-foreground mb-1"> B.S. Applied Mathematics </p>
            <p className="text-muted-foreground mb-1"> B.S. Computer Science </p>
            <p className="text-sm text-muted-foreground mt-2"> Graduated May 2025 </p>
            <Badge className="mt-3">GPA: 3.47</Badge>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-accent/20 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center md:text-left"> Skills </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-accent/5 p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Languages</h3>
              <p className="text-muted-foreground">
                Python, Matlab, R JavaScript, TypeScript
              </p>
            </div>
            <div className="bg-accent/5 p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-muted-foreground">
                React, Next.js, Tailwind CSS
              </p>
            </div>
            <div className="bg-accent/5 p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-muted-foreground">
                Node.js, Prisma, PostgreSQL, MongoDB
              </p>
            </div>
            <div className="bg-accent/5 p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Data / Other</h3>
              <p className="text-muted-foreground">
                Pandas, Numpy, Scikit-learn, Matplotlib, GeoPandas, Chart.js
              </p>
            </div>
            <div className="bg-accent/5 p-6 rounded-lg shadow md:col-span-2">
              <h3 className="font-semibold mb-2">Tools</h3>
              <p className="text-muted-foreground">
                Git, DigitalOcean, Vercel, LaTeX, Apache, Nginx
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects / Experience */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center md:text-left">Experience & Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-accent/5 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-accent-foreground mb-3">
              <Briefcase className="w-5 h-5" /> Researcher @ PoliTech
            </h3>
            <p>Developing a data repository and building interactive data visualization tools for research projects.</p>
          </div>
          <div className="bg-accent/5 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-accent-foreground mb-3">
              <Briefcase className="w-5 h-5" /> Co-founder @ Kura Customs
            </h3>
            <p>Worked on an e-commerce platform with friends, handling front-end, back-end, and data management.</p>
          </div>
        </div>
      </section>

      {/* Hobbies & Interests */}
      <section className="bg-accent/20 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center md:text-left">Hobbies & Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-accent/5 p-6 rounded-lg text-center shadow hover:shadow-lg transition">
              <BicepsFlexed className="w-10 h-10 mx-auto mb-3 text-accent-foreground"/>
              <h4 className="font-semibold mb-2">Gym & Fitness</h4>
              <p>225 lb bench press, 315 lb deadlift, staying strong and active!</p>
            </div>
            <div className="bg-accent/5 p-6 rounded-lg text-center shadow hover:shadow-lg transition">
              <Book className="w-10 h-10 mx-auto mb-3 text-accent-foreground"/>
              <h4 className="font-semibold mb-2">Reading</h4>
              <p>Exploring classic and modern literature; currently diving into the Dune series.</p>
            </div>
            <div className="bg-accent/5 p-6 rounded-lg text-center shadow hover:shadow-lg transition">
              <Bike className="w-10 h-10 mx-auto mb-3 text-accent-foreground"/>
              <h4 className="font-semibold mb-2">Adventure</h4>
              <p>Bucket list includes snowboarding, skydiving, jet skiing, motorcycles, and pilot license!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
