// import { useState } from "react";

function Projects() {
  // const [active, setActive] = useState("Kura Customs");
  const tabs = ["Kura Customs", "Election Atlas", "Cloud Play"]

  // const handleActive = (tab: string) => {

  // }

  // const renderTabContent = () => {
  //   switch(active) {
  //     case "Kura Customs":
  //       return(
  //         <>
  //         <h1 className="text-foreground"> Kura Customs</h1>
  //         <span className="text-foreground"> This Project is about... </span>
  //         </>
  //       );
  //     case "Election Atlas":
  //       return(
  //         <>
  //           <h1 className="text-foreground"> Election Atlas</h1>
  //           <span className="text-foreground"> This Project is about... </span>
  //         </>
  //       );
  //     case "Cloud Play":
  //       return(
  //         <>
  //           <h1 className="text-foreground"> Cloud Play </h1>
  //           <span className="text-foreground"> This Project is about... </span>
  //         </>
  //       )
  //   }
  // }
  return (
    <div className="h-full md:h-auto flex">
      {/*Left navbar */}
      <div className="hidden md:flex flex-col w-1/4 mt-8 border-r-2 border-border">
      <nav className=" md:flex flex-col">
        {tabs.map((tab) => {
          return (
          <button className="cursor-pointer "> {tab} </button>
          )
        })}
      </nav>
      </div>
      {/*Right Content container*/}
      <div className="flex-1 w-3/4">

      </div>
    </div>
  );
}

export default Projects;
