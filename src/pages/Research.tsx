import { Gavel } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Comparison, ComparisonHandle, ComparisonItem } from '@/components/ui/shadcn-io/comparison';

// import GuidedWithFull from "@/components/ui/guidedwithfull";
import { cn } from "../lib/utils";
import Carousel_Wrapper from "@/components/layout/carousel_wrapper";

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
      <div className="fixed w-1/5  bg-background border-r-2 border-border flex flex-col mt-8 mb-8 top-24 animate-fadeIn">
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
          <h4 className="text-lg font-bold text-foreground">Role</h4>
          <p className="text-base font-medium mb-3 text-foreground">
            Research Assistant (Frontend Developer and Data Analyst)
          </p>
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
      <div className="flex-1 p-8 ml-[20%] animate-fadeIn">
        <h1 className="text-4xl text-foreground font-bold mb-4">Overview</h1>
        <p className="text-lg leading-relaxed text-foreground mb-6">
          PoliTech is a political research group led by Professor Robert F. Kelly at Stony Brook University. 
          Our mission is to promote fair representation of the American people in U.S. elections. 
          We pursue this goal through several ongoing projects that combine data analysis, software development, 
          and policy research. These include tracking and evaluating new legislation for compliance with the Voting Rights Act, 
          developing algorithms to detect and address gerrymandering, exploring the impacts of Multi-Member Districting, 
          and maintaining a comprehensive repository of election, demographic, and geographic data that supports 
          our web-based analytical tools and political science research.
        </p>

        <h1 className="text-2xl text-foreground font-bold mb-4">My Role</h1>
        <p className="text-lg leading-relaxed text-foreground">
          As a research assistant in the GUI subgroup, I designed and built several of the team's interactive analysis tools 
          for evaluating state and congressional district plans. Over time, my role expanded to include data processing 
          and onboarding new team members through mentorship and documentation.
        </p>

        {/* UI Comparison */}
        <h2 className="text-3xl text-foreground font-bold mt-12 text-center">Old GUI vs New GUI</h2>
        <p className="text-base leading-relaxed text-foreground mb-2 text-center">
          Comparison of the interface before and after my redesign with improvements in usability, 
          visual hierarchy, and overall layout clarity.
        </p>
        <Comparison className="aspect-2555/1175 border-2 border-card-foreground w-[90%] mx-auto max-w-5xl rounded-2xl shadow-lg overflow-hidden" mode="hover">
          <ComparisonItem position="right">
            <img src="/politech/ui-compare/GUI-Old.png" alt="Old PoliTech UI design" height={1175} width={2555} />
          </ComparisonItem>
          <ComparisonItem position="left">
            <img src="/politech/ui-compare/GUI-New.png" alt="New PoliTech UI redesign" height={1175} width={2555} />
          </ComparisonItem>
          <ComparisonHandle className="text-foreground" />
        </Comparison>

        <h2 className="text-3xl text-foreground font-bold mt-12 text-center">Visualization tools</h2>
        <p className="text-base leading-relaxed text-foreground mb-2 text-center">
          Below are several core components I designed and implemented, including visualization tools and user interaction elements 
          used across our platform.
        </p>

        <Carousel_Wrapper 
          images={[
            "/politech/ui-examples/evaluate-plan.png", 
            "/politech/ui-examples/summary-table.png", 
            "/politech/ui-examples/box-and-whiskers.png", 
            "/politech/ui-examples/scatter-plot.png", 
            "/politech/ui-examples/vote-seat-share-curve.png", 
            "/politech/ui-examples/map-controls-expanded.png", 
            "/politech/ui-examples/heatmap-race.png", 
            "/politech/ui-examples/heatmap-vote.png"
          ]}
          descriptions={[
            "Plan selection dialog allowing users to choose from available district plans",
            "Summary table comparing selected plan metrics to the enacted plan",
            "Box and whisker plot visualizing plan distributions",
            "Scatter plot showing competitiveness and bias metrics",
            "Vote-seat share curve highlighting proportionality patterns",
            "Expanded map controls for toggling visualization layers",
            "Heatmap visualization of racial demographics",
            "Heatmap visualization of vote margins"
          ]}
        />
      </div>
    </div>
  );
}

export default Research;