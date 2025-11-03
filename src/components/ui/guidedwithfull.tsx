import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ChevronLeft, ChevronRight, Maximize2, Grid3x3 } from "lucide-react";

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
  const [index, setIndex] = useState<number>(0);
  const [showFull, setShowFull] = useState<boolean>(false);
  const step = STEPS[index];

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(STEPS.length - 1, i + 1));
  const toggleFull = () => setShowFull((s) => !s);

  return (
    <div className="w-full max-w-5xl mx-auto my-8">
      {/* Header Controls */}
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold text-foreground">
            {showFull ? "Full Diagram" : "Guided Tour"}
          </h2>
          {!showFull && (
            <span className="text-sm text-muted-foreground">
              Step {index + 1} of {STEPS.length}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          {!showFull && (
            <>
              <button
                onClick={prev}
                disabled={index === 0}
                className="flex items-center gap-1 px-3 py-2 rounded-md bg-muted hover:bg-accent text-foreground disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Previous step"
              >
                <ChevronLeft size={16} />
                <span className="text-sm">Prev</span>
              </button>

              <button
                onClick={next}
                disabled={index === STEPS.length - 1}
                className="flex items-center gap-1 px-3 py-2 rounded-md bg-muted hover:bg-accent text-foreground disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Next step"
              >
                <span className="text-sm">Next</span>
                <ChevronRight size={16} />
              </button>
            </>
          )}

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
          // Guided Step View
          <div className="p-8">
            {/* Step Image */}
            <div className="mb-6 bg-background rounded-lg overflow-hidden border border-border">
              <img
                src={step.src}
                alt={step.caption}
                className="w-full h-[500px] object-contain"
              />
            </div>

            {/* Caption and Navigation */}
            <div className="flex items-center justify-between gap-6">
              <p className="text-lg text-foreground font-medium flex-1">
                {step.caption}
              </p>

              {/* Thumbnail Navigation */}
              <div className="flex gap-3">
                {STEPS.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setIndex(i)}
                    className={`relative w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                      i === index
                        ? "border-secondary ring-2 ring-secondary/50 scale-105"
                        : "border-border hover:border-muted-foreground opacity-60 hover:opacity-100"
                    }`}
                    title={`Go to step ${i + 1}`}
                  >
                    <img
                      src={s.src}
                      alt={`Step ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {i === index && (
                      <div className="absolute inset-0 bg-secondary/20" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-6 flex gap-2">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all ${
                    i === index ? "bg-secondary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuidedWithFull;