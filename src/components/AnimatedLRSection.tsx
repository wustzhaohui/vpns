import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedLRSectionProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  className?: string;
  leftContainerClassName?: string;
  rightContainerClassName?: string;
}

const AnimatedLRSection: React.FC<AnimatedLRSectionProps> = ({
  leftContent,
  rightContent,
  className = '',
  leftContainerClassName = '',
  rightContainerClassName = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.15 } // Trigger when 15% of the element is visible
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={`grid md:grid-cols-2 gap-12 items-center overflow-hidden ${className}`}>
      <div
        className={`transition-all duration-1000 ease-out ${leftContainerClassName} ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        {leftContent}
      </div>
      <div
        className={`transition-all duration-1000 ease-out ${rightContainerClassName} ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {rightContent}
      </div>
    </div>
  );
};

export default AnimatedLRSection;