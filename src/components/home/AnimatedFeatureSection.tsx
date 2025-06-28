import React from 'react';
import AnimatedLRSection from '@/components/AnimatedLRSection';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const badgeTextFontSize = 'text-[1.4rem] md:text-[1.6rem]';
  const titleFontSize = 'text-[2.8rem] md:text-[4rem] lg:text-[4.5rem]';
  const descriptionFontSize = 'text-[1.4rem] md:text-[1.8rem] lg:text-[2rem]';
  const descriptionLeading = 'lg:leading-[3.2rem]';

  const textContent = (
    <div>
      <span className={`inline-flex items-center bg-purple-100 text-brand-purple px-3 py-1 rounded-full ${badgeTextFontSize} font-semibold mb-8 md:mb-10 lg:mb-12`}>
        <img src="/assets/book.png" alt={t('homePage.animatedFeatureSection.badgeIconAlt')} className="w-auto h-[24px] sm:h-[28px] md:h-[32px] mr-2" />
        {badgeText}
      </span>
      <h2 className={`${titleFontSize} font-bold text-brand-text-primary mb-6 md:mb-8`}>
        {title}
      </h2>
      <p className={`${descriptionFontSize} ${descriptionLeading} leading-relaxed text-brand-text-muted`}>
        {description}
      </p>
    </div>
  );

  const imageContent = (
    <div className="flex justify-center items-center">
      <img
        src={imageUrl}
        alt={imageAlt} // This alt is passed from HomePage and should be already translated
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