import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const TopBanner: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [isMac, setIsMac] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  // Effect for device detection (mobile/mac) on mount and resize
  useEffect(() => {
    const checkDevice = () => {
      setIsMobileView(window.innerWidth < 768);
      // More robust check for Mac, trying to exclude iPads which can report 'MacIntel'
      const platform = navigator?.platform?.toLowerCase() || '';
      // 'macintel' can be on iPad, so check for touch support to differentiate.
      const isLikelyMac =
        platform.includes('mac') && !('ontouchend' in document);
      setIsMac(isLikelyMac);
    };

    window.addEventListener('resize', checkDevice);
    checkDevice(); // Initial check

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Effect for handling scroll to hide the banner
  useEffect(() => {
    // Hide after scrolling past one viewport height.
    const threshold = window.innerHeight;

    const handleScroll = () => {
      // isVisible check prevents re-running setState after it's already false
      if (isVisible && window.scrollY >= threshold) {
        setIsVisible(false);
      }
    };

    // Check initial scroll position on mount
    if (window.scrollY >= threshold) {
      setIsVisible(false);
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Cleanup: remove listener once component unmounts or banner is hidden.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]); // Re-run effect only if isVisible changes (for adding/removing listener)

  if (!isVisible) {
    return null;
  }

  // Determine if we should show the special Mac banner.
  // Condition: Not mobile view AND detected as a Mac device.
  const showMacBanner = !isMobileView && isMac;

  const bannerContent = showMacBanner
    ? {
        icon: '/assets/icon_appStore.82074fd6.png',
        altTextKey: 'altTexts.appStoreIcon',
        textKey: 'homePage.hero.subtitle',
        link: null,
      }
    : {
        icon: '/assets/appEsteem-trans.png',
        altTextKey: 'topBanner.altText',
        textKey: 'topBanner.text',
        link: {
          url: 'https://certification.appesteem.com/certified?vendor=LETGO',
          textKey: 'topBanner.detailsLink',
        },
      };

  const containerClasses = `h-[3rem] md:h-[5rem] flex items-center justify-center text-white relative z-[51] bg-black`;
  const textClasses = 'text-center text-[1.2rem] md:text-[1.6rem]';
  const iconClasses =
    'h-[2rem] md:h-[2.8rem] w-auto mr-2 md:mr-4 flex-shrink-0';
  const linkClasses =
    'underline ml-2 text-[#1677FF] hover:opacity-80 transition-opacity whitespace-nowrap';

  return (
    <div className={containerClasses}>
      <div className="flex items-center justify-center max-w-container-wide mx-auto px-4">
        <img
          src={bannerContent.icon}
          alt={t(bannerContent.altTextKey)}
          className={iconClasses}
        />
        <p className={textClasses}>
          <span>{t(bannerContent.textKey)}</span>
          {bannerContent.link && (
            <a
              href={bannerContent.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              {t(bannerContent.link.textKey)}
            </a>
          )}
        </p>
      </div>
    </div>
  );
};

export default TopBanner;
