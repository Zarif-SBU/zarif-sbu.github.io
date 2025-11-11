
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface SlideshowProps {
  images: string[];
  descriptions: string[];
}

export default function Carousel_Wrapper({ images, descriptions }: SlideshowProps) {
  return (
    <Carousel className="w-[90%] max-w-5xl mx-auto border-card-foreground border-2 rounded-2xl">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
              <Card>
                <CardContent className="p-0">
                  {/* Image Container */}
                  <div className="relative aspect-auto bg-muted">
                    <img
                      src={image}
                      alt={descriptions[index]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Description */}
                  <div className="pt-6">
                    <p className="text-lg text-foreground text-center">
                      {descriptions[index]}
                    </p>
                  </div>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}