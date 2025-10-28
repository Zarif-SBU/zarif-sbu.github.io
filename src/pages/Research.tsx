import { Gavel } from "lucide-react";
import { Badge } from "@/components/ui/badge";
// import { Link } from "lucide-react"

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
    <div className="flex animate-fadeIn">
      <div className="w-1/5 flex flex-col mt-8 border-r-2 border-border">
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
      <div className="flex-1">
        <p className="text-lg leading-relaxed text-foreground">
          Research
        </p>
      </div>
    </div>
  );
}

export default Research;