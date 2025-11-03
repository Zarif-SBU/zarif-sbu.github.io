import { Gavel } from "lucide-react";
import { Badge } from "@/components/ui/badge";
// import { Link } from "lucide-react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { cn } from "../lib/utils";

function Research() {
    const techStack = [
    "Vite",
    "React.js",
    "MongoDB",
    "Leaflet.js",
    "D3.js",
    "Charts.js",
    "Tailwind CSS",
    "GeoPandas",
    "Maup"
  ];

  return (
    <div className="flex bg-background h-screen">
      <div className="w-1/5 flex flex-col pt-8 border-r-2 border-border fixed h-screen">
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center duration-300 hover:brightness-200">
          <a href="https://www.stonybrook.edu/commcms/vertically-integrated-projects/teams/_team_page/team_page.php?team=PoliTech" target="_blank" rel="noopener noreferrer" className="group">
            <Gavel size={150} className="hover:brightness-150"></Gavel>
          </a>
          <a href="https://www.stonybrook.edu/commcms/vertically-integrated-projects/teams/_team_page/team_page.php?team=PoliTech" target="_blank" rel="noopener noreferrer" className="">
            <h3 className={cn("text-3xl leading-relaxed text-foreground font-bold transition")}>
              PoliTech
            </h3>
          </a>
        </div>

        {/* Description */}
        <p className="text-md text-muted-foreground text-center px-4 mb-6">
          Political research team under the mentorship of Dr. Robert F. Kelly at Stony Brook University
        </p>

        {/* Tech Stack */}
        {/* <Separator className="mb-4 " /> */}
        <div className="px-4">
        <h4 className="text-lg font-bold mb-3 text-foreground"> Languages </h4>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline" className="text-sm font-medium px-2 py-1">
              Python
            </Badge>
            <Badge variant="outline" className="text-sm font-medium px-2 py-1">
              TypeScript
            </Badge>
            <Badge variant="outline" className="text-sm font-medium px-2 py-1">
              HTML
            </Badge>
            <Badge variant="outline" className="text-sm font-medium px-2 py-1">
              CSS
            </Badge>
          </div>
          <h4 className="text-lg font-bold mb-3 text-foreground">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm font-medium px-2 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      {/*Right side content */}
      <div className="flex-1 mt-8 p-4 overflow-y-auto ml-[20%] animate-fadeIn">
        <h1 className="text-4xl text-foreground font-bold mb-4"> Overview </h1>
        <p className="text-lg leading-relaxed text-foreground mb-6">
          PoliTech is a political research team led by Professor Robert F. Kelly at Stony Brook University. Our goal is to promote fair representation
          of the American people in US elections. We aim to achieve this goal through the different ongoing projects led by subgroups within the larger team.
          Some of these projects include keeping track of newly enacted and recently propsed legislation and evaluate their compliance with the Voting Rights Act, 
          develop software that evaluates gerrymendaring of congressional district boundaries and generate alternative plans, conduct research on Multi-Member Districting
          and finally a data repository containing election, demographic and geographic data that is used to power our web based analusis tool to evaluate various political
          science hypothesis.
        </p>
        <h1 className="text-2xl text-foreground font-bold mb-4"> My role </h1>
        <p className="text-lg leading-relaxed text-foreground">
          I started work with the GUI subgroup where I contribute to the frontend development of our Web-based analysis tool. However, as I spent more time with the 
          research team I took on many others roles. I've worked as a UI/UX designer, frontend enginner, data scientist, team leader and a mentor.


        </p>
        <TransformWrapper>
          <TransformComponent>
            <img src="/politech/feedback.png" alt="Feedback Diagram" className="rounded-lg shadow-lg bg-slate-800 cursor-pointer" />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
}

export default Research;