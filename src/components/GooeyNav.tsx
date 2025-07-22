import React, { useRef, useEffect, useState } from "react";

interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
  onItemClick?: (index: number, href: string) => void;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0,
  onItemClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (
    distance: number,
    pointIndex: number,
    totalPoints: number
  ): [number, number] => {
    const angle =
      ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (
    i: number,
    t: number,
    d: [number, number],
    r: number
  ) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };

  const makeParticles = (element: HTMLElement) => {
    const d: [number, number] = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty("--time", `${bubbleTime}ms`);

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove("active");

      setTimeout(() => {
        const particle = document.createElement("span");
        const point = document.createElement("span");
        particle.classList.add("particle");
        particle.style.setProperty("--start-x", `${p.start[0]}px`);
        particle.style.setProperty("--start-y", `${p.start[1]}px`);
        particle.style.setProperty("--end-x", `${p.end[0]}px`);
        particle.style.setProperty("--end-y", `${p.end[1]}px`);
        particle.style.setProperty("--time", `${p.time}ms`);
        particle.style.setProperty("--scale", `${p.scale}`);
        particle.style.setProperty("--color", `var(--color-${p.color}, white)`);
        particle.style.setProperty("--rotate", `${p.rotate}deg`);
        point.classList.add("point");
        particle.appendChild(point);
        element.appendChild(particle);

        requestAnimationFrame(() => {
          element.classList.add("active");
        });

        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {}
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = (element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };

    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };

  const handleClick = (e: React.MouseEvent<HTMLLIElement>, index: number) => {
    const liEl = e.currentTarget;
    if (activeIndex === index) return;

    setActiveIndex(index);
    updateEffectPosition(liEl);

    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll(".particle");
      particles.forEach((p) => filterRef.current!.removeChild(p));
    }

    if (textRef.current) {
      textRef.current.classList.remove("active");
      void textRef.current.offsetWidth;
      textRef.current.classList.add("active");
    }

    if (filterRef.current) {
      makeParticles(filterRef.current);
    }

    if (onItemClick) {
      onItemClick(index, items[index].href);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    index: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick(
          { currentTarget: liEl } as React.MouseEvent<HTMLLIElement>,
          index
        );
      }
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;

    const activeLi = navRef.current.querySelectorAll("li")[
      activeIndex
    ] as HTMLElement;
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add("active");
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll("li")[
        activeIndex
      ] as HTMLElement;
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <>
      <style>{`
        /* Base styles */
        .gooey-nav-container {
          --color-1: #ff6b6b;
          --color-2: #4ecdc4;
          --color-3: #45b7d1;
          --color-4: #f9ca24;
        }

        /* Particle animations */
        .particle {
          position: absolute;
          left: 50%;
          top: 50%;
          pointer-events: none;
          z-index: 1;
          transform: translate(-50%, -50%) translate3d(var(--start-x), var(--start-y), 0) scale(0);
          animation: particle-move var(--time) ease-out forwards;
        }

        .particle .point {
          width: 4px;
          height: 4px;
          background: var(--color);
          border-radius: 50%;
          transform: scale(var(--scale));
        }

        @keyframes particle-move {
          0% {
            transform: translate(-50%, -50%) translate3d(var(--start-x), var(--start-y), 0) scale(0) rotate(0deg);
            opacity: 1;
          }
          10% {
            transform: translate(-50%, -50%) translate3d(var(--start-x), var(--start-y), 0) scale(1) rotate(var(--rotate));
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) translate3d(var(--end-x), var(--end-y), 0) scale(0) rotate(calc(var(--rotate) * 2));
            opacity: 0;
          }
        }

        /* Effect styles */
        .effect {
          position: absolute;
          z-index: 1;
          pointer-events: none;
          border-radius: 9999px;
        }

        .effect.filter {
          backdrop-filter: blur(20px) saturate(180%);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .effect.text {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
          color: white;
          font-weight: 500;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.3s ease;
          font-size: inherit;
        }

        .effect.text.active {
          opacity: 1;
          transform: scale(1);
        }

        /* Navigation item hover effects */
        nav ul li {
          position: relative;
          transition: all 0.3s ease;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        nav ul li:hover {
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }

        nav ul li.active {
          color: rgba(255, 255, 255, 0.8);
        }

        nav ul li a {
          display: block;
          text-decoration: none;
          color: inherit;
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 2;
        }

        /* Responsive typography */
        @media (max-width: 640px) {
          .particle .point {
            width: 3px;
            height: 3px;
          }
        }

        @media (max-width: 480px) {
          .particle .point {
            width: 2px;
            height: 2px;
          }
        }
      `}</style>
      <div
        className="gooey-nav-container relative w-full max-w-full overflow-x-auto px-2 sm:px-4"
        ref={containerRef}
      >
        <nav
          className="flex relative justify-center"
          style={{ transform: "translate3d(0,0,0.01px)" }}
        >
          <ul
            ref={navRef}
            className="flex flex-wrap justify-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-6 list-none p-0 m-0 relative z-[3] max-w-full"
            style={{
              color: "white",
              textShadow: "0 1px 1px hsl(205deg 30% 10% / 0.2)",
            }}
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={`
                  py-2 px-3 
                  xs:py-[0.35em] xs:px-[0.7em] 
                  sm:py-[0.4em] sm:px-[0.8em] 
                  md:py-[0.5em] md:px-[1em] 
                  lg:py-[0.6em] lg:px-[1.2em]
                  text-xs 
                  xs:text-sm 
                  sm:text-base 
                  md:text-lg 
                  rounded-full 
                  relative 
                  cursor-pointer 
                  transition-all 
                  duration-300 
                  ease-in-out
                  shadow-[0_0_0.5px_1.5px_transparent] 
                  text-white 
                  whitespace-nowrap
                  min-w-0
                  flex-shrink-0
                  hover:bg-white/10
                  hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
                  active:scale-95
                  ${activeIndex === index ? "active" : ""}
                `}
                onClick={(e) => handleClick(e, index)}
                style={{
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent'
                }}
              >
                <a
                  href={item.href}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="outline-none focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent rounded-full"
                  onClick={(e) => e.preventDefault()}
                  tabIndex={0}
                >
                  <span className="block truncate max-w-[20ch] sm:max-w-none">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span className="effect filter" ref={filterRef} />
        <span className="effect text" ref={textRef} />
      </div>
    </>
  );
};

export default GooeyNav;