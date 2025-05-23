"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    title: "Best decision",
    content: "This app really saved my life! Truly grateful to it...",
    author: "John Johnsen",
    avatar: "https://github.com/shadcn.png",
    initials: "JJ",
  },
  {
    title: "Life-saving app",
    content: "The flood alerts helped me evacuate in time. Incredible tool!",
    author: "Sarah Miller",
    avatar: "https://github.com/sarah.png",
    initials: "SM",
  },
  {
    title: "Essential for safety",
    content: "Real-time updates and emergency resources at your fingertips.",
    author: "Mike Chen",
    avatar: "https://github.com/mike.png",
    initials: "MC",
  },
  {
    title: "Reliable Protection",
    content: "The offline mode worked perfectly during the emergency.",
    author: "Emma Wilson",
    avatar: "https://github.com/emma.png",
    initials: "EW",
  },
];

function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 2000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Trusted by thousands of users{" "}
            <span className="text-cyan-600">WorldWide</span>
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {Array.from({ length: 15 }).map((_, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <User className="w-8 h-8 stroke-1" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">
                          {testimonials[index % testimonials.length].title}
                        </h3>
                        <p className="text-muted-foreground max-w-xs text-base">
                          {testimonials[index % testimonials.length].content}
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-muted-foreground">By</span>{" "}
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src={
                              testimonials[index % testimonials.length].avatar
                            }
                          />
                          <AvatarFallback>
                            {testimonials[index % testimonials.length].initials}
                          </AvatarFallback>
                        </Avatar>
                        <span>
                          {testimonials[index % testimonials.length].author}
                        </span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Testimonials };
