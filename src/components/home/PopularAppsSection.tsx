import React from 'react';
import { useTranslation } from 'react-i18next';

const peripheralIconsData = [
  { href: "/assets/speed_app_1.54d47b5a.png", x: "220", y: "330", width: "140", height: "140", alt: "App Icon 1" },
  { href: "/assets/speed_app_2.5dd0814b.png", x: "160", y: "130", width: "90", height: "90", alt: "App Icon 2" },
  { href: "/assets/speed_app_3.6b50eb2d.png", x: "270", y: "210", width: "100", height: "100", alt: "App Icon 3" },
  { href: "/assets/speed_app_4.5829ddd5.png", x: "750", y: "170", width: "90", height: "90", alt: "App Icon 4" },
  { href: "/assets/speed_app_5.217178c9.png", x: "630", y: "190", width: "110", height: "110", alt: "App Icon 5" },
  { href: "/assets/speed_app_6.fdc25fa8.png", x: "820", y: "210", width: "180", height: "180", alt: "App Icon 6" },
  { href: "/assets/speed_app_7.60d1e332.png", x: "550", y: "80", width: "120", height: "120", alt: "App Icon 7" },
  { href: "/assets/speed_app_8.d8a4522d.png", x: "100", y: "270", width: "120", height: "120", alt: "App Icon 8" },
  { href: "/assets/speed_app_9.e32c538d.png", x: "580", y: "330", width: "110", height: "110", alt: "App Icon 9" },
  { href: "/assets/speed_app_10.9a74fb98.png", x: "380", y: "130", width: "80", height: "80", alt: "App Icon 10" },
  { href: "/assets/speed_app_11.36fa8cfe.png", x: "180", y: "210", width: "90", height: "90", alt: "App Icon 11" },
  { href: "/assets/speed_app_12.736120cb.png", x: "720", y: "330", width: "100", height: "100", alt: "App Icon 12" },
];

const PopularAppsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const useLargeFont = i18n.language.startsWith('zh') || i18n.language.startsWith('zh-Hant');

  const titleFontSize = useLargeFont
    ? 'text-[2.8rem] sm:text-[3.5rem] md:text-[4.2rem] lg:text-[5rem] xl:text-[6.4rem]'
    : 'text-[2.6rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.5rem] xl:text-[5.0rem]';

  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFF]">
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-container-wide">
        <h2 className={`${titleFontSize} font-bold mb-4 text-brand-text-primary`}>
          {t('homePage.popularApps.title')}
        </h2>
        <div className="mb-12 flex justify-center mx-auto">
          <svg
            viewBox="0 0 1000 500"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-auto iehide showSvg"
            aria-labelledby="popularAppsTitle"
            role="img"
          >
            <title id="popularAppsTitle">{t('homePage.popularApps.title')}</title>
            <g 
              data-v-0f095611="" 
              className="blingcircle animate-svgIconPulse"
              style={{ animationDelay: `50ms` }}
            >
              <circle data-v-0f095611="" cx="500" cy="250" r="80" strokeWidth="2" stroke="rgba(100,128,253,0.15)" fill="none"></circle>
              <circle data-v-0f095611="" cx="500" cy="250" r="130" strokeWidth="2" stroke="rgba(100,128,253,0.1)" fill="none"></circle>
              <circle data-v-0f095611="" cx="500" cy="250" r="180" strokeWidth="2" stroke="rgba(100,128,253,0.05)" fill="none"></circle>
            </g>
            
            <g data-v-0f095611="" className="bling blingcircle">
              {peripheralIconsData.map((icon, index) => (
                <image 
                  key={icon.href}
                  data-v-0f095611="" 
                  xlinkHref={icon.href} 
                  x={icon.x} 
                  y={icon.y} 
                  width={icon.width} 
                  height={icon.height} 
                  className="svgimage animate-svgIconPulse" 
                  style={{ animationDelay: `${index * 150}ms` }} 
                  aria-label={icon.alt} // Alt texts for these icons could be generic or specific if important
                />
              ))}
            </g>

            <g data-v-0f095611="" className="bling blingcircle">
              <defs data-v-0f095611="">
                <linearGradient data-v-0f095611="" id="redbot" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop data-v-0f095611="" offset="0%" style={{ stopColor: 'rgb(234, 67, 53)' }}></stop>
                  <stop data-v-0f095611="" offset="100%" style={{ stopColor: 'rgb(234, 67, 53)' }}></stop>
                </linearGradient>
                <linearGradient data-v-0f095611="" id="bluebot" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop data-v-0f095611="" offset="0%" style={{ stopColor: 'rgb(0, 102, 217)', stopOpacity: 1 }}></stop>
                  <stop data-v-0f095611="" offset="100%" style={{ stopColor: 'rgb(0, 102, 217)', stopOpacity: 1 }}></stop>
                </linearGradient>
                <linearGradient data-v-0f095611="" id="yellowbot" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop data-v-0f095611="" offset="0%" style={{ stopColor: 'rgb(255, 170, 69)', stopOpacity: 1 }}></stop>
                  <stop data-v-0f095611="" offset="100%" style={{ stopColor: 'rgb(255, 170, 69)', stopOpacity: 1 }}></stop>
                </linearGradient>
              </defs>
              <circle data-v-0f095611="" cx="170" cy="230" r="4" fill="url(#bluebot)" className="elliptop" />
              <circle data-v-0f095611="" cx="370" cy="310" r="8" fill="url(#yellowbot)" className="elliptop" />
              <circle data-v-0f095611="" cx="600" cy="190" r="2" fill="url(#redbot)" className="elliptop" />
              <circle data-v-0f095611="" cx="720" cy="330" r="4" fill="url(#bluebot)" className="elliptop" />
            </g>
            
            <image 
                data-v-0f095611="" 
                xlinkHref="/assets/appAnimation.a744ae10.png" 
                x="410" 
                y="160" 
                width="180" 
                height="180" 
                className="hiddensvg enimgsvg svgimage animate-svgIconPulse" 
                aria-label={t('altTexts.logo')} // Or a more specific alt text
                style={{ animationDelay: `${peripheralIconsData.length * 150}ms` }} 
            >
            </image>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default PopularAppsSection;