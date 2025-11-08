import { Gavel } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import GuidedWithFull from "@/components/ui/guidedwithfull";
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
    <div className="flex bg-background ">
      {/* Fixed Sidebar - starts below navbar */}
      <div className="fixed w-1/5 min-h-screen bg-background border-r-2 border-border flex flex-col pt-8 top-24 animate-fadeIn">
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center duration-300 hover:brightness-200">
          <a
            href="https://www.stonybrook.edu/commcms/vertically-integrated-projects/teams/_team_page/team_page.php?team=PoliTech"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Gavel size={150} className="hover:brightness-150" />
          </a>
          <a
            href="https://www.stonybrook.edu/commcms/vertically-integrated-projects/teams/_team_page/team_page.php?team=PoliTech"
            target="_blank"
            rel="noopener noreferrer"
          >
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
        <div className="px-4">
          <h4 className="text-lg font-bold mb-3 text-foreground">Languages</h4>
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

      {/* Right Side Content - Scrollable */}
      <div className="flex-1 p-8 ml-[20%] animate-fadeIn"> {/*overflow-y-auto*/}
          <h1 className="text-4xl text-foreground font-bold mb-4">Overview</h1>
          <p className="text-lg leading-relaxed text-foreground mb-6">
            PoliTech is a political research team led by Professor Robert F. Kelly at Stony Brook University. Our goal is to promote fair representation
            of the American people in US elections. We aim to achieve this goal through the different ongoing projects led by subgroups within the larger team.
            Some of these projects include keeping track of newly enacted and recently proposed legislation and evaluate their compliance with the Voting Rights Act,
            develop software that evaluates gerrymandering of congressional district boundaries and generate alternative plans, conduct research on Multi-Member Districting
            and finally creating a data repository containing election, demographic and geographic data that is used to power our web based analysis tool to evaluate various political
            science hypothesis.
          </p>

          <h1 className="text-2xl text-foreground font-bold mb-4">My Role</h1>
          <p className="text-lg leading-relaxed text-foreground mb-8">
            I started work with the GUI subgroup where I contribute to the frontend development of our Web-based analysis tool. However, as I spent more time with the
            research team I took on many other roles. I've worked as a UI/UX designer, frontend engineer, data scientist, team leader and a mentor.
          </p>

          <h1 className="text-2xl text-foreground font-bold mb-4">Project Workflow</h1>
          <p className="text-lg leading-relaxed text-foreground mb-6">
            Below is an interactive visualization of our design and development process. Use the guided tour to walk through each step, or view the full diagram to see the complete workflow.
          </p>

          {/* Guided Tour Component */}
          <GuidedWithFull />
      </div>
    </div>
  );
}

export default Research;