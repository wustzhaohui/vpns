import React from 'react';
import AnimatedLRSection from '@/components/AnimatedLRSection';

export interface FeatureSectionProps {
  badgeText: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

const AnimatedFeatureSection: React.FC<FeatureSectionProps> = ({
  badgeText,
  title,
  description,
  imageUrl,
  imageAlt,
  imagePosition,
}) => {
  const textContent = (
    <div>
      <span className="inline-flex items-center bg-purple-100 text-brand-purple px-3 py-1 rounded-full text-[1.4rem] sm:text-[1.6rem] md:text-[1.9rem] lg:text-[2.2rem] xl:text-[2.5rem] font-semibold mb-[3.5rem] sm:mb-[4.5rem] md:mb-[5.5rem] lg:mb-[6.5rem]">
        <img
          src="/assets/book.png"
          alt="火爆卖点 图标"
          className="w-auto h-[24px] sm:h-[28px] md:h-[32px] lg:h-[36px] xl:h-[40px] mr-2"
        />{' '}
        {/* Updated height */}
        {badgeText}
      </span>
      <h2 className="text-[2.6rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.8rem] xl:text-[6.4rem] font-bold text-brand-text-primary mb-[2rem] sm:mb-[2.5rem] md:mb-[3rem] lg:mb-[3.6rem]">
        {title}
      </h2>
      <p className="text-[1.4rem] sm:text-[1.6rem] md:text-[2.2rem] lg:text-[3rem] xl:text-[4.1rem] leading-normal sm:leading-snug md:leading-relaxed lg:leading-[4rem] xl:leading-[5rem] text-brand-text-muted">
        {description}
      </p>
    </div>
  );

  const imageContent = (
    <div className="flex justify-center items-center">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="max-w-full h-auto object-contain rounded-lg"
      />
    </div>
  );

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 max-w-container-wide">
        <AnimatedLRSection
          leftContent={imagePosition === 'left' ? imageContent : textContent}
          rightContent={imagePosition === 'left' ? textContent : imageContent}
        />
      </div>
    </section>
  );
};

export default AnimatedFeatureSection;
