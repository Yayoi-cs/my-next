"use client";

import React, { useState, useEffect, useRef } from 'react';

import nextConfig from "../../../next.config.mjs";

const BasePath = nextConfig.basePath || ""


const CraftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 fill-none"
  >
    <path d="M6 3h12l4 6-10 13L2 9Z" />
    <path d="M11 3 8 9l4 13 4-13-3-6" />
    <path d="M2 9h20" />
  </svg>
);

const CSSAnimationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M7 3v18" />
    <path d="M3 7.5h4" />
    <path d="M3 12h18" />
    <path d="M3 16.5h4" />
    <path d="M17 3v18" />
    <path d="M17 7.5h4" />
    <path d="M17 16.5h4" />
  </svg>
);

const FilterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const ScrollIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M19 17V5a2 2 0 0 0-2-2H4" />
    <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
  </svg>
);

const CanvasIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

const LayoutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
    <path d="m14 7 3 3" />
    <path d="M5 6v4" />
    <path d="M19 14v4" />
    <path d="M10 2v2" />
    <path d="M7 8H3" />
    <path d="M21 16h-4" />
    <path d="M11 3H9" />
  </svg>
);

const TimeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M5 22h14" />
    <path d="M5 2h14" />
    <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
    <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
  </svg>
);

const BearIcon = () => (
  <svg
    className="w-9"
    viewBox="0 0 969 955"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="161.191" cy="320.191" r="133.191" stroke="currentColor" strokeWidth="20" />
    <circle cx="806.809" cy="320.191" r="133.191" stroke="currentColor" strokeWidth="20" />
    <circle cx="695.019" cy="587.733" r="31.4016" fill="currentColor" />
    <circle cx="272.981" cy="587.733" r="31.4016" fill="currentColor" />
    <path d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z" fill="currentColor" />
    <rect x="310.42" y="448.31" width="343.468" height="51.4986" fill="#FF1E1E" />
    <path fillRule="evenodd" clipRule="evenodd" d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z" fill="currentColor" />
  </svg>
);

interface CourseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

interface CourseCardProps {
  course: CourseItem;
  isActive: boolean;
  onActivate: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, isActive, onActivate }) => {
  return (
    <li
      className={`relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all duration-600 cursor-pointer min-w-[3rem]`}
      onMouseEnter={onActivate}
      onClick={onActivate}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onActivate()}
    >
      <article className="relative h-full flex flex-col justify-end p-4">
        <img
          src={BasePath + course.imageUrl}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-600 ease-in-out ${
            isActive 
              ? 'opacity-30 scale-100 filter-none' 
              : 'opacity-20 scale-110 grayscale brightness-150'
          }`}
          style={{
            mask: 'radial-gradient(100% 100% at 100% 0, #fff, #0000)',
            WebkitMask: 'radial-gradient(100% 100% at 100% 0, #fff, #0000)'
          }}
        />

        <div className="relative z-10 ">
          <h3 className={`font-semibold transition-all w-80 duration-600 absolute whitespace-nowrap uppercase text-sm tracking-wider ${
            isActive ? 'opacity-0' : 'opacity-60'
          }`}
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) rotate(90deg) translateY(50%)`,
            transformOrigin: 'center center'
          }}>
            {course.title}
          </h3>

          <div className={`mb-2 transition-opacity duration-600 ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}>
            {course.icon}
          </div>

          <p className={`text-sm mb-4  transition-all duration-600 text-wrap whitespace-pre-wrap w-80 ${
            isActive ? 'opacity-80 translate-y-0 delay-100' : 'opacity-0 translate-y-4'
          }`}>
            {course.description}
          </p>
        </div>
        <div className={"h-5"}></div>
      </article>
    </li>
  );
};

const CraftUIComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);

  const courses: CourseItem[] = [
    {
      id: 'whoami',
      title: 'whoami',
      description: 'tsune, ctf player mainly solve pwn, rev. whatever the challenge target such kernel or userland, just I pwn it.',
      icon: <CraftIcon />,
      imageUrl: '/images/pic2_mini.jpg'
    },
    {
      id: 'team',
      title: 'team',
      description: 'I am currently belonging to m01nm01n, sush1st, ierae. If you found those teams in CTF scoreboard, checkout my name!',
      icon: <CSSAnimationIcon />,
      imageUrl: '/images/pic3.jpg'
    },
    {
      id: 'language',
      title: 'language',
      description: 'In programming language, I can write Python, C, C++, C#, Java, Kotlin, Go, Rust, js, ts, solidity, php and can deal those language\'s major frameworks',
      icon: <FilterIcon />,
      imageUrl: '/images/babyHeapExploit.png'
    },
    {
      id: 'project',
      title: 'project',
      description: 'Let me show something what I made so far. 1. findruction, which is the fast instruction finder written in rust. You can find instruction from large binary such as vmlinux in milli second.',
      icon: <ScrollIcon />,
      imageUrl: '/images/pic6.jpg'
    },
    {
      id: 'contacts',
      title: 'contacts',
      description: 'No need to hesitate to contact to me. I\'ll welcome with your connection. discord: @li_becky github: github.com/Yayoi-cs',
      icon: <CanvasIcon />,
      imageUrl: '/images/pic5.jpg'
    },
  ];

  const updateGrid = (index: number) => {
    if (!listRef.current) return;

    const columns = courses.map((_, i) =>
      i === index ? '10fr' : '1fr'
    ).join(' ');

    listRef.current.style.gridTemplateColumns = columns;
  };

  useEffect(() => {
    setIsLoaded(true);
    updateGrid(activeIndex);
  }, []);

  const handleInteraction = (index: number) => {
    setActiveIndex(index);
    updateGrid(index);
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4 sm:p-8 transition-opacity duration-1000 ${
      isLoaded ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="relative z-10 w-full max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white text-center">
          road to master
        </h1>

        <p className="max-w-2xl mx-auto text-center mb-16 text-gray-700 dark:text-gray-300 text-balance font-mono">
          Hi! I'm tsune. Capture the Flag (CTF) player in Japan, now 18th years old. I'm working hard to conquer the computer.
        </p>

        <ul
          ref={listRef}
          className="grid gap-2 w-full transition-all duration-600 ease-[cubic-bezier(0.4,0.0,0.2,1)]"
          style={{
            height: 'clamp(300px, 40vh, 474px)',
            gridTemplateColumns: '10fr 1fr 1fr 1fr 1fr 1fr 1fr'
          }}
          onMouseLeave={() => handleInteraction(0)}
        >
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              isActive={activeIndex === index}
              onActivate={() => handleInteraction(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CraftUIComponent;
