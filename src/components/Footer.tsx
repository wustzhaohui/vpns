

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ContactIconItem {
  name: string;
  icon: React.ReactElement;
  href: string;
  label: string;
}

// Updated New Globe Icon
const NewGlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M714.55 251.05c-4.418-7.972-18.996-23.674-27.954-26.65-11.958-1.842-4.796 8.826-4.796 13.4-3.086 2.314-7.882 4.908-10.204 8-1.398 1.2 3.408 12.206 12.674 8.67s3.928 3.598 10.328 17.73 19.214 14.414 24.98 10.134C726.888 276.91 718.572 258.31 714.55 251.05z" fill="currentColor"></path>
    <path d="M751.6 341.2c-0.002 0.012-0.008 0.022-0.01 0.034C751.59 341.258 751.594 341.258 751.6 341.2z" fill="currentColor"></path>
    <path d="M869.2 394.2C870 394.2 865.6 393.4 869.2 394.2L869.2 394.2z" fill="currentColor"></path>
    <path d="M512 64C264.6 64 64 264.6 64 512c0 247.402 200.6 448 448 448 247.402 0 448-200.598 448-448C960 264.6 759.402 64 512 64zM346.798 858.848c-11.03-6.266-18.748-15.12-21.922-31.858-7.894-41.616-0.606-64.134 35.924-88.49 17.208-11.472 20.044-25.344 33.8-39.1 3.37-4.28 12.422-20.748 18.4-21.6 7.274-1.558 27.418-5.054 31.4-13 7.58-10.292 24.254-54.796 31.6-59.204 11.994-7.85 28.838-31.92 16.6-46.2-14.042-17.286-33.598-17.532-51.8-26.602-16.03-8.016-23.148-44.562-35.4-57.202-23.824-24.272-59.998-38.398-90-53.4-16.232-6.5-14.688-8.512-27.4 4.2-16.324 16.324-40.186-4.134-42.6-21-0.18-5.604-6.592-36.432-2.8-38.8 35.912-22.45-16.656-17.28-21-27.6-10.71-29.986 26.016-53.72 50.8-56.2 27.77-3.476 33.568 43.79 44.2 39.8 5.112-2.552 5.132-24.788 5.8-29.6 2.534-16.058 7.176-18.546 22.8-24.35 18.196-6.758 32.126-15.234 51.4-18.45 22.012-6.39 40.634-3.066 57.6-17.2 7.776-5.83 13.408 3.16 20.8 4.8 15.998 3.198 19.4-22.2 19.4-31.8-0.068-9.33 2.53-17.26-9.4-27.2-15.612-12.138-38.058-1.738-50.6 10.8-15.148 14.07-32.714 13.1-27.6-11.2 1.268-8.866 20.418-19.174 28-24 7.4-4.444 11.808 5.044 20.8 2.8 13.158-2.926 18.068 9.47 33.6 9.6 6.466-1.462 29.592-13.762 17.228-38.732C508.286 128.042 510.14 128 512 128c3.71 0 7.414 0.068 11.11 0.172 5.61 17.762-11.93 32.886-3.11 55.228 17.58 42.95 31.984 6.028 49.4-14 5.698-5.698 9.266-4.422 18.6-6.2 5.792-0.966 14.11-18.54 16.786-23.964 40.116 9.912 78.242 26.254 113.134 48.51-14.894 1.584-18.696-2.792-18.468 14.754 0.084 6.634 0.594 26.638 10.548 28.3 16.554 1.95 13.562 13.664 29.102 15.7 14.886 1.952 5.632 15.106 11.702 28.1 6.786 20.454-39.612 26.604-48.604 29.6-27.28 9.108 12.68 48.82 30.4 44.6 5.634-1.408 24.43-3.804 25.734-10.134-0.022-0.646-3.672-22.024-1.734-24.466 3.066-3.868 10.246-5.892 21.552 0.51 26.748 15.146 40.292 51.4 71.794 58.59 4.292 0.978 11.72-0.3 16.988 4.066 4.462 6.03 15.84 16.832 2.262 16.832-18.034-4.006-27.56 1.718-42.396-9.748-15.466-11.954-25.086-21.782-45.5-22.152-17.58-0.318-33.36-7.638-51.476-4.7-10.1 1.638-20.076 5.622-29.824 8.6-9.234 3.076-11.02 19.53-20.4 21.4-38.934 9.162-30.522 46.338-37.546 75.826-2.702 11.324-12.05 42.006-1.852 52.174 18.24 17.708 39.566 42.07 66.352 45.926 14.412 2.074 45.908-9.152 55.646 5.474 4.124 8.208 14.894-6.06 17.8 1.202 7.326 21.976-8.526 36.372-8.674 57.102-0.22 30.406 18.356 41.14-6.526 68.296-27.284 27.214-8.666 61.576-23.8 94-8.084 16.674-9.616 39.788-21.744 47.554-26.642 17.064-55.4 30.798-85.428 40.768-53.254 17.676-110.31 23.344-166.034 16.912-29.238-3.376-58.082-10.114-85.76-20.13-7.538-2.726-14.56-5.01-20.944-7.408C356.286 863.238 351.518 861.1 346.798 858.848zM263.398 804.658c-0.936-0.794-1.87-1.592-2.798-2.396-6.888-5.984-13.604-12.226-20.12-18.742-6.776-6.776-13.268-13.762-19.468-20.942-0.07-0.082-0.14-0.164-0.21-0.246-1.274-1.476-2.514-2.972-3.764-4.468C113.668 632.942 98.518 450.008 185.2 310.2c12.156 12.156-8.202 36.048 15 52 10.248 7.212 20.042 4.318 18 17.6-1.986 12.898 10.71 12.67 12.6 24 5.684 24.858 38.414 37.284 19.8 65.2-18.236 25.25-33.984 53.458-20.2 85.6 4.508 11.72 15.838 23.716 24.444 32.488 15.626 15.932 14.754 6.376 14.754 26.512-0.312 8.746 10.522 17.794 9.4 23.4-2.002 16.022-5.808 31.86-7.8 47.8-3.584 57.276-0.258 113.324 42.6 156.2-15.938-9.612-31.272-20.498-45.936-32.58C266.366 807.182 264.88 805.922 263.398 804.658z" fill="currentColor"></path>
  </svg>
);


