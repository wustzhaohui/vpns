import React from 'react';
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

const PlatformIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect
      x="2"
      y="3"
      width="20"
      height="14"
      rx="2"
      ry="2"
    ></rect>
    <line
      x1="8"
      y1="21"
      x2="16"
      y2="21"
    ></line>
    <line
      x1="12"
      y1="17"
      x2="12"
      y2="21"
    ></line>
  </svg>
);

const StatCircle: React.FC<{ value: string; labelKey: string }> = ({
  value,
  labelKey,
}) => {
  const { t, i18n } = useTranslation();
  const match = value.match(/^(\d+)(.*)$/);
  const numberPart = match ? match[1] : '';
  const unitPart = match ? match[2] : value;

  const isRussian = i18n.language.startsWith('ru');
  const isChinese =
    i18n.language.startsWith('zh') || i18n.language.startsWith('zh-Hant');

  let valueNumberFontSize;
  let valueUnitFontSize;
  let labelFontSize;

  if (isRussian) {
    valueNumberFontSize =
      'text-[1.6rem] sm:text-[1.9rem] md:text-[2.3rem] lg:text-[2.8rem] xl:text-[3.3rem]'; // Smaller for number in RU
    valueUnitFontSize =
      'text-[1.0rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.7rem] xl:text-[2.0rem]'; // Smaller for unit in RU
    labelFontSize =
      'text-[0.9rem] sm:text-[1.0rem] md:text-[1.1rem] lg:text-[1.25rem] xl:text-[1.5rem]'; // Smaller for label in RU
  } else if (isChinese) {
    valueNumberFontSize =
      'text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] xl:text-[4.2rem]'; // Standard
    valueUnitFontSize =
      'text-[1.2rem] sm:text-[1.5rem] md:text-[1.9rem] lg:text-[2.3rem] xl:text-[2.8rem]'; // Standard
    labelFontSize =
      'text-[1.1rem] sm:text-[1.3rem] md:text-[1.6rem] lg:text-[2rem] xl:text-[2.5rem]'; // Larger for Chinese label
  } else {
    // Default (e.g., English)
    valueNumberFontSize =
      'text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] xl:text-[4.2rem]'; // Standard
    valueUnitFontSize =
      'text-[1.2rem] sm:text-[1.5rem] md:text-[1.9rem] lg:text-[2.3rem] xl:text-[2.8rem]'; // Standard
    labelFontSize =
      'text-[1.0rem] sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.6rem] xl:text-[2.0rem]'; // Standard (smaller) label
  }

  return (
    <div className="w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[16rem] lg:h-[16rem] border-[3px] border-white rounded-full flex flex-col items-center justify-center text-white text-center p-1 sm:p-2 backdrop-blur-sm">
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

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const useLargeFont =
    i18n.language.startsWith('zh') ||
    i18n.language.startsWith('zh-Hant') ||
    i18n.language.startsWith('ru');

  const titleFontSize = useLargeFont
    ? 'text-[2.8rem] sm:text-[3.5rem] md:text-[4.2rem] lg:text-[5rem] xl:text-[6.4rem]'
    : 'text-[2.6rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.5rem] xl:text-[5.0rem]';

  const subtitleFontSize = useLargeFont
    ? 'text-[1.2rem] sm:text-[1.4rem] md:text-[1.7rem] lg:text-[2rem] xl:text-[2.5rem]'
    : 'text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2.2rem]';

  const buttonTextFontSize = useLargeFont
    ? 'text-[1.4rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.4rem] xl:text-[3.2rem]'
    : 'text-[1.3rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.0rem] xl:text-[2.6rem]';

  return (
    <section
      className="relative flex flex-col items-center min-h-screen pt-[100px] text-white overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: 'url(/assets/home_bg_pc.png)',
      }}
      aria-labelledby="hero-heading"
    >
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex w-full max-w-container-wide">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full">
          <div className="text-center">
            <h1
              id="hero-heading"
              className={`font-bold mb-[2.5rem] md:mb-[4.5rem] leading-tight ${titleFontSize}`}
            >
              {t('homePage.hero.title')}
            </h1>
            <p
              className={`${subtitleFontSize} font-bold leading-normal mb-[2.5rem] md:mb-[4.5rem] text-white/90 flex items-center justify-center`}
            >
              <img
                src="/assets/icon_appStore.82074fd6.png"
                alt={t('altTexts.appStoreIcon')}
                className="w-[2.8rem] h-[2.8rem] sm:w-[3rem] sm:h-[3rem] md:w-[3.4rem] md:h-[3.4rem] mr-2 inline-block flex-shrink-0"
              />
              {t('homePage.hero.subtitle')}
            </p>
            <div className="flex mb-[2.5rem] md:mb-[4.5rem] mx-auto gap-[1rem] sm:gap-[1.5rem] md:gap-[3rem] justify-center">
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
            <div className="flex flex-col items-center sm:flex-row gap-y-4 sm:gap-x-[2rem] justify-center">
              <button
                className={`w-full max-w-[28rem] h-[5.5rem] sm:w-auto sm:h-[6.5rem] md:h-[7.5rem] lg:w-[31.5rem] lg:h-[9.5rem] bg-white text-[#4853E3] rounded-full ${buttonTextFontSize} leading-none font-semibold flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors duration-200`}
              >
                <AppleIcon className="w-[2.2rem] h-[2.2rem] sm:w-[2.8rem] sm:h-[2.8rem] md:w-[3.5rem] md:h-[3.5rem] lg:w-[4.5rem] lg:h-[4.5rem] mr-2 sm:mr-3 fill-current" />
                {t('homePage.hero.buttons.macDownload')}
              </button>
              <button
                className={`w-full max-w-[28rem] h-[5.5rem] sm:w-auto sm:h-[6.5rem] md:h-[7.5rem] lg:w-[31.5rem] lg:h-[9.5rem] bg-white text-[#4853E3] rounded-full ${buttonTextFontSize} leading-none font-semibold flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors duration-200`}
              >
                <PlatformIcon className="w-[2.2rem] h-[2.2rem] sm:w-[2.8rem] sm:h-[2.8rem] md:w-[3.5rem] md:h-[3.5rem] lg:w-[4.5rem] lg:h-[4.5rem] mr-2 sm:mr-3 stroke-current" />
                {t('homePage.hero.buttons.otherPlatforms')}
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center p-4 md:p-8">
            <svg
              width="500pt"
              height="400pt"
              viewBox="0,0,650,400"
              preserveAspectRatio="xMidYMid meet"
              className="app-svg max-w-full h-auto"
              aria-label="VPN App Interface Animation"
            >
              <svg
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

              <svg
                x="-140pt"
                y="-85pt"
                width="500pt"
                height="500pt"
                viewBox="0 0 400 400"
                overflow="visible"
                aria-label="VPN Connection Animation"
              >
                <CentralAnimationContent />
              </svg>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
