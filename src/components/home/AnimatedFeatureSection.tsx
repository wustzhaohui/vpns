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
  const { t, i18n } = useTranslation();
  const useLargeFont = i18n.language.startsWith('zh') || i18n.language.startsWith('zh-Hant');

  const badgeTextFontSize = useLargeFont
    ? 'text-[1.4rem] sm:text-[1.6rem] md:text-[1.9rem] lg:text-[2.2rem] xl:text-[2.5rem]'
    : 'text-[1.3rem] sm:text-[1.5rem] md:text-[1.7rem] lg:text-[2.0rem] xl:text-[2.2rem]';

  const titleFontSize = useLargeFont
    ? 'text-[2.6rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.8rem] xl:text-[6.4rem]'
    : 'text-[2.4rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4.2rem] xl:text-[5.0rem]';
  
  const descriptionFontSize = useLargeFont
    ? 'text-[1.4rem] sm:text-[1.6rem] md:text-[2.2rem] lg:text-[3rem] xl:text-[4.1rem]'
    : 'text-[1.4rem] sm:text-[1.6rem] md:text-[2.0rem] lg:text-[2.6rem] xl:text-[3.4rem]';
  
  const descriptionLeading = useLargeFont
    ? 'lg:leading-[4rem] xl:leading-[5rem]'
    : 'lg:leading-[3.5rem] xl:leading-[4.5rem]';

  const textContent = (
    <div>
      <span className={`inline-flex items-center bg-purple-100 text-brand-purple px-3 py-1 rounded-full ${badgeTextFontSize} font-semibold mb-[3.5rem] sm:mb-[4.5rem] md:mb-[5.5rem] lg:mb-[6.5rem]`}>
        <img src="/assets/book.png" alt={t('homePage.animatedFeatureSection.badgeIconAlt')} className="w-auto h-[24px] sm:h-[28px] md:h-[32px] lg:h-[36px] xl:h-[40px] mr-2" />
        {badgeText}
      </span>
      <h2 className={`${titleFontSize} font-bold text-brand-text-primary mb-[2rem] sm:mb-[2.5rem] md:mb-[3rem] lg:mb-[3.6rem]`}>
        {title}
      </h2>
      <p className={`${descriptionFontSize} ${descriptionLeading} leading-normal sm:leading-snug md:leading-relaxed text-brand-text-muted`}>
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