const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const useLargeFont =
    i18n.language.startsWith('zh') || i18n.language.startsWith('zh-Hant');

  const currentYear = new Date().getFullYear();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const softwareDownloads = [
    { nameKey: 'footer.softwareDownloads.pc', href: '#' },
    { nameKey: 'footer.softwareDownloads.android', href: '#' },
    { nameKey: 'footer.softwareDownloads.ios', href: '#' },
    { nameKey: 'footer.softwareDownloads.mac', href: '#' },
  ];

  const relatedResources = [
    { nameKey: 'footer.relatedResources.referral', href: '/referral' },
    { nameKey: 'footer.relatedResources.blog', href: '/blog' },
    { nameKey: 'footer.relatedResources.helpCenter', href: '#' },
  ];

  const userAgreements = [
    { nameKey: 'footer.userAgreements.privacy', href: '#' },
    { nameKey: 'footer.userAgreements.terms', href: '#' },
    { nameKey: 'footer.userAgreements.registration', href: '#' },
  ];

  const contactIcons: ContactIconItem[] = [
    {
      name: 'Email',
      icon: (
        <img
          src="/assets/email.2e4e9014.svg"
          alt="Email us"
          className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
        />
      ),
      href: 'mailto:support@example.com',
      label: 'Email us',
    },
    {
      name: 'X',
      icon: (
        <img
          src="/assets/twitter.9499bc01.svg"
          alt="Follow us on X"
          className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
        />
      ),
      href: '#',
      label: 'Follow us on X',
    },
    {
      name: 'Instagram',
      icon: (
        <img
          src="/assets/ins.6c93479c.svg"
          alt="Follow us on Instagram"
          className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
        />
      ),
      href: '#',
      label: 'Follow us on Instagram',
    },
    {
      name: 'Telegram',
      icon: (
        <img
          src="/assets/telegram.3351da03.svg"
          alt="Join us on Telegram"
          className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
        />
      ),
      href: '#',
      label: 'Join us on Telegram',
    },
  ];

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen((prev) => !prev);
  };

  const selectLanguage = (language: 'zh' | 'en' | 'zh-Hant' | 'ru') => {
    i18n.changeLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

  const getCurrentDisplayLanguage = () => {
    const lang = i18n.language;
    if (lang.startsWith('zh-Hant'))
      return t('header.language.traditionalChinese');
    if (lang.startsWith('ru')) return t('header.language.russian');
    if (lang.startsWith('zh')) return t('header.language.chinese');
    return t('header.language.english');
  };
  
  const currentLanguageKey = (() => {
    const lang = i18n.language;
    if (lang.startsWith('zh-Hant')) return 'zh-Hant';
    if (lang.startsWith('ru')) return 'ru';
    if (lang.startsWith('zh')) return 'zh';
    return 'en';
  })();

  const languages = [
    { code: 'zh', nameKey: 'header.language.chinese' },
    { code: 'en', nameKey: 'header.language.english' },
    { code: 'zh-Hant', nameKey: 'header.language.traditionalChinese' },
    { code: 'ru', nameKey: 'header.language.russian' },
  ] as const;


  const desktopFooterSectionTitleFontSize = useLargeFont
    ? 'text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.7rem]'
    : 'text-[1.7rem] sm:text-[1.9rem] md:text-[2.0rem] lg:text-[2.4rem]';

  const desktopFooterLinkFontSize = useLargeFont
    ? 'text-[1.5rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[1.9rem]'
    : 'text-[1.4rem] sm:text-[1.5rem] md:text-[1.6rem] lg:text-[1.7rem]';

  return (
    <footer className="bg-white text-brand-text-primary">
      <div
        className={`main-container mx-auto px-4 sm:px-6 lg:px-8 max-w-container-wide`}
      >
        <div
          className={`${
            isMobileView ? 'py-6' : 'py-8 sm:py-10 md:py-12 lg:py-16'
          } border-t border-gray-200`}
        >
          {isMobileView ? (
            // Mobile Footer Layout
            <div className="flex flex-col space-y-6 px-4">
              <div className="grid grid-cols-3 gap-x-4 px-6">
                {' '}
                {/* Added px-6 for additional 1.5rem padding */}
                {/* Software Downloads */}
                <div className="text-left">
                  <h3 className="text-[1.6rem] font-semibold text-brand-text-primary mb-2.5">
                    {t('footer.softwareDownloads.title')}
                  </h3>
                  <ul className="space-y-2">
                    {softwareDownloads.map((link) => (
                      <li key={`mobile-${link.nameKey}`}>
                        <Link
                          to={link.href}
                          className="text-[1.2rem] text-brand-text-mobile-footer-links hover:text-brand-purple transition-colors duration-200"
                        >
                          {t(link.nameKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Related Resources */}
                <div className="text-left">
                  <h3 className="text-[1.6rem] font-semibold text-brand-text-primary mb-2.5">
                    {t('footer.relatedResources.title')}
                  </h3>
                  <ul className="space-y-2">
                    {relatedResources.map((link) => (
                      <li key={`mobile-${link.nameKey}`}>
                        <Link
                          to={link.href}
                          className="text-[1.2rem] text-brand-text-mobile-footer-links hover:text-brand-purple transition-colors duration-200"
                        >
                          {t(link.nameKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* User Agreements */}
                <div className="text-left">
                  <h3 className="text-[1.6rem] font-semibold text-brand-text-primary mb-2.5">
                    {t('footer.userAgreements.title')}
                  </h3>
                  <ul className="space-y-2">
                    {userAgreements.map((link) => (
                      <li key={`mobile-${link.nameKey}`}>
                        <Link
                          to={link.href}
                          className="text-[1.2rem] text-brand-text-mobile-footer-links hover:text-brand-purple transition-colors duration-200"
                        >
                          {t(link.nameKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <hr className="border-t border-gray-200" /> {/* Unified color */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  {contactIcons.map((item) => (
                    <a
                      key={`mobile-social-${item.name}`}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="w-8 h-8 flex items-center justify-center rounded-full transition-opacity duration-200 hover:opacity-75"
                    >
                      {React.cloneElement<{ className?: string }>(item.icon, {
                        className: 'w-[2rem] h-[2rem]',
                      })}
                    </a>
                  ))}
                </div>
                <div
                  className="relative"
                  ref={languageDropdownRef}
                >
                  <button
                    className="text-[1.2rem] text-brand-text-mobile-footer-links hover:text-brand-purple transition-colors duration-200 flex items-center"
                    onClick={toggleLanguageDropdown}
                    aria-haspopup="true"
                    aria-expanded={isLanguageDropdownOpen}
                    aria-label={t('header.languageSwitcher.changeLanguage')}
                  >
                    <NewGlobeIcon className="w-5 h-5 mr-1.5" />
                    {getCurrentDisplayLanguage()}
                    <ChevronDownIcon
                      className={`w-4 h-4 ml-1.5 transition-transform duration-200 ${
                        isLanguageDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isLanguageDropdownOpen && (
                    <div
                      className="absolute right-0 bottom-full mb-2 w-max bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10"
                      role="menu"
                    >
                     {languages.map(lang => (
                        <button
                          key={`mobile-lang-${lang.code}`}
                          onClick={() => selectLanguage(lang.code)}
                          className={`block w-full text-left px-4 py-2 text-[1.2rem] ${currentLanguageKey === lang.code ? 'font-semibold text-brand-purple' : 'text-brand-text-mobile-footer-links'} hover:bg-gray-100 hover:text-brand-purple`}
                          role="menuitem"
                        >
                          {t(lang.nameKey)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* Copyright line removed for mobile view */}
            </div>
          ) : (
            // Desktop Footer Layout
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-10 md:gap-8">
              <div className="md:col-span-2 lg:col-span-1">
                <Link
                  to="/"
                  className="flex items-center mb-4 sm:mb-6 hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/assets/footer-logo.png"
                    alt={t('altTexts.footerLogo')}
                    className="h-8 sm:h-9 md:h-10 w-auto"
                  />{' '}
                </Link>
                <h4 className="text-[1.6rem] sm:text-[1.7rem] md:text-[1.9rem] font-semibold text-brand-text-muted mb-2 sm:mb-3">
                  {t('footer.contactUs')}
                </h4>
                <div className="flex space-x-2 mb-4 sm:space-x-3 sm:mb-6">
                  {contactIcons.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-opacity duration-200 hover:opacity-75"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
                <p className="text-[1.4rem] sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.9rem] text-gray-500">
                  {t('footer.copyright', { year: currentYear })}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:contents">
                <div>
                  <h3
                    className={`${desktopFooterSectionTitleFontSize} font-semibold text-brand-text-primary mb-4 sm:mb-5 md:mb-[25px] lg:mb-[30px]`}
                  >
                    {t('footer.softwareDownloads.title')}
                  </h3>
                  <ul className="space-y-3 sm:space-y-4 md:space-y-[1.8rem] lg:space-y-[2rem]">
                    {softwareDownloads.map((link) => (
                      <li key={link.nameKey}>
                        <Link
                          to={link.href}
                          className={`${desktopFooterLinkFontSize} text-gray-600 hover:text-[#747E8B] transition-colors duration-200`}
                        >
                          {t(link.nameKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3
                    className={`${desktopFooterSectionTitleFontSize} font-semibold text-brand-text-primary mb-4 sm:mb-5 md:mb-[25px] lg:mb-[30px]`}
                  >
                    {t('footer.relatedResources.title')}
                  </h3>
                  <ul className="space-y-3 sm:space-y-4 md:space-y-[1.8rem] lg:space-y-[2rem]">
                    {relatedResources.map((link) => (
                      <li key={link.nameKey}>
                        <Link
                          to={link.href}
                          className={`${desktopFooterLinkFontSize} text-gray-600 hover:text-[#747E8B] transition-colors duration-200`}
                        >
                          {t(link.nameKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3
                    className={`${desktopFooterSectionTitleFontSize} font-semibold text-brand-text-primary mb-4 sm:mb-5 md:mb-[25px] lg:mb-[30px]`}
                  >
                    {t('footer.userAgreements.title')}
                  </h3>
                  <ul className="space-y-3 sm:space-y-4 md:space-y-[1.8rem] lg:space-y-[2rem]">
                    {userAgreements.map((link) => (
                      <li key={link.nameKey}>
                        <Link
                          to={link.href}
                          className={`${desktopFooterLinkFontSize} text-gray-600 hover:text-[#747E8B] transition-colors duration-200`}
                        >
                          {t(link.nameKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="relative"
                  ref={languageDropdownRef}
                >
                  <h3
                    className={`${desktopFooterSectionTitleFontSize} font-semibold text-brand-text-primary mb-4 sm:mb-5 md:mb-[25px] lg:mb-[30px]`}
                  >
                    {t('footer.changeLanguage.title')}
                  </h3>
                  <button
                    id="language-button"
                    className={`${desktopFooterLinkFontSize} text-gray-600 hover:text-[#747E8B] transition-colors duration-200 flex items-center`}
                    onClick={toggleLanguageDropdown}
                    aria-haspopup="true"
                    aria-expanded={isLanguageDropdownOpen}
                    aria-label={t('header.languageSwitcher.changeLanguage')}
                  >
                    <NewGlobeIcon className="w-5 h-5 mr-1.5" />
                    {getCurrentDisplayLanguage()}
                    <ChevronDownIcon
                      className={`h-4 w-4 ml-1.5 transition-transform duration-200 ${
                        isLanguageDropdownOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isLanguageDropdownOpen && (
                    <div
                      className="absolute left-0 bottom-full mb-2 w-max bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="language-button"
                    >
                      {languages.map(lang => (
                        <button
                          key={`desktop-lang-${lang.code}`}
                          onClick={() => selectLanguage(lang.code)}
                          className={`block w-full text-left px-4 py-2 ${desktopFooterLinkFontSize} ${currentLanguageKey === lang.code ? 'font-semibold text-brand-purple' : 'text-gray-700'} hover:bg-gray-100 hover:text-brand-purple`}
                          role="menuitem"
                        >
                          {t(lang.nameKey)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;