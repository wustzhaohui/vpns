import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const TopBanner: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: window.innerWidth < 768,
    isMac: false,
    isAndroid: false,
  });

  // Effect for device detection on mount and resize
  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const platform = navigator?.platform?.toLowerCase() || '';

      const isMobile = window.innerWidth < 768;
      const isAndroid = userAgent.includes('android');
      // More robust check for Mac, trying to exclude iPads which can report 'MacIntel'
      const isLikelyMac =
        platform.includes('mac') && !('ontouchend' in document);

      setDeviceInfo({ isMobile, isMac: isLikelyMac, isAndroid });
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
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  let bannerContent;

  if (deviceInfo.isMobile && deviceInfo.isAndroid) {
    // Android Mobile banner
    bannerContent = {
      icon: '/assets/icon-google.png',
      altTextKey: 'altTexts.googleIcon',
      textKey: 'homePage.hero.googleSafetyAudit',
      link: {
        url: 'https://certification.appesteem.com/certified?vendor=LETGO',
        textKey: 'topBanner.detailsLink',
      },
    };
  } else if (!deviceInfo.isMobile && deviceInfo.isMac) {
    // Mac Desktop banner
    bannerContent = {
      icon: '/assets/icon_appStore.82074fd6.png',
      altTextKey: 'altTexts.appStoreIcon',
      textKey: 'homePage.hero.subtitle',
      link: null,
    };
  } else {
    // Default banner for iOS, Windows, Linux, etc.
    bannerContent = {
      icon: '/assets/appEsteem-trans.png',
      altTextKey: 'topBanner.altText',
      textKey: 'topBanner.text',
      link: {
        url: 'https://certification.appesteem.com/certified?vendor=LETGO',
        textKey: 'topBanner.detailsLink',
      },
    };
  }

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
