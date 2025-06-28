import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CentralAnimationContent from './CentralAnimationContent';

const AppleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 1024 1024"
    fill="currentColor"
    {...props}
  >
    <path d="M747.4 535.7c-0.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7z" />
    <path d="M642.3 230.7c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z" />
  </svg>
);

// Copied from FreeTrialSection for use here
const NewAndroidIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    className="icon" // Retained class if it has specific global styles, otherwise can be removed
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="currentColor"
  >
    <path d="M270.1 741.7c0 23.4 19.1 42.5 42.6 42.5h48.7v120.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V784.1h85v120.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V784.1h48.7c23.5 0 42.6-19.1 42.6-42.5V346.4h-486v395.3zM627.2 141.6l44.9-65c2.6-3.8 2-8.9-1.5-11.4-3.5-2.4-8.5-1.2-11.1 2.6l-46.6 67.6c-30.7-12.1-64.9-18.8-100.8-18.8-35.9 0-70.1 6.7-100.8 18.8l-46.6-67.5c-2.6-3.8-7.6-5.1-11.1-2.6-3.5 2.4-4.1 7.4-1.5 11.4l44.9 65c-71.4 33.2-121.4 96.1-127.8 169.6h486c-6.6-73.6-56.7-136.5-128-169.7zM409.5 244.1c-14.8 0-26.9-12-26.9-26.9 0-14.8 12-26.9 26.9-26.9 14.8 0 26.9 12 26.9 26.9-0.1 14.9-12.1 26.9-26.9 26.9z m208.4 0c-14.8 0-26.9-12-26.9-26.9 0-14.8 12-26.9 26.9-26.9 14.8 0 26.9 12 26.9 26.9-0.1 14.9-12.1 26.9-26.9 26.9zM841.3 344.8c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V400.1c0.1-30.6-24.3-55.3-54.6-55.3zM182.7 344.8c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V400.1c0-30.6-24.5-55.3-54.6-55.3z"></path>
  </svg>
);

const NewWindowsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="currentColor"
  >
    <path d="M523.8 191.4v288.9h382V128.1zM523.8 833.6l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zM120.1 770.6L443 823.2V543.8H120.1z"></path>
  </svg>
);

const ChevronCircleRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m0 73.142857C323.486476 170.666667 170.666667 323.486476 170.666667 512s152.81981 341.333333 341.333333 341.333333 341.333333-152.81981 341.333333-341.333333S700.513524 170.666667 512 170.666667z m-48.761905 118.954666L685.616762 512 463.238095 734.378667 411.526095 682.666667l170.666667-170.666667-170.666667-170.666667L463.238095 289.621333z"></path>
  </svg>
);

const OtherPlatformsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 30 30"
    fill="currentColor"
    {...props}
  >
    <path d="M22.5,5H7.5C4.74,5,2.5,7.24,2.5,10v10c0,2.76,2.24,5,5,5h7.5v-2.5H7.5c-1.38,0-2.5-1.12-2.5-2.5V10 c0-1.38,1.12-2.5,2.5-2.5h15c1.38,0,2.5,1.12,2.5,2.5v5h2.5v-5C27.5,7.24,25.26,5,22.5,5z" />
    <path d="M27.5,12.5h-7.5c-1.38,0-2.5,1.12-2.5,2.5v7.5c0,1.38,1.12,2.5,2.5,2.5h7.5c1.38,0,2.5-1.12,2.5-2.5v-7.5 C30,13.62,28.88,12.5,27.5,12.5z" />
  </svg>
);

const StatCircle: React.FC<{ value: string; labelKey: string }> = ({
  value,
  labelKey,
}) => {
  const { t } = useTranslation();
  const match = value.match(/^(\d+)(.*)$/);
  const numberPart = match ? match[1] : '';
  const unitPart = match ? match[2] : value;

  const valueNumberFontSize =
    'text-[1.6rem] sm:text-[1.9rem] md:text-[2.4rem] lg:text-[3rem]';
  const valueUnitFontSize =
    'text-[1.0rem] sm:text-[1.2rem] md:text-[1.6rem] lg:text-[1.9rem]';
  const labelFontSize =
    'text-[0.9rem] sm:text-[1.0rem] md:text-[1.4rem] lg:text-[1.6rem]';

  return (
    <div className="w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[10rem] md:w-[12rem] md:h-[12rem] lg:w-[14rem] lg:h-[14rem] border-[3px] border-white rounded-full flex flex-col items-center justify-center text-white text-center p-1 sm:p-2 backdrop-blur-sm">
      <div className="flex items-baseline">
        {numberPart && (
          <span className={`${valueNumberFontSize} font-bold`}>
            {numberPart}
          </span>
        )}
        <span className={`${valueUnitFontSize}`}>{unitPart}</span>
      </div>
      <span className={`${labelFontSize} block mt-1 md:mt-2 font-bold`}>
        {t(labelKey)}
      </span>
    </div>
  );
};

