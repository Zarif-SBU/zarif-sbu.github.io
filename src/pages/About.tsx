import { useState } from "react";
import { LinkedinIcon, Github, Mail } from "lucide-react";


function About() {
  const [copied, setCopied] = useState(false);

  const onMailClick = () => {
    navigator.clipboard.writeText("zarifahnaf1@gmail.com")
    .then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    })
  }
  return (
    <div className="flex h-full md:h-auto animate-fadeIn">
      {/* Left section (portrait + name) */}
      <div className="hidden md:flex flex-col items-center justify-start w-1/5 mt-8 border-r-2 border-border">
        <div className="w-56 h-64 bg-accent rounded-md"></div>
        <p className="mt-4 text-foreground text-lg font-semibold">Zarif Ahmed</p>
        {/* Social media links underline the texts */}
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ahmedzarif" className="flex items-center gap-2 text-foreground text-lg font-medium underline">
          <LinkedinIcon className="w-5 h-5" />
          <span className="translate-y-[1.5px]">LinkedIn</span>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Zarif-SBU" className="flex items-center gap-2 text-foreground text-lg font-medium underline">
          <Github className="w-5 h-5" />
          <span className="translate-y-[1.5px]">GitHub</span>
        </a>
        <button onClick={onMailClick} className="relative flex items-center gap-2 text-foreground text-lg font-medium underline hover:cursor-pointer">
          <Mail className="w-5 h-5" />
          <span> zarifahnaf1@gmail.com </span>
          {copied && (<span className="pointer-events-none absolute left-full ml-2 top-1/2 -translate-y-1/2 
                 text-secondary-foreground bg-secondary rounded-md
                 px-3 py-1 border text-sm font-medium">
              Copied!
            </span>
          )}
        </button>
      </div>

      {/* Right section (content) */}
      <div className="flex-1 p-8">
        <h1 className="text-lg font-bold mb-4 text-accent-foreground"> *** I'm still working on designing and filling out my portfolio, but feel free to look through what is there!</h1>
        <h1 className="text-4xl font-bold mb-4 text-foreground">About Me</h1>
        <p className="text-lg leading-relaxed text-foreground">
          Hello! I'm Zarif, a recent graduate from Stony Brook University who majored both Applied Mathematics and Computer Science. I have a strong passion for problem-solving and coding, which drove me to pursue a career in data science and software engineering. As I continued my acedemic journey I found an appreciation for using Computer simulations and Mathematical models to solve complex biological problems. With that interest, 
          I aspire to persue a master's in computational biology or a related field in the future.
        </p>
      </div>
    </div>
  );
}

export default About;