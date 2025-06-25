

import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

// Removed NewTelegramIconBlueCircle SVG component

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0,2c-2.67,0-8,1.34-8,4v2H20V18C20,15.34,14.67,14,12,14Z" />
  </svg>
);

const ReferralPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const useLargeFont = i18n.language.startsWith('zh') || i18n.language.startsWith('zh-Hant');
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const heroTitleFontSize = useLargeFont
    ? 'text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.4rem]'
    : 'text-[2.6rem] sm:text-[3.2rem] md:text-[4.0rem] lg:text-[4.8rem] xl:text-[5.4rem]';

  const heroDescriptionFontSize = useLargeFont
    ? 'text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem]'
    : 'text-[1.4rem] sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.8rem] xl:text-[2.0rem]';
    
  const heroScanPromptFontSize = useLargeFont
    ? 'text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[3.2rem]'
    : 'text-[1.6rem] sm:text-[2.0rem] md:text-[2.3rem] lg:text-[2.8rem]';

  const infoCardTitleFontSize = useLargeFont
    ? 'text-[1.8rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.8rem]'
    : 'text-[1.7rem] sm:text-[1.9rem] md:text-[2.2rem] lg:text-[2.5rem]';

  const infoCardsData = [
    {
      titleKey: 'referralPage.infoCards.0.title',
      descriptionKey: 'referralPage.infoCards.0.description',
      illustrationSrc: "/assets/pro_icon1.png",
      altKey: 'referralPage.illustrations.referralBonus'
    },
    {
      titleKey: 'referralPage.infoCards.1.title',
      descriptionKey: 'referralPage.infoCards.1.description',
      illustrationSrc: "/assets/pro_icon2.png",
      altKey: 'referralPage.illustrations.weeklyBonus'
    },
    {
      titleKey: 'referralPage.infoCards.2.title',
      descriptionKey: 'referralPage.infoCards.2.description',
      illustrationSrc: "/assets/pro_icon3.png",
      altKey: 'referralPage.illustrations.settlement'
    },
  ];


  return (
    <>
      <section 
        className="relative flex flex-col items-center min-h-screen pt-[80px] md:pt-[100px] text-white overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url(/assets/home_bg_pc.png)' }}
      >
        <div className="main-container mx-auto px-8 sm:px-6 lg:px-8 relative z-10 flex flex-col w-full max-w-container-wide"> {/* Changed px-4 to px-8 here */}
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <div className="text-center md:text-left pt-10 md:pt-0">
              <h1 className={`${heroTitleFontSize} font-bold mb-4 sm:mb-5 md:mb-8 leading-tight`}>
                <Trans i18nKey="referralPage.hero.title">
                  推广赚<span className="text-yellow-400">现金</span>
                </Trans>
              </h1>
              <p className={`${heroDescriptionFontSize} leading-relaxed text-purple-200/90 mb-6 sm:mb-7 md:mb-10 max-w-auto mx-auto md:mx-0`}>
                {t('referralPage.hero.description')}
              </p>

              {/* Desktop: Scan Prompt and QR Code */}
              {!isMobileView && (
                <>
                  <h2 className={`${heroScanPromptFontSize} font-semibold mb-4 sm:mb-5 md:mb-8`}>
                    {t('referralPage.hero.scanPrompt')}
                  </h2>
                  <div className="flex flex-col items-center md:items-start max-w-md mx-auto md:mx-0">
                    <div className="bg-white p-3 rounded-xl shadow-2xl mb-4 w-[24rem] h-[30rem] sm:w-[28rem] sm:h-[35rem] md:w-[34rem] md:h-[43rem] flex items-center justify-center">
                      <img
                        src="/assets/pro_telegram.67630c52.png"
                        alt={t('altTexts.telegramQrCode')}
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Mobile: Image and Telegram Button */}
              {isMobileView && (
                <div className="flex flex-col items-center mt-8">
                  <img
                    src="/assets/pro_index.gif"
                    alt={t('altTexts.referralAnimation')}
                    className="max-w-xs w-full h-auto mb-8" // Adjusted size and margin
                  />
                  <a
                    href="#" // Placeholder link, replace with actual Telegram link
                    className="flex w-full items-center justify-center px-8 py-4 bg-[#3984E8] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#3375D1] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-brand-purple-dark"
                    aria-label={t('referralPage.telegramButton')}
                  >
                    <img 
                      src="/assets/icon-telegram.png" 
                      alt={t('altTexts.telegramIcon')} 
                      className="w-6 h-6 mr-3"
                    />
                    {t('referralPage.telegramButton')}
                  </a>
                </div>
              )}
            </div>

            {/* Desktop: Right side animation */}
            <div className="hidden md:flex flex-col items-center justify-center relative min-h-[500px] md:min-h-[600px]">
              <div className="w-full h-full backdrop-blur-sm flex items-center justify-center text-center p-8 relative">
                <img
                  src="/assets/pro_index.gif"
                  alt={t('altTexts.referralAnimation')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 max-w-container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {infoCardsData.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center h-full"
              >
                <div className="md:w-4/5 text-center md:text-left mb-6 md:mb-0 md:pr-6">
                  <h3 className={`${infoCardTitleFontSize} font-bold text-brand-text-primary mb-4`}>
                    {t(card.titleKey)}
                  </h3>
                  <p className="text-[1.4rem] sm:text-[1.5rem] md:text-[1.6rem] lg:text-[1.8rem] leading-relaxed text-gray-600">
                    {t(card.descriptionKey)}
                  </p>
                </div>
                <div className="md:w-2/5  flex items-center justify-center md:h-full">
                   <img
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-auto md:h-[80%] object-contain mx-auto md:mx-0 md:ml-auto md:mr-auto rounded-md"
                      src={card.illustrationSrc}
                      alt={t(card.altKey)}
                    />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReferralPage;