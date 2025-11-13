"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";

function CompBio() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const categories = {
    "Population Growth": [
      { name: "Exponential and Logistic Growth", pdf: "/matlab/d1_lab_report.pdf" },
      { name: "Hassell Equation", pdf: "/matlab/d2_lab_report.pdf" },
      { name: "Holling's Disk equation", pdf: "/matlab/d3_lab_report.pdf" },
      
    ],
    "Disease Spread": [
      { name: "SIR Model", pdf: "/matlab/d4_lab_report.pdf" },
      { name: "Maleria Transmission", pdf: "/matlab/d5_lab_report.pdf" },
    ],
    "Physiological Modeling": [
      { name: "Hill Equation", pdf: "/matlab/d6_lab_report.pdf" },
      { name: "Autoregulatory Genes", pdf: "/matlab/d7_lab_report.pdf" },
      { name: "Lysis and Lysogeny", pdf: "/matlab/d8_lab_report.pdf" },
      { name: "Reaction-Diffusion Model", pdf: "/matlab/d9_lab_report.pdf" },
      { name: "Mutually Inhibitory Genes", pdf: "/matlab/d10_lab_report.pdf" },
    ],
    "Neurological Modeling": [
      { name: "Hodgkin-Huxley and LIF", pdf: "/pdfs/HH_and_LIF_lab_report.pdf" },
      { name: "Perceptron Learning Model", pdf: "/pdfs/PST_PL_lab_report.pdf" },
    ],
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  const renderContent = () => {
    if (!activeProject) {
      return (
        <div className="mt-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Overview </h1>
          <p className="text-lg leading-relaxed text-foreground">
            A collection of my Simulation work in MATLAB.
          </p>
          <div className="mb-2 flex items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Zarif-SBU/Computational_Biology"
              className="flex items-center gap-2 text-foreground text-lg font-bold underline"
            >
              <Github className="w-5 h-5" />
              <span className="translate-y-[1.5px]">GitHub</span>
            </a>
            <span className="mt-1">
              : Matlab Code for all labs.
            </span>
          </div>
        </div>
      );
    }

    const pdfSrc = Object.values(categories)
      .flat()
      .find((p) => p.name === activeProject)?.pdf;

    return (
      <div className="flex flex-col h-full">
        <div className="">
          {/* <h1 className="text-4xl font-bold mb-4 text-foreground">
            {activeProject}
          </h1> */}
          {/* <a className="text-lg leading-relaxed text-foreground">
            Link to my GitHub repository
          </a> */}
        </div>
        <div className="flex-1 min-h-0 p-4">
          <iframe
            src={pdfSrc}
            className="w-full h-full border border-border rounded-lg"
            title={`${activeProject} PDF`}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex overflow-hidden h-full animate-fadeIn lg:top-24 lg:h-[calc(100vh-6rem)] bg-background top-24">
      {/* Left sidebar */}
      <div className="hidden mt-8 md:flex flex-col h-full items-center justify-start w-1/5 border-r-2 border-border overflow-y-auto ">
        <nav className="flex flex-col items-center w-full space-y-4">
          {Object.entries(categories).map(([category, projects]) => (
            <div key={category} className="w-full">
              {/* Category button */}
              <button
                onClick={() => handleCategoryClick(category)}
                className={cn(
                  "flex items-center justify-between w-4/5 mx-auto text-foreground font-semibold text-lg border-b-2 border-border/60 pb-1", "hover:cursor-pointer transition-colors",
                  activeCategory === category && "bg-accent transition-colors"
                )}
              >
                {category}
              </button>

              {/* Sub-tabs */}
              {activeCategory === category && (
                <div className="mt-2 flex flex-col items-center space-y-1">
                  {projects.map((project) => (
                    <button
                      key={project.name}
                      onClick={() => setActiveProject(project.name)}
                      className={cn(
                        "text-foreground font-medium text-base w-3/5 text-left hover:text-foreground transition-colors",
                        activeProject === project.name && "font-bold"
                      )}
                    >
                      {project.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Right content view */}
      <div className="flex-1 p-4 overflow-hidden">{renderContent()}</div>
    </div>
  );
}

export default CompBio;