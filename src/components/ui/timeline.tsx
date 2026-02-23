import { useRef, useState, useEffect, useCallback } from "react";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  motion,
} from "framer-motion";

export interface TimelineEntry {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export function Timeline({ data }: { data: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const cachedOffsets = useRef<number[]>([]);
  const activeRef = useRef(-1);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
    // Cache offsetTop values once after mount + on resize
    const cacheOffsets = () => {
      cachedOffsets.current = itemRefs.current.map((el) => el?.offsetTop ?? 0);
    };
    cacheOffsets();
    window.addEventListener("resize", cacheOffsets);
    return () => window.removeEventListener("resize", cacheOffsets);
  }, [data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Determine active index using cached offsets (avoids DOM reads on every scroll tick)
  useMotionValueEvent(heightTransform, "change", (latestHeight) => {
    let newActive = -1;
    const offsets = cachedOffsets.current;
    for (let i = 0; i < offsets.length; i++) {
      if (latestHeight >= offsets[i] - 40) {
        newActive = i;
      }
    }
    if (newActive !== activeRef.current) {
      activeRef.current = newActive;
      setActiveIndex(newActive);
    }
  });

  const setItemRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      itemRefs.current[index] = el;
    },
    [],
  );

  return (
    <div className="w-full" ref={containerRef}>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={item.title}
              ref={setItemRef(index)}
              className="flex justify-start pt-10 md:pt-20 md:gap-4"
            >
              {/* Left column: sticky year label */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs md:max-w-[14rem] md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                  <div
                    className={`h-4 w-4 rounded-full border transition-colors duration-300 ${
                      isActive
                        ? "bg-accent border-accent"
                        : "bg-gray-200 border-gray-300"
                    }`}
                  />
                </div>
                <div className="hidden md:block md:pl-14">
                  <h3
                    className={`text-xl md:text-4xl font-bold transition-colors duration-300 ${
                      isActive ? "text-text-primary" : "text-gray-400"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p
                      className={`text-sm mt-1 transition-colors duration-300 ${
                        isActive ? "text-text-secondary" : "text-gray-400"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Right column: content */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <div className="md:hidden mb-4">
                  <h3
                    className={`text-2xl text-left font-bold transition-colors duration-300 ${
                      isActive ? "text-text-primary" : "text-gray-400"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p
                      className={`text-sm mt-1 transition-colors duration-300 ${
                        isActive ? "text-text-secondary" : "text-gray-400"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  )}
                </div>
                {item.content}
              </div>
            </div>
          );
        })}

        {/* Animated vertical line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-200 to-transparent to-[99%]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-full bg-gradient-to-t from-accent via-accent/50 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
