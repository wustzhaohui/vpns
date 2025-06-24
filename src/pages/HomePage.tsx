import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '@/components/home/HeroSection';
import PopularAppsSection from '@/components/home/PopularAppsSection';
import AnimatedFeatureSection, {
  FeatureSectionProps,
} from '@/components/home/AnimatedFeatureSection';
import UserReviewsSection from '@/components/home/UserReviewsSection';
import FreeTrialSection from '@/components/home/FreeTrialSection';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  // Feature sections data will now use translation keys
  // The actual translation will happen in AnimatedFeatureSection or here before passing
  const featureSectionsData: Omit<FeatureSectionProps, 'imagePosition'>[] =
    Array(6)
      .fill(null)
      .map((_, index) => ({
        badgeText: t(`homePage.features.${index}.badgeText`),
        title: t(`homePage.features.${index}.title`),
        description: t(`homePage.features.${index}.description`),
        imageUrl: `/assets/home_introduce_0${index + 1}.png`,
        imageAlt: t(`homePage.features.${index}.title`), // Using title as alt text, can be more specific
      }));

  return (
    <div className="text-brand-text-primary overflow-x-hidden bg-[#F8FAFF]">
      <HeroSection />
      <PopularAppsSection />

      {featureSectionsData.map((feature, index) => (
        <AnimatedFeatureSection
          key={index}
          badgeText={feature.badgeText}
          title={feature.title}
          description={feature.description}
          imageUrl={feature.imageUrl}
          imageAlt={feature.imageAlt} // Alt text already translated
          imagePosition={index % 2 === 0 ? 'right' : 'left'}
        />
      ))}

      <UserReviewsSection />
      <div id="free-trial-section">
        <FreeTrialSection />
      </div>
    </div>
  );
};

export default HomePage;
