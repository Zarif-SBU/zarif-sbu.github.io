import { Gavel } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Comparison, ComparisonHandle, ComparisonItem } from '@/components/ui/shadcn-io/comparison';
import { Github, Link2 } from "lucide-react";

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
    <div className="flex flex-col lg:flex-row bg-background min-h-screen ">
      {/* Mobile Header */}
      <div className="lg:hidden w-full bg-accent/5 border-b border-border px-5 pt-6 animate-fadeIn">
        <div className="flex items-start gap-4">
          <a href="https://www.stonybrook.edu/commcms/vertically-integrated-projects/teams/_team_page/team_page.php?team=PoliTech" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
            <Gavel size={150} className="w-20 transition duration-300 hover:brightness-150" />
          </a>
          <div>
            <a href="https://www.stonybrook.edu/commcms/vertically-integrated-projects/teams/_team_page/team_page.php?team=PoliTech" target="_blank" rel="noopener noreferrer">
              <h2 className="text-2xl font-bold text-foreground transition duration-300 hover:text-accent-foreground hover:brightness-200">
                PoliTech
              </h2>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Political <strong>research team</strong> under the mentorship of Dr. Robert F. Kelly at Stony Brook University
            </p>
            <p className="text-sm font-medium text-foreground mt-2">
              Research Assistant (Frontend Developer and Data Analyst)
            </p>
          </div>
          {/* Languages */}
        <div className="mb-6">
          <h4 className="text-base font-bold text-foreground mb-2">Languages</h4>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium">
              Python
            </Badge>
            <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium">
              TypeScript
            </Badge>
            <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium">
              HTML
            </Badge>
            <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium">
              CSS
            </Badge>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-base font-bold text-foreground mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium">
                {tech}
              </Badge>
            ))}
          </div>
          </div>
        </div>
      </div>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] flex-col w-1/5 bg-accent/5 border-r border-border pt-8 pb-6 px-6 overflow-y-auto animate-fadeIn">
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center duration-300 hover:brightness-200 gap-2">
          <a
            href="https://www.stonybrook.edu/commcms/vertically-integrated-projects/teams/_team_page/team_page.php?team=PoliTech"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Gavel size={150} className="hover:brightness-150" />
          </a>
          <div className="relative flex items-center justify-center">
            <a
              href="https://www.stonybrook.edu/commcms/vertically-integrated-projects/teams/_team_page/team_page.php?team=PoliTech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-foreground hover:text-accent-foreground transition-colors"
            >
              PoliTech
            </a>
            <Link2
              className="absolute -left-10 top-1/2 -translate-y-1/2 text-foreground hover:text-accent-foreground transition-colors"
              size={30}
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-base text-muted-foreground text-center mb-4">
          <strong> Political research team</strong> under the mentorship of Dr. Robert F. Kelly at Stony Brook University
        </p>


        {/* Tech Stack */}
          <div className="mb-4">
            <h4 className="text-lg font-bold text-foreground  underline">Role</h4>
            <p className="text-base text-foreground">
              Research Assistant (Frontend Developer and Data Analyst)
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-bold text-foreground mb-1 underline">Languages</h4>
            <div className="flex flex-wrap gap-1.5">
              <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-sm rounded-md border border-accent/30 font-medium">
                Python
              </Badge>
              <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-sm rounded-md border border-accent/30 font-medium">
                TypeScript
              </Badge>
              <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-sm rounded-md border border-accent/30 font-medium">
                HTML
              </Badge>
              <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-sm rounded-md border border-accent/30 font-medium">
                CSS
              </Badge>
            </div>
          </div>
          <h4 className="text-lg font-bold text-foreground mb-1 underline">Tech Stack</h4>
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-sm rounded-md border border-accent/30 font-medium">
                {tech}
              </Badge>
            ))}
          </div>
      </aside>

      {/* Right Side Content - Scrollable */}
      <main className="flex-1 p-6 overflow-y-auto animate-fadeIn">
        <div className="max-w-352 mx-auto">
          <h1 className="text-3xl lg:text-4xl mb-4 font-semibold text-foreground">Our Mission</h1>
          <p className="text-base lg:text-lg leading-relaxed text-foreground">Promote fair representation of the American people in U.S. elections 
            We pursue this goal through several ongoing projects that combine data analysis, software development, and policy research. These include:

          </p>
          <ul className="list-disc list-inside text-base lg:text-lg leading-relaxed text-foreground mb-6">
            <li>Tracking new legislation and evaluating their compliance with the Voting Rights Act</li>
            <li>Developing algorithms to detect gerrymandering</li>
            <li>Exploring effectiveness of Multi-Member Districting</li>
            <li>maintaining a comprehensive repository of election, demographic, and geographic data that supports our web-based analytical tools and political science research</li>
          </ul>

          {/* <p className="text-lg leading-relaxed text-foreground mb-6">
            PoliTech is a political research group led by Professor Robert F. Kelly at Stony Brook University. 
            Our mission is to promote fair representation of the American people in U.S. elections. 
            We pursue this goal through several ongoing projects that combine data analysis, software development, 
            and policy research. These include tracking and evaluating new legislation for compliance with the Voting Rights Act, 
            developing algorithms to detect and address gerrymandering, exploring the impacts of Multi-Member Districting, 
            and maintaining a comprehensive repository of election, demographic, and geographic data that supports 
            our web-based analytical tools and political science research.
          </p> */}

          <h1 className="text-2xl lg:text-3xl mb-4 font-semibold text-foreground">My Role</h1>
          <ul className="list-disc list-inside text-base lg:text-lg leading-relaxed text-foreground">
            <li>Designed and implemented <strong>interactive analysis tools</strong> for evaluating districting plans with React, Leaflet, and D3.js.</li>
            <li>Redesigned the main GUI to improve <b>usability</b>, <b>layout clarity</b>, and <b>visual hierarchy</b>.</li>
            <li>Collaborated with researchers to <strong>automate geospatial data processing</strong> pipelines in Python.</li>
            <li>Mentored new team members and wrote internal documentation.</li>
            <li className="mb-2 flex items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Zarif-SBU/PoliTech-Precinct-and-ARS-merging"
                className="flex items-center gap-2 text-foreground text-base lg:text-lg font-bold underline"
              >
                <Github className="w-5 h-5" />
                <span className="translate-y-[1.5px]">GitHub</span>
              </a>
              <span className="mt-1">
                : This repository contains scripts I wrote to conduct geospatial data processing tasks using Python.
              </span>
            </li>
          </ul>

          {/* UI Comparison */}
          <h2 className="text-2xl lg:text-3xl font-bold mt-12 text-center text-foreground">Old GUI vs New GUI</h2>
          <p className="text-sm lg:text-base leading-relaxed text-foreground mb-2 text-center">
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

          <h2 className="text-2xl lg:text-3xl text-foreground font-bold mt-12 text-center">Visualization tools</h2>
          <p className="text-sm lg:text-base leading-relaxed text-foreground mb-2 text-center">
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
      </main>
    </div>
  );
}

export default Research;