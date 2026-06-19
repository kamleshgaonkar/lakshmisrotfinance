import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "@/assets/hero-slide-1.jpg.asset.json";

const SLIDES = [
  {
    id: 1,
    image: slide1.url,
    alt: "Make Your Dream Home Possible - Home Loan Solutions",
  },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActive((index + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused || SLIDES.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section
      className="group relative w-full overflow-hidden bg-background"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div
        className="flex transition-transform duration-700 ease-out will-change-transform"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${SLIDES.length}`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-auto w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {SLIDES.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-background/90 focus:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-background/90 focus:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === active
                    ? "w-8 bg-accent"
                    : "w-2.5 bg-background/70 hover:bg-background/90"
                }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === active ? "true" : undefined}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