interface HeroSectionProps {
  isAtTop?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isAtTop = true }) => {
  const { t } = useTranslation();

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [detectedOS, setDetectedOS] = useState<'ios' | 'android' | 'unknown'>(
    'unknown'
  );
  const [detectedDesktopOS, setDetectedDesktopOS] = useState<
    'mac' | 'windows' | 'other'
  >('other');

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    // Basic OS detection for mobile using User-Agent
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/android/i.test(userAgent)) {
      setDetectedOS('android');
    } else if (
      /iPad|iPhone|iPod/.test(userAgent) &&
      !(window as any).MSStream
    ) {
      setDetectedOS('ios');
    } else {
      setDetectedOS('ios'); // Default to iOS if unknown or for other OS like desktop
    }

    // OS detection for desktop
    const platform = navigator.platform.toLowerCase();
    if (platform.includes('mac')) {
      setDetectedDesktopOS('mac');
    } else if (platform.includes('win')) {
      setDetectedDesktopOS('windows');
    } else {
      setDetectedDesktopOS('other'); // Linux, etc.
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const titleFontSize = 'text-[2.8rem] md:text-[4rem] lg:text-[4.5rem]';
  const subtitleFontSize = 'text-[1.4rem] md:text-[1.8rem] lg:text-[2rem]';
  const buttonTextFontSize = 'text-[1.4rem] md:text-[1.8rem] lg:text-[2rem]';

  const handleScrollToFreeTrial = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const freeTrialSection = document.getElementById('free-trial-section');
    if (freeTrialSection) {
      freeTrialSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const mobileButtonBaseClass = `w-full max-w-[28rem] h-[5.5rem] bg-white text-[#4853E3] rounded-full ${buttonTextFontSize} leading-none font-semibold flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors duration-200`;
  const mobileIconClass = 'w-[2.2rem] h-[2.2rem] mr-2 fill-current';

  const primaryButtonClasses = `w-full max-w-[28rem] h-[6rem] sm:w-auto md:h-[6.5rem] lg:w-[28rem] lg:h-[8rem] bg-white text-[#4853E3] rounded-full ${buttonTextFontSize} leading-none font-semibold flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors duration-200`;
  const primaryButtonIconClasses =
    'w-[2.8rem] h-[2.8rem] md:w-[3rem] md:h-[3rem] lg:w-[4rem] lg:h-[4rem] mr-2 sm:mr-3';
  const secondaryButtonClasses = `w-full max-w-[28rem] h-[6rem] sm:w-auto md:h-[6.5rem] lg:w-[28rem] lg:h-[8rem] bg-white text-[#4853E3] rounded-full ${buttonTextFontSize} leading-none font-semibold flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors duration-200`;

  const subtitleIconBaseClass =
    'w-[1.8rem] h-[1.8rem] sm:w-[2.1rem] sm:h-[2.1rem] md:w-[3.4rem] md:h-[3.4rem] mr-1.5 sm:mr-2 md:mr-2 flex-shrink-0';

  const ComplexAnimation: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
    <div
      className={`items-center justify-center ${
        isMobile
          ? 'flex mt-8 w-full p-0'
          : 'hidden md:flex p-4 md:p-8 md:col-start-2 md:row-start-1'
      }`}
    >
      <svg
        viewBox="0,0,650,400"
        preserveAspectRatio="xMidYMid meet"
        className={`app-svg h-auto ${
          isMobile ? 'w-full max-w-lg' : 'max-w-full'
        }`} // Adjusted mobile size
        aria-label={t('altTexts.vpnConnectionAnimation')}
      >
        <svg // Container for the static background image
          width="500pt"
          height="400pt"
          x="30pt"
          y="-70pt"
        >
          <image
            xlinkHref="/assets/home_right_zh.e127948c.png"
            width="450pt"
            height="400pt"
            className="svgimage"
          ></image>
        </svg>
        <svg // Container for CentralAnimationContent
          x="-140pt"
          y="-85pt"
          width="500pt"
          height="500pt"
          viewBox="0 0 400 400"
          overflow="visible"
        >
          <CentralAnimationContent />
        </svg>
      </svg>
    </div>
  );

  const mobileStatsData = [
    { value: '3s', labelKey: 'homePage.hero.stats.connectSpeed' },
    { value: '72h', labelKey: 'homePage.hero.stats.freeTrial' },
    { value: '1000+', labelKey: 'homePage.hero.stats.appsSupported' },
  ];

  const sectionStyle: React.CSSProperties = {};
  if (isMobileView) {
    if (isAtTop) {
      sectionStyle.background = 'transparent'; // Let HomePage's div provide background
      sectionStyle.zIndex = 3; // Ensure HeroSection is above HomePage fixed background
    } else {
      sectionStyle.background =
        'linear-gradient(315deg, #eb4eb1, #9257f9 50.46%, #3150ed)';
      sectionStyle.zIndex = 3; // Ensure HeroSection is above HomePage fixed background
    }
  } else {
    sectionStyle.backgroundImage = 'url(/assets/home_bg_pc.png)';
  }

  return (
    <section
      className="relative flex flex-col items-center min-h-screen pt-[100px] text-white overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed z-0"
      style={sectionStyle}
      aria-labelledby="hero-heading"
    >
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex w-full max-w-container-wide">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full">
          {/* Text Content Area (Left on Desktop, Full-width on Mobile) */}
          <div className="flex flex-col items-center text-center pc:items-start pc:text-left">
            <h1
              id="hero-heading"
              className={`font-bold mb-[2.5rem] md:mb-[4.5rem] leading-tight ${titleFontSize}`}
            >
              {t('homePage.hero.title')}
            </h1>

            <div
              className={`${subtitleFontSize} font-bold leading-normal mb-[2.5rem] md:mb-[4.5rem] text-white/90 flex items-center justify-center pc:justify-start`}
            >
              {isMobileView ? (
                detectedOS === 'ios' || detectedOS === 'unknown' ? ( // iOS or unknown mobile OS
                  <>
                    <img
                      src="/assets/icon_appStore.82074fd6.png"
                      alt={t('altTexts.appStoreIcon')}
                      className={`${subtitleIconBaseClass} inline-block`}
                    />
                    <span>{t('homePage.hero.subtitle')}</span>{' '}
                    {/* Reverted to desktop subtitle for iOS mobile */}
                  </>
                ) : (
                  // Android mobile OS
                  <>
                    <img
                      src="/assets/icon-google.png" // Updated icon for Android
                      alt={t('altTexts.googleIcon')} // Updated alt text
                      className={`${subtitleIconBaseClass} inline-block`}
                    />
                    <span>{t('homePage.hero.googleSafetyAudit')}</span>{' '}
                    {/* Text for Google audit */}
                  </>
                )
              ) : (
                // Desktop view
                <>
                  {detectedDesktopOS === 'windows' ? (
                    <>
                      <img
                        src="/assets/icon-app-esteem.jpeg"
                        alt={t('homePage.hero.appEsteemAudit')}
                        className={`${subtitleIconBaseClass} inline-block`}
                      />
                      <span>{t('homePage.hero.appEsteemAudit')}</span>
                    </>
                  ) : (
                    // Fallback for Mac and other desktops
                    <>
                      <img
                        src="/assets/icon_appStore.82074fd6.png"
                        alt={t('altTexts.appStoreIcon')}
                        className={`${subtitleIconBaseClass} inline-block`}
                      />
                      <span>{t('homePage.hero.subtitle')}</span>
                    </>
                  )}
                </>
              )}
            </div>

            {/* Desktop Stats Circles */}
            <div className="hidden md:flex mb-[2.5rem] md:mb-[4.5rem] gap-[1rem] sm:gap-[1.5rem] md:gap-[3rem] justify-center pc:justify-start">
              <StatCircle
                value="3s"
                labelKey="homePage.hero.stats.connectSpeed"
              />
              <StatCircle
                value="72h"
                labelKey="homePage.hero.stats.freeTrial"
              />
              <StatCircle
                value="1000+"
                labelKey="homePage.hero.stats.appsSupported"
              />
            </div>

            {/* Mobile Stats - New Layout with Dividers */}
            {isMobileView && (
              <div className="flex justify-around items-center text-white text-center mb-[2.5rem] px-4">
                {mobileStatsData.map((stat, index) => (
                  <React.Fragment key={stat.labelKey}>
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-bold">{stat.value}</span>
                      <span className="text-sm font-medium mt-1">
                        {t(stat.labelKey)}
                      </span>
                    </div>
                    {index < mobileStatsData.length - 1 && (
                      <div
                        className="w-px h-10 bg-gradient-to-b from-white/20 via-white/80 to-white/20"
                        aria-hidden="true"
                      ></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}

            <div className="flex flex-col items-center">
              {isMobileView ? (
                <>
                  {detectedOS === 'ios' && (
                    <button className={`${mobileButtonBaseClass} mb-4`}>
                      <AppleIcon className={mobileIconClass} />
                      {t('homePage.hero.buttons.iosDownload')}
                    </button>
                  )}
                  {detectedOS === 'android' && (
                    <button className={`${mobileButtonBaseClass} mb-4`}>
                      <NewAndroidIcon className={mobileIconClass} />
                      {t('homePage.hero.buttons.androidDownload')}
                    </button>
                  )}
                  {detectedOS === 'unknown' && ( // Default/Fallback for mobile
                    <button className={`${mobileButtonBaseClass} mb-4`}>
                      <AppleIcon className={mobileIconClass} />
                      {t('homePage.hero.buttons.iosDownload')}
                    </button>
                  )}

                  <button
                    onClick={handleScrollToFreeTrial}
                    className="text-white/80 hover:text-white font-semibold transition-colors duration-200 text-base sm:text-lg mt-2 font-bold flex items-center"
                    aria-label={t(
                      'homePage.hero.buttons.scrollToFreeTrialAriaLabel'
                    )}
                  >
                    {t('homePage.hero.buttons.otherPlatformsMobileLink')}
                    <ChevronCircleRightIcon className="w-5 h-5 ml-1.5" />
                  </button>

                  {/* PC's Right-Side Animation - now shown on mobile */}
                  <ComplexAnimation isMobile={true} />
                </>
              ) : (
                // Desktop Buttons
                <div className="flex flex-col items-center">
                  {detectedDesktopOS === 'other' ? (
                    // Fallback for Linux/Unknown: Show both buttons, and link below.
                    <>
                      <div className="flex flex-col items-center sm:flex-row gap-y-4 sm:gap-x-[2rem] justify-center pc:justify-start">
                        <button className={primaryButtonClasses}>
                          <AppleIcon
                            className={`${primaryButtonIconClasses} fill-current`}
                          />
                          {t('homePage.hero.buttons.macDownload')}
                        </button>
                        <button className={primaryButtonClasses}>
                          <NewWindowsIcon
                            className={primaryButtonIconClasses}
                          />
                          {t('homePage.hero.buttons.pcDownload')}
                        </button>
                      </div>
                      <button
                        onClick={handleScrollToFreeTrial}
                        className="text-white/80 hover:text-white font-semibold transition-colors duration-200 text-base sm:text-lg mt-6 font-bold flex items-center self-center"
                        aria-label={t(
                          'homePage.hero.buttons.scrollToFreeTrialAriaLabel'
                        )}
                      >
                        {t('homePage.hero.buttons.otherPlatforms')}
                        <ChevronCircleRightIcon className="w-5 h-5 ml-1.5" />
                      </button>
                    </>
                  ) : (
                    // Detected OS (Win/Mac): Show one primary + one secondary button side-by-side.
                    <div className="flex flex-col items-center sm:flex-row gap-y-4 sm:gap-x-[2rem] justify-center pc:justify-start">
                      {detectedDesktopOS === 'windows' && (
                        <button className={primaryButtonClasses}>
                          <NewWindowsIcon
                            className={primaryButtonIconClasses}
                          />
                          {t('homePage.hero.buttons.pcDownload')}
                        </button>
                      )}
                      {detectedDesktopOS === 'mac' && (
                        <button className={primaryButtonClasses}>
                          <AppleIcon
                            className={`${primaryButtonIconClasses} fill-current`}
                          />
                          {t('homePage.hero.buttons.macDownload')}
                        </button>
                      )}
                      <button
                        onClick={handleScrollToFreeTrial}
                        className={secondaryButtonClasses}
                        aria-label={t(
                          'homePage.hero.buttons.scrollToFreeTrialAriaLabel'
                        )}
                      >
                        <OtherPlatformsIcon
                          className={primaryButtonIconClasses}
                        />
                        {t('homePage.hero.buttons.otherPlatforms')}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Animation Area - Rendered only if not mobile view */}
          {!isMobileView && <ComplexAnimation isMobile={false} />}
        </div>
      </div>
      {/* Mobile Wave SVG */}
      {isMobileView && (
        <svg
          data-v-0d88526f=""
          viewBox="0 0 1242 565.48"
          className="wave"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            position: 'absolute',
            right: 0,
            bottom: '-0.0161rem',
            zIndex: 2,
          }}
          aria-hidden="true"
        >
          <g
            data-v-0d88526f=""
            id="图层_2"
            data-name="图层 2"
          >
            <g
              data-v-0d88526f=""
              id="图层_1-2"
              data-name="图层 1"
            >
              <path
                data-v-0d88526f=""
                d="M0,532.56c137.19,9.68,314.14-2.62,467-106.47,136.89-93,158.2-194,295.85-293.49C857.38,64.31,1005.4-2.26,1242,.06V565.48H0Z"
                className="cls-1"
                fill="#FFFFFF" // Assuming white fill, adjust if cls-1 handles it or another color is needed
              />
            </g>
          </g>
        </svg>
      )}
    </section>
  );
};

export default HeroSection;
