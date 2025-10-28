import { useState } from "react";
import {cn} from "../lib/utils"
function Projects() {
  const [active, setActive] = useState("Kura Customs");
  const tabs = ["Kura Customs", "Election Atlas", "Cloud Play"]

  const handleActive = (tab: string) => {
    setActive(tab)
  }

  const renderTabContent = () => {
    switch(active) {
      case "Kura Customs":
        return(
          <>
          <h1 className="text-foreground text-4xl font-bold mb-4"> Kura Customs</h1>
          <span className="text-foreground text-lg leading-relaxed"> This Project is about... </span>
          </>
        );
      case "Election Atlas":
        return(
          <>
            <h1 className="text-foreground text-4xl font-bold mb-4"> Election Atlas</h1>
            <span className="text-foreground text-lg leading-relaxed"> This Project is about... </span>
          </>
        );
      case "Cloud Play":
        return(
          <>
            <h2 className="text-foreground text-4x1 font-bold mb-4"> Cloud Play </h2>
            <span className="text-foreground text-lg leading-relaxed"> This Project is about... </span>
          </>
        )
    }
  }
  return (
    <div className="h-full md:h-auto flex">
      {/*Left navbar */}
      <div className="hidden md:flex flex-col w-1/5 mt-8 border-r-2 border-border ml-auto">
      <nav className="md:flex flex-col items-center">
        {tabs.map((tab) => {
          return (
          <button onClick={() => handleActive(tab)} className={cn("border-border/60 border-b-2 cursor-pointer p-3 w-3/5 bg-sidebar/40 text-foreground/60 font-bold", "hover:bg-accent transition-colors text-lg rounded-t-lg mb-2", active == tab && "border-border bg-accent text-foreground")} key={tab}> {tab} </button>
          )
        })}
      </nav>
      </div>
      {/*Right content container*/}
      <div className="flex-1 mt-8 p-4">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default Projects;
