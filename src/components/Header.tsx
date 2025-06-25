import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Icon for Login Button
const PersonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const NewMenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M128 192l768 0 0 128-768 0 0-128Z"
      fill="currentColor"
    ></path>
    <path
      d="M128 448l768 0 0 128-768 0 0-128Z"
      fill="currentColor"
    ></path>
    <path
      d="M128 704l768 0 0 128-768 0 0-128Z"
      fill="currentColor"
    ></path>
  </svg>
);

// New Globe Icon for Login Page Language Switcher
const NewGlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M714.55 251.05c-4.418-7.972-18.996-23.674-27.954-26.65-11.958-1.842-4.796 8.826-4.796 13.4-3.086 2.314-7.882 4.908-10.204 8-1.398 1.2 3.408 12.206 12.674 8.67s3.928 3.598 10.328 17.73 19.214 14.414 24.98 10.134C726.888 276.91 718.572 258.31 714.55 251.05z"
      fill="currentColor"
    ></path>
    <path
      d="M751.6 341.2c-0.002 0.012-0.008 0.022-0.01 0.034C751.59 341.258 751.594 341.258 751.6 341.2z"
      fill="currentColor"
    ></path>
    <path
      d="M869.2 394.2C870 394.2 865.6 393.4 869.2 394.2L869.2 394.2z"
      fill="currentColor"
    ></path>
    <path
      d="M512 64C264.6 64 64 264.6 64 512c0 247.402 200.6 448 448 448 247.402 0 448-200.598 448-448C960 264.6 759.402 64 512 64zM346.798 858.848c-11.03-6.266-18.748-15.12-21.922-31.858-7.894-41.616-0.606-64.134 35.924-88.49 17.208-11.472 20.044-25.344 33.8-39.1 3.37-4.28 12.422-20.748 18.4-21.6 7.274-1.558 27.418-5.054 31.4-13 7.58-10.292 24.254-54.796 31.6-59.204 11.994-7.85 28.838-31.92 16.6-46.2-14.042-17.286-33.598-17.532-51.8-26.602-16.03-8.016-23.148-44.562-35.4-57.202-23.824-24.272-59.998-38.398-90-53.4-16.232-6.5-14.688-8.512-27.4 4.2-16.324 16.324-40.186-4.134-42.6-21-0.18-5.604-6.592-36.432-2.8-38.8 35.912-22.45-16.656-17.28-21-27.6-10.71-29.986 26.016-53.72 50.8-56.2 27.77-3.476 33.568 43.79 44.2 39.8 5.112-2.552 5.132-24.788 5.8-29.6 2.534-16.058 7.176-18.546 22.8-24.35 18.196-6.758 32.126-15.234 51.4-18.45 22.012-6.39 40.634-3.066 57.6-17.2 7.776-5.83 13.408 3.16 20.8 4.8 15.998 3.198 19.4-22.2 19.4-31.8-0.068-9.33 2.53-17.26-9.4-27.2-15.612-12.138-38.058-1.738-50.6 10.8-15.148 14.07-32.714 13.1-27.6-11.2 1.268-8.866 20.418-19.174 28-24 7.4-4.444 11.808 5.044 20.8 2.8 13.158-2.926 18.068 9.47 33.6 9.6 6.466-1.462 29.592-13.762 17.228-38.732C508.286 128.042 510.14 128 512 128c3.71 0 7.414 0.068 11.11 0.172 5.61 17.762-11.93 32.886-3.11 55.228 17.58 42.95 31.984 6.028 49.4-14 5.698-5.698 9.266-4.422 18.6-6.2 5.792-0.966 14.11-18.54 16.786-23.964 40.116 9.912 78.242 26.254 113.134 48.51-14.894 1.584-18.696-2.792-18.468 14.754 0.084 6.634 0.594 26.638 10.548 28.3 16.554 1.95 13.562 13.664 29.102 15.7 14.886 1.952 5.632 15.106 11.702 28.1 6.786 20.454-39.612 26.604-48.604 29.6-27.28 9.108 12.68 48.82 30.4 44.6 5.634-1.408 24.43-3.804 25.734-10.134-0.022-0.646-3.672-22.024-1.734-24.466 3.066-3.868 10.246-5.892 21.552 0.51 26.748 15.146 40.292 51.4 71.794 58.59 4.292 0.978 11.72-0.3 16.988 4.066 4.462 6.03 15.84 16.832 2.262 16.832-18.034-4.006-27.56 1.718-42.396-9.748-15.466-11.954-25.086-21.782-45.5-22.152-17.58-0.318-33.36-7.638-51.476-4.7-10.1 1.638-20.076 5.622-29.824 8.6-9.234 3.076-11.02 19.53-20.4 21.4-38.934 9.162-30.522 46.338-37.546 75.826-2.702 11.324-12.05 42.006-1.852 52.174 18.24 17.708 39.566 42.07 66.352 45.926 14.412 2.074 45.908-9.152 55.646 5.474 4.124 8.208 14.894-6.06 17.8 1.202 7.326 21.976-8.526 36.372-8.674 57.102-0.22 30.406 18.356 41.14-6.526 68.296-27.284 27.214-8.666 61.576-23.8 94-8.084 16.674-9.616 39.788-21.744 47.554-26.642 17.064-55.4 30.798-85.428 40.768-53.254 17.676-110.31 23.344-166.034 16.912-29.238-3.376-58.082-10.114-85.76-20.13-7.538-2.726-14.56-5.01-20.944-7.408C356.286 863.238 351.518 861.1 346.798 858.848zM263.398 804.658c-0.936-0.794-1.87-1.592-2.798-2.396-6.888-5.984-13.604-12.226-20.12-18.742-6.776-6.776-13.268-13.762-19.468-20.942-0.07-0.082-0.14-0.164-0.21-0.246-1.274-1.476-2.514-2.972-3.764-4.468C113.668 632.942 98.518 450.008 185.2 310.2c12.156 12.156-8.202 36.048 15 52 10.248 7.212 20.042 4.318 18 17.6-1.986 12.898 10.71 12.67 12.6 24 5.684 24.858 38.414 37.284 19.8 65.2-18.236 25.25-33.984 53.458-20.2 85.6 4.508 11.72 15.838 23.716 24.444 32.488 15.626 15.932 14.754 6.376 14.754 26.512-0.312 8.746 10.522 17.794 9.4 23.4-2.002 16.022-5.808 31.86-7.8 47.8-3.584 57.276-0.258 113.324 42.6 156.2-15.938-9.612-31.272-20.498-45.936-32.58C266.366 807.182 264.88 805.922 263.398 804.658z"
      fill="currentColor"
    ></path>
  </svg>
);

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerIsNudgingUp, setHeaderIsNudgingUp] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isQrPopoverOpen, setIsQrPopoverOpen] = useState(false);
  const [isHeaderLanguageDropdownOpen, setIsHeaderLanguageDropdownOpen] =
    useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  const headerLanguageDropdownRef = useRef<HTMLDivElement>(null);
  const qrButtonRef = useRef<HTMLButtonElement>(null);
  const qrPopoverDesktopRef = useRef<HTMLDivElement>(null);
  const isBehaviorActiveRef = useRef(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastYRef = useRef(0);

  const animationDuration = 300;

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      if (isMobileView !== mobile) {
        setIsMobileView(mobile);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileView]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerLanguageDropdownRef.current &&
        !headerLanguageDropdownRef.current.contains(event.target as Node)
      ) {
        setIsHeaderLanguageDropdownOpen(false);
      }
    };
    if (isHeaderLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isHeaderLanguageDropdownOpen]);

  const toggleHeaderLanguageDropdown = () =>
    setIsHeaderLanguageDropdownOpen((prev) => !prev);
  const selectHeaderLanguage = (language: 'zh' | 'en' | 'zh-Hant' | 'ru') => {
    i18n.changeLanguage(language);
    setIsHeaderLanguageDropdownOpen(false);
  };

  const isOnHomePage = location.pathname === '/';
  const isOnReferralPage = location.pathname === '/referral';
  const isOnLoginPage = location.pathname === '/login';
  const isOnBlogPage = location.pathname === '/blog';
  // Removed isOnHelpCenterPage as HelpCenterPage now has its own header

  useEffect(() => {
    const initialY = window.scrollY;
    setIsAtTop(initialY <= 10);
    lastYRef.current = initialY;
    isBehaviorActiveRef.current = initialY > 10;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastYRef.current;
      setIsAtTop(currentY <= 10);

      const applyHeroHeaderScrollBehavior =
        isOnHomePage || isOnReferralPage || (isMobileView && isOnLoginPage);

      if (isOnBlogPage || (isOnLoginPage && !isMobileView)) {
        setHeaderIsNudgingUp(false);
        isBehaviorActiveRef.current = false;
        if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
        lastYRef.current = currentY;
        return;
      }

      if (applyHeroHeaderScrollBehavior && isMobileView && isOnLoginPage) {
        setHeaderIsNudgingUp(false);
        isBehaviorActiveRef.current = false;
        if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
        lastYRef.current = currentY;
        return;
      }

      if (currentY <= 10) {
        if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
        setHeaderIsNudgingUp(false);
        isBehaviorActiveRef.current = false;
      } else {
        if (scrollingDown) {
          if (!isBehaviorActiveRef.current && currentY > 100) {
            isBehaviorActiveRef.current = true;
            setHeaderIsNudgingUp(true);
            if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
            pauseTimerRef.current = setTimeout(() => {
              setHeaderIsNudgingUp(false);
            }, animationDuration);
          }
        }
      }
      lastYRef.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, [
    isOnLoginPage,
    isOnBlogPage,
    animationDuration,
    isMobileView,
    isOnHomePage,
    isOnReferralPage,
  ]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const mainNavLinks = [
    { to: '/', labelKey: 'header.home', end: true },
    { to: '/referral', labelKey: 'header.referral' },
    { to: '/blog', labelKey: 'header.blog' },
    { to: '/help', labelKey: 'header.helpCenter' },
  ];

  const useLightTextAndLogo =
    isOnHomePage || isOnReferralPage || (isMobileView && isOnLoginPage);
  const logoSrc = useLightTextAndLogo
    ? '/assets/logo.png'
    : '/assets/footer-logo.png';

  let headerContainerClasses = `sticky top-0 z-50 h-[60px] md:h-[100px] transition-all duration-[${animationDuration}ms] ease-in-out`;
  let currentHeaderStyle: React.CSSProperties = {};

  if (isAtTop) {
    headerContainerClasses += ' shadow-none';
  } else {
    headerContainerClasses += ' shadow-lg';
  }

  if (isMobileView) {
    if (isOnHomePage || isOnReferralPage) {
      if (isAtTop) {
        currentHeaderStyle.background = 'transparent';
        headerContainerClasses =
          headerContainerClasses
            .replace(/\bshadow-lg\b|\bshadow-none\b/g, '')
            .trim() + ' shadow-none';
      } else {
        currentHeaderStyle.background =
          'linear-gradient(284deg, #cc5ce8 10%, #3150ed)';
        headerContainerClasses =
          headerContainerClasses
            .replace(/\bshadow-lg\b|\bshadow-none\b/g, '')
            .trim() + ' shadow-[0_0.02415rem_0.24155rem_rgba(0,0,0,0.4)]';
      }
    } else if (isOnLoginPage) {
      currentHeaderStyle.background =
        'linear-gradient(315deg, #eb4eb1, #9257f9 50.46%, #3150ed)';
    } else {
      currentHeaderStyle.background = 'white';
    }
  } else {
    // Desktop View
    if (isOnReferralPage) {
      if (isAtTop) {
        currentHeaderStyle.background = 'transparent';
        headerContainerClasses =
          headerContainerClasses
            .replace(/\bshadow-lg\b|\bshadow-none\b/g, '')
            .trim() + ' shadow-none';
      } else {
        currentHeaderStyle.backgroundImage = 'url(/assets/bg-get-money.png)';
        currentHeaderStyle.backgroundPosition = 'top center';
        currentHeaderStyle.backgroundRepeat = 'no-repeat';
        currentHeaderStyle.backgroundSize = 'cover';
      }
    } else if (isOnHomePage) {
      currentHeaderStyle.backgroundImage = 'url(/assets/home_bg_pc.png)';
      currentHeaderStyle.backgroundPosition = 'top center';
      currentHeaderStyle.backgroundRepeat = 'no-repeat';
      currentHeaderStyle.backgroundSize = 'cover';
      headerContainerClasses =
        headerContainerClasses
          .replace(/\bshadow-lg\b|\bshadow-none\b/g, '')
          .trim() + ' shadow-none';
    } else {
      currentHeaderStyle.background = 'white';
    }
  }

  headerContainerClasses += ` ${
    headerIsNudgingUp ? '-translate-y-full' : 'translate-y-0'
  }`;

  return (
    <>
      <header
        className={headerContainerClasses}
        style={currentHeaderStyle}
        aria-label="Main Navigation"
      >
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full max-w-container-wide">
          <Link
            to="/"
            className="flex-shrink-0 flex items-center"
          >
            <img
              className="w-[9.58rem] h-[3.2rem] md:w-[22rem] md:h-[5rem] object-contain"
              src={logoSrc}
              alt={t('altTexts.logo')}
            />
          </Link>

          {!isOnLoginPage && (
            <nav className="hidden md:flex items-center space-x-12 lg:space-x-16 xl:space-x-20 justify-end">
              {mainNavLinks.map((link) => (
                <NavLink
                  key={link.labelKey}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem] font-medium transition-colors duration-150 ${
                      isActive
                        ? useLightTextAndLogo
                          ? 'text-white'
                          : 'text-brand-purple'
                        : useLightTextAndLogo
                        ? 'text-gray-200 hover:text-white'
                        : 'text-brand-text-muted hover:text-brand-purple'
                    }`
                  }
                >
                  {t(link.labelKey)}
                </NavLink>
              ))}
              <div
                className="relative"
                onMouseEnter={() => setIsQrPopoverOpen(true)}
                onMouseLeave={() => setIsQrPopoverOpen(false)}
              >
                <button
                  ref={qrButtonRef}
                  className={`text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem] font-medium transition-colors duration-150 cursor-default ${
                    isQrPopoverOpen && window.innerWidth >= 768
                      ? useLightTextAndLogo
                        ? 'text-white'
                        : 'text-brand-purple'
                      : useLightTextAndLogo
                      ? 'text-gray-200 hover:text-white'
                      : 'text-brand-text-muted hover:text-brand-purple'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={isQrPopoverOpen && window.innerWidth >= 768}
                >
                  {t('header.scanToDownload')}
                </button>
                {isQrPopoverOpen && window.innerWidth >= 768 && (
                  <div
                    ref={qrPopoverDesktopRef}
                    className="desktop-qr-popover-with-caret absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[220px] z-20"
                    role="tooltip"
                  >
                    <div className="rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                      <div className="bg-white p-4 flex flex-col items-center pt-6">
                        <img
                          src="/assets/download-app.png"
                          alt={t('altTexts.scanToDownloadQR')}
                          className="w-full h-auto object-contain my-2"
                        />
                        <p className="text-center text-brand-text-primary mt-2 text-[2rem]">
                          {t('header.qrPopover.scanPrompt')}
                        </p>
                        <p className="text-center text-brand-text-primary mt-1 text-[2rem] font-medium">
                          {t('header.qrPopover.downloadPrompt')}
                        </p>
                        <hr className="w-full border-t border-dashed border-gray-300 my-2" />
                        <p className="text-center text-gray-500 text-[1.5rem] italic">
                          {t('header.qrPopover.recommendBrowser')}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center">
                <Link
                  to="/login"
                  className={`flex items-center justify-center text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem] font-medium px-8 h-[5rem] rounded-full transition-all duration-300 transform hover:scale-105
                    ${
                      useLightTextAndLogo && !isOnLoginPage
                        ? 'bg-transparent border border-white text-white shadow-none hover:bg-white/10'
                        : 'text-white shadow-lg hover:shadow-xl bg-gradient-to-r from-header-gradient-start via-header-gradient-middle to-header-gradient-end hover:opacity-90'
                    }`}
                >
                  <PersonIcon className="w-[25px] h-[25px] mr-2 text-white" />
                  {t('header.loginAccount')}
                </Link>
              </div>
            </nav>
          )}

          {isOnLoginPage && !isMobileView && (
            <div
              className="hidden md:flex items-center"
              ref={headerLanguageDropdownRef}
            >
              <button
                onClick={toggleHeaderLanguageDropdown}
                className="text-brand-text-muted hover:text-brand-purple transition-colors flex items-center text-sm md:text-base"
                aria-haspopup="true"
                aria-expanded={isHeaderLanguageDropdownOpen}
                aria-label={t('header.languageSwitcher.changeLanguage')}
              >
                <NewGlobeIcon className="w-5 h-5 mr-1 md:w-6 md:h-6" />
                {i18n.language.startsWith('zh-Hant')
                  ? '繁體中文'
                  : i18n.language.startsWith('ru')
                  ? 'Русский'
                  : i18n.language.startsWith('zh')
                  ? '简体中文'
                  : 'English'}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    isHeaderLanguageDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {isHeaderLanguageDropdownOpen && (
                <div className="absolute right-4 top-16 mt-2 w-48 bg-white rounded-md shadow-xl z-20 py-1">
                  <button
                    onClick={() => selectHeaderLanguage('zh')}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      i18n.language.startsWith('zh') &&
                      !i18n.language.startsWith('zh-Hant')
                        ? 'font-semibold text-brand-purple'
                        : 'text-gray-700'
                    } hover:bg-gray-100`}
                  >
                    简体中文
                  </button>
                  <button
                    onClick={() => selectHeaderLanguage('en')}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      i18n.language.startsWith('en')
                        ? 'font-semibold text-brand-purple'
                        : 'text-gray-700'
                    } hover:bg-gray-100`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => selectHeaderLanguage('zh-Hant')}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      i18n.language.startsWith('zh-Hant')
                        ? 'font-semibold text-brand-purple'
                        : 'text-gray-700'
                    } hover:bg-gray-100`}
                  >
                    繁體中文
                  </button>
                  <button
                    onClick={() => selectHeaderLanguage('ru')}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      i18n.language.startsWith('ru')
                        ? 'font-semibold text-brand-purple'
                        : 'text-gray-700'
                    } hover:bg-gray-100`}
                  >
                    Русский
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="md:hidden flex items-center">
            {isOnLoginPage ? (
              <div ref={headerLanguageDropdownRef}>
                <button
                  onClick={toggleHeaderLanguageDropdown}
                  className={`flex items-center text-sm transition-colors
                    ${
                      useLightTextAndLogo
                        ? 'text-white hover:text-gray-300'
                        : 'text-brand-text-muted hover:text-brand-purple'
                    }`}
                  aria-haspopup="true"
                  aria-expanded={isHeaderLanguageDropdownOpen}
                  aria-label={t('header.languageSwitcher.changeLanguage')}
                >
                  <NewGlobeIcon className="w-5 h-5 mr-1" />
                  {i18n.language.startsWith('zh-Hant')
                    ? '繁體中文'
                    : i18n.language.startsWith('ru')
                    ? 'Русский'
                    : i18n.language.startsWith('zh')
                    ? '简体中文'
                    : 'English'}
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      isHeaderLanguageDropdownOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {isHeaderLanguageDropdownOpen && (
                  <div className="absolute right-4 top-16 mt-2 w-48 bg-white rounded-md shadow-xl z-20 py-1">
                    <button
                      onClick={() => selectHeaderLanguage('zh')}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        i18n.language.startsWith('zh') &&
                        !i18n.language.startsWith('zh-Hant')
                          ? 'font-semibold text-brand-purple'
                          : 'text-gray-700'
                      } hover:bg-gray-100`}
                    >
                      简体中文
                    </button>
                    <button
                      onClick={() => selectHeaderLanguage('en')}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        i18n.language.startsWith('en')
                          ? 'font-semibold text-brand-purple'
                          : 'text-gray-700'
                      } hover:bg-gray-100`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => selectHeaderLanguage('zh-Hant')}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        i18n.language.startsWith('zh-Hant')
                          ? 'font-semibold text-brand-purple'
                          : 'text-gray-700'
                      } hover:bg-gray-100`}
                    >
                      繁體中文
                    </button>
                    <button
                      onClick={() => selectHeaderLanguage('ru')}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        i18n.language.startsWith('ru')
                          ? 'font-semibold text-brand-purple'
                          : 'text-gray-700'
                      } hover:bg-gray-100`}
                    >
                      Русский
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${
                  useLightTextAndLogo
                    ? 'text-white hover:text-gray-300 focus:ring-white'
                    : 'text-brand-text-muted hover:text-brand-purple focus:ring-brand-purple'
                }`}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-drawer-menu"
                aria-label={t('header.mobileMenu.open')}
              >
                <NewMenuIcon
                  className="w-[2.3rem] h-[2rem]"
                  aria-hidden="true"
                />
              </button>
            )}
          </div>
        </div>
      </header>

      {isMobileMenuOpen && !isOnLoginPage && (
        <div
          id="mobile-drawer-menu"
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div
            className="fixed inset-0 bg-black/50"
            aria-hidden="true"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div
            className={`
              fixed top-4 right-4 
              w-1/2 max-h-[calc(100vh-2rem)] 
              bg-mobile-menu-bg 
              rounded-xl shadow-2xl 
              flex flex-col
              transform-origin-top-right transition-all duration-300 ease-in-out
              ${
                isMobileMenuOpen
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 pointer-events-none'
              }
            `}
          >
            <div className="flex justify-end items-center h-[60px] px-4 flex-shrink-0">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white"
                aria-label={
                  t('header.mobileMenu.closeDrawerAriaLabel') || 'Close menu'
                }
              >
                <svg
                  className="h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="px-5 pb-5 flex flex-col overflow-y-auto flex-grow">
              {mainNavLinks.map((link) => (
                <NavLink
                  key={`mobile-drawer-${link.labelKey}`}
                  to={link.to}
                  end={link.end}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-xl py-4 block"
                >
                  {t(link.labelKey)}
                </NavLink>
              ))}
              <NavLink
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-xl py-4 block"
              >
                {t('header.loginAccount')}
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
