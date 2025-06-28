
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '@/components/home/HeroSection';
import PopularAppsSection from '@/components/home/PopularAppsSection';
import AnimatedFeatureSection, { FeatureSectionProps } from '@/components/home/AnimatedFeatureSection';
import UserReviewsSection from '@/components/home/UserReviewsSection';
import FreeTrialSection from '@/components/home/FreeTrialSection';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 10);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial checks
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Feature sections data will now use translation keys
  // The actual translation will happen in AnimatedFeatureSection or here before passing
  const featureSectionsData: Omit<FeatureSectionProps, 'imagePosition'>[] = Array(6).fill(null).map((_, index) => ({
    badgeText: t(`homePage.features.${index}.badgeText`),
    title: t(`homePage.features.${index}.title`),
    description: t(`homePage.features.${index}.description`),
    imageUrl: `/assets/home_introduce_0${index + 1}.png`,
    imageAlt: t(`homePage.features.${index}.title`), // Using title as alt text, can be more specific
  }));


  return (
    <div className="text-brand-text-primary overflow-x-hidden bg-[#F8FAFF]">
      {isMobileView && isAtTop && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '100vh', // Changed: Cover full viewport height
            background: 'linear-gradient(315deg, #eb4eb1, #9257f9 50.46%, #3150ed)', // HeroSection mobile gradient
            zIndex: 1,      // Changed: Sit behind HeroSection content (z-10) and Header (z-50)
          }}
          aria-hidden="true"
        />
      )}
      {isMobileView && (
        <div
          style={{
            position: 'absolute', // Changed from 'fixed' to 'absolute'
            width: '3.62319rem',
            height: '3.62319rem',
            top: '58%',
            right: '8%',
            opacity: 0.05,
            background: '#fff',
            borderRadius: '50%', // Added border-radius
            zIndex: 2, // Above the main background gradient (zIndex: 1)
          }}
          aria-hidden="true"
        />
      )}
      <HeroSection isAtTop={isAtTop} />
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