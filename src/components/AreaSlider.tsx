import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    title: "Whitefield",
    description: "The IT Hub of Bangalore with premium tech parks and malls.",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=2000&auto=format&fit=crop",
    tags: ["IT Hub", "Metro Connected", "Premium"],
  },
  {
    title: "Indiranagar",
    description: "Vibrant neighborhood known for its dining and nightlife.",
    image: "https://images.unsplash.com/photo-1620614838575-b9f481c000e3?q=80&w=2000&auto=format&fit=crop",
    tags: ["Nightlife", "Shopping", "Central"],
  },
  {
    title: "Koramangala",
    description: "The startup capital with amazing cafes and leafy streets.",
    image: "https://images.unsplash.com/photo-1588603417757-010ed1596b6b?q=80&w=2000&auto=format&fit=crop",
    tags: ["Startups", "Food Hub", "Upscale"],
  },
  {
    title: "HSR Layout",
    description: "Well-planned residential area perfect for families.",
    image: "https://images.unsplash.com/photo-1605481702956-628d022b4055?q=80&w=2000&auto=format&fit=crop",
    tags: ["Parks", "Family Friendly", "Planned"],
  },
];

export function AreaSlider() {
  return (
    <div className="w-full max-w-5xl mx-auto px-10">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden border-0 shadow-lg group cursor-pointer transition-all hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{slide.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {slide.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-white/20 hover:bg-white/40 text-white border-0 backdrop-blur-sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 bg-card">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {slide.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12" />
        <CarouselNext className="hidden md:flex -right-12" />
      </Carousel>
    </div>
  );
}
