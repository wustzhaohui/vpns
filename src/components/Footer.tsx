import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ContactIconItem {
  name: string;
  icon: React.ReactElement;
  href: string;
  label: string;
}

const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    ></path>
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
  const currentDisplayLanguage = getCurrentDisplayLanguage();

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
            <div className="flex flex-col space-y-6">
              <div className="grid grid-cols-3 gap-x-4">
                {/* Software Downloads */}
                <div className="text-center">
                  <h3 className="text-base font-semibold text-brand-text-primary mb-2.5">
                    {t('footer.softwareDownloads.title')}
                  </h3>
                  <ul className="space-y-2">
                    {softwareDownloads.map((link) => (
                      <li key={`mobile-${link.nameKey}`}>
                        <Link
                          to={link.href}
                          className="text-xs text-gray-600 hover:text-brand-purple transition-colors duration-200"
                        >
                          {t(link.nameKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Related Resources */}
                <div className="text-center">
                  <h3 className="text-base font-semibold text-brand-text-primary mb-2.5">
                    {t('footer.relatedResources.title')}
                  </h3>
                  <ul className="space-y-2">
                    {relatedResources.map((link) => (
                      <li key={`mobile-${link.nameKey}`}>
                        <Link
                          to={link.href}
                          className="text-xs text-gray-600 hover:text-brand-purple transition-colors duration-200"
                        >
                          {t(link.nameKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* User Agreements */}
                <div className="text-center">
                  <h3 className="text-base font-semibold text-brand-text-primary mb-2.5">
                    {t('footer.userAgreements.title')}
                  </h3>
                  <ul className="space-y-2">
                    {userAgreements.map((link) => (
                      <li key={`mobile-${link.nameKey}`}>
                        <Link
                          to={link.href}
                          className="text-xs text-gray-600 hover:text-brand-purple transition-colors duration-200"
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
                    className="text-sm text-gray-700 hover:text-brand-purple transition-colors duration-200 flex items-center"
                    onClick={toggleLanguageDropdown}
                    aria-haspopup="true"
                    aria-expanded={isLanguageDropdownOpen}
                    aria-label={t('header.languageSwitcher.changeLanguage')}
                  >
                    <GlobeIcon className="w-5 h-5 mr-1.5" />
                    {currentDisplayLanguage}
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
                      <button
                        onClick={() => selectLanguage('zh')}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          i18n.language.startsWith('zh') &&
                          !i18n.language.startsWith('zh-Hant')
                            ? 'font-semibold text-brand-purple'
                            : 'text-gray-700'
                        } hover:bg-gray-100 hover:text-brand-purple`}
                        role="menuitem"
                      >
                        简体中文
                      </button>
                      <button
                        onClick={() => selectLanguage('en')}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          i18n.language.startsWith('en')
                            ? 'font-semibold text-brand-purple'
                            : 'text-gray-700'
                        } hover:bg-gray-100 hover:text-brand-purple`}
                        role="menuitem"
                      >
                        English
                      </button>
                      <button
                        onClick={() => selectLanguage('zh-Hant')}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          i18n.language.startsWith('zh-Hant')
                            ? 'font-semibold text-brand-purple'
                            : 'text-gray-700'
                        } hover:bg-gray-100 hover:text-brand-purple`}
                        role="menuitem"
                      >
                        繁體中文
                      </button>
                      <button
                        onClick={() => selectLanguage('ru')}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          i18n.language.startsWith('ru')
                            ? 'font-semibold text-brand-purple'
                            : 'text-gray-700'
                        } hover:bg-gray-100 hover:text-brand-purple`}
                        role="menuitem"
                      >
                        Русский
                      </button>
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
                    <GlobeIcon className="w-5 h-5 mr-1.5" />
                    {currentDisplayLanguage}
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
                      <button
                        onClick={() => selectLanguage('zh')}
                        className={`block w-full text-left px-4 py-2 ${desktopFooterLinkFontSize} ${
                          i18n.language.startsWith('zh') &&
                          !i18n.language.startsWith('zh-Hant')
                            ? 'font-semibold text-brand-purple'
                            : 'text-gray-700'
                        } hover:bg-gray-100 hover:text-brand-purple`}
                        role="menuitem"
                      >
                        简体中文
                      </button>
                      <button
                        onClick={() => selectLanguage('en')}
                        className={`block w-full text-left px-4 py-2 ${desktopFooterLinkFontSize} ${
                          i18n.language.startsWith('en')
                            ? 'font-semibold text-brand-purple'
                            : 'text-gray-700'
                        } hover:bg-gray-100 hover:text-brand-purple`}
                        role="menuitem"
                      >
                        English
                      </button>
                      <button
                        onClick={() => selectLanguage('zh-Hant')}
                        className={`block w-full text-left px-4 py-2 ${desktopFooterLinkFontSize} ${
                          i18n.language.startsWith('zh-Hant')
                            ? 'font-semibold text-brand-purple'
                            : 'text-gray-700'
                        } hover:bg-gray-100 hover:text-brand-purple`}
                        role="menuitem"
                      >
                        繁體中文
                      </button>
                      <button
                        onClick={() => selectLanguage('ru')}
                        className={`block w-full text-left px-4 py-2 ${desktopFooterLinkFontSize} ${
                          i18n.language.startsWith('ru')
                            ? 'font-semibold text-brand-purple'
                            : 'text-gray-700'
                        } hover:bg-gray-100 hover:text-brand-purple`}
                        role="menuitem"
                      >
                        Русский
                      </button>
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
