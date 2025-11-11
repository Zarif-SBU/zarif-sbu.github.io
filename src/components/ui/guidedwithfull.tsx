import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Maximize2, Grid3x3 } from "lucide-react";
import Carousel_Wrapper from "@/components/layout/carousel_wrapper";

type GuideStep = {
  id: string;
  src: string;
  caption: string;
};

const STEPS: GuideStep[] = [
  { id: "s1", src: "/politech/feedback/step-1.png", caption: "Meeting notes → initial TODOs" },
  { id: "s2", src: "/politech/feedback/step-2.png", caption: "Converted notes into wireframes" },
  { id: "s3", src: "/politech/feedback/step-3.png", caption: "Final UI suggestions & connections" },
];

export const GuidedWithFull: React.FC = () => {
  const [showFull, setShowFull] = useState<boolean>(false);
  const toggleFull = () => setShowFull((s) => !s);

  const images = STEPS.map(step => step.src);
  const descriptions = STEPS.map(step => step.caption);

  return (
    <div className="w-full max-w-5xl mx-auto my-8">
      {/* Header Controls */}
      <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-xl font-semibold text-foreground">
            {showFull ? "Full Diagram" : "Guided Tour"}
          </h2>


        <button
          onClick={toggleFull}
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-all font-medium"
          title={showFull ? "Return to guided steps" : "View full diagram"}
        >
          {showFull ? (
            <>
              <Grid3x3 size={16} />
              <span className="text-sm">Guided Tour</span>
            </>
          ) : (
            <>
              <Maximize2 size={16} />
              <span className="text-sm">Full Diagram</span>
            </>
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="relative rounded-lg bg-card border border-border overflow-hidden shadow-xl">
        {showFull ? (
          // Full Zoomable Diagram
          <div className="w-full h-[700px] bg-background flex items-center justify-center">
            <TransformWrapper
              initialScale={0.8}
              minScale={0.3}
              maxScale={4}
              wheel={{ step: 0.15 }}
              doubleClick={{ disabled: false }}
              centerOnInit
              centerZoomedOut
            >
              <TransformComponent 
                wrapperClass="w-full h-full flex items-center justify-center"
                contentClass="flex items-center justify-center"
              >
                <img
                  src="/politech/feedback.png"
                  alt="Full feedback diagram"
                  className="max-w-full max-h-full object-contain"
                />
              </TransformComponent>
            </TransformWrapper>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-card/90 text-card-foreground px-4 py-2 rounded-md text-sm backdrop-blur-sm border border-border">
              Scroll to zoom • Drag to pan • Double-click to reset
            </div>
          </div>
        ) : (
          // Guided Step View with Carousel
          <div className="p-8">
            <Carousel_Wrapper 
              images={images} 
              descriptions={descriptions} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GuidedWithFull;