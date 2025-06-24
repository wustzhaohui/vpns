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

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  // Determine if a language uses larger font sizes (e.g., Chinese scripts)
  const useLargeFont =
    i18n.language.startsWith('zh') || i18n.language.startsWith('zh-Hant');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerIsNudgingUp, setHeaderIsNudgingUp] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isQrPopoverOpen, setIsQrPopoverOpen] = useState(false); // For desktop QR popover

  const [isHeaderLanguageDropdownOpen, setIsHeaderLanguageDropdownOpen] =
    useState(false);
  const headerLanguageDropdownRef = useRef<HTMLDivElement>(null);

  const qrButtonRef = useRef<HTMLButtonElement>(null); // For desktop QR popover trigger
  const qrPopoverDesktopRef = useRef<HTMLDivElement>(null); // For desktop QR popover

  const isBehaviorActiveRef = useRef(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastYRef = useRef(0);

  const location = useLocation();
  const isOnLoginPage = location.pathname === '/login';
  const isOnBlogPage = location.pathname === '/blog';
  const isOnHeroBackgroundPage =
    location.pathname === '/' || location.pathname === '/referral';
  const animationDuration = 300;

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine if hero header styles (light text, background image) should be applied
  const applyHeroHeaderStyles =
    isOnHeroBackgroundPage || (isMobileView && isOnLoginPage);

  const useLightText = applyHeroHeaderStyles;
  const logoSrc = applyHeroHeaderStyles
    ? '/assets/logo.png'
    : '/assets/footer-logo.png';

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

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isHeaderLanguageDropdownOpen]);

  const toggleHeaderLanguageDropdown = () => {
    setIsHeaderLanguageDropdownOpen((prev) => !prev);
  };

  const selectHeaderLanguage = (language: 'zh' | 'en' | 'zh-Hant' | 'ru') => {
    i18n.changeLanguage(language);
    setIsHeaderLanguageDropdownOpen(false);
  };

  useEffect(() => {
    const initialY = window.scrollY;
    setIsAtTop(initialY <= 10);
    lastYRef.current = initialY;
    isBehaviorActiveRef.current = initialY > 10;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastYRef.current;
      setIsAtTop(currentY <= 10);

      if (isOnBlogPage || (isOnLoginPage && !isMobileView)) {
        // Standard behavior for blog, or desktop login
        setHeaderIsNudgingUp(false);
        isBehaviorActiveRef.current = false;
        if (pauseTimerRef.current) {
          clearTimeout(pauseTimerRef.current);
          pauseTimerRef.current = null;
        }
        lastYRef.current = currentY;
        return;
      }

      // For pages with hero background (home, referral, mobile login), different scroll behavior
      if (applyHeroHeaderStyles && isMobileView && isOnLoginPage) {
        // Mobile login page with hero styles should not nudge up/down
        setHeaderIsNudgingUp(false);
        isBehaviorActiveRef.current = false;
        if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
        lastYRef.current = currentY;
        return;
      }

      if (currentY <= 10) {
        if (pauseTimerRef.current) {
          clearTimeout(pauseTimerRef.current);
          pauseTimerRef.current = null;
        }
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
    applyHeroHeaderStyles,
    isMobileView,
  ]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
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

  const headerBaseClass = `sticky top-0 z-50 h-[60px] md:h-[100px] transition-all duration-[${animationDuration}ms] ease-in-out`;

  const headerStyle: React.CSSProperties = applyHeroHeaderStyles
    ? {
        backgroundImage: 'url(/assets/home_bg_pc.png)',
        backgroundPosition: 'top center',
        ...(isMobileView ? {} : { backgroundSize: 'cover' }),
        backgroundRepeat: 'no-repeat',
      }
    : {};

  let headerDynamicClasses = '';
  if (applyHeroHeaderStyles) {
    headerDynamicClasses = 'shadow-none';
  } else {
    // For pages like Blog, or Desktop Login
    headerDynamicClasses = 'bg-white';
    if (isAtTop) {
      headerDynamicClasses += ' shadow-none';
    } else {
      headerDynamicClasses += ' shadow-lg';
    }
  }

  return (
    <>
      <header
        className={`${headerBaseClass} ${headerDynamicClasses} ${
          headerIsNudgingUp ? '-translate-y-full' : 'translate-y-0'
        }`}
        style={headerStyle}
        aria-label="Main Navigation"
      >
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full max-w-container-wide">
          <Link
            to="/"
            className="flex-shrink-0 flex items-center"
          >
            <img
              className="w-auto h-[30px] sm:h-[32px] md:w-[220px] md:h-[50px] object-contain" // Updated mobile logo height
              src={logoSrc}
              alt={t('altTexts.logo')}
            />
          </Link>

          {/* Desktop Navigation */}
          {!isOnLoginPage && (
            <nav className="hidden md:flex items-center space-x-24 justify-end">
              {mainNavLinks.map((link) => (
                <NavLink
                  key={link.labelKey}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem] font-medium transition-colors duration-150 ${
                      isActive
                        ? useLightText
                          ? 'text-white'
                          : 'text-brand-purple'
                        : useLightText
                        ? 'text-gray-200 hover:text-white'
                        : 'text-brand-text-muted hover:text-brand-purple'
                    }`
                  }
                >
                  {t(link.labelKey)}
                </NavLink>
              ))}
              {/* Scan to Download - Desktop */}
              <div
                className="relative"
                onMouseEnter={() => setIsQrPopoverOpen(true)}
                onMouseLeave={() => setIsQrPopoverOpen(false)}
              >
                <button
                  ref={qrButtonRef}
                  className={`text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem] font-medium transition-colors duration-150 cursor-default ${
                    isQrPopoverOpen && window.innerWidth >= 768
                      ? useLightText
                        ? 'text-white'
                        : 'text-brand-purple'
                      : useLightText
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
              {/* Login Button - Desktop */}
              <div className="flex items-center">
                <Link
                  to="/login"
                  className={`flex items-center justify-center text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem] font-medium px-8 h-[5rem] rounded-full transition-all duration-300 transform hover:scale-105
                    ${
                      useLightText // This is correct, as desktop login page does not use light text
                        ? 'bg-transparent border border-white text-white shadow-none hover:bg-white/10'
                        : 'text-white shadow-lg hover:shadow-xl bg-gradient-to-r from-header-gradient-start via-header-gradient-middle to-header-gradient-end hover:opacity-90'
                    }`}
                >
                  <PersonIcon
                    className="w-[25px] h-[25px] mr-2 text-white" // Icon color explicitly white for gradient button
                  />
                  {t('header.loginAccount')}
                </Link>
              </div>
            </nav>
          )}

          {/* Desktop Language Switcher on Login Page (when not mobile and on login page) */}
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
                <svg
                  className="w-5 h-5 mr-1 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  ></path>
                </svg>
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

          {/* Mobile: Hamburger Menu OR Language Switcher on Login Page */}
          <div className="md:hidden flex items-center">
            {isOnLoginPage ? (
              <div ref={headerLanguageDropdownRef}>
                {' '}
                {/* Mobile language switcher on login page */}
                <button
                  onClick={toggleHeaderLanguageDropdown}
                  className={`flex items-center text-sm transition-colors
                    ${
                      applyHeroHeaderStyles // useLightText will be true if mobile login
                        ? 'text-white hover:text-gray-300'
                        : 'text-brand-text-muted hover:text-brand-purple'
                    }`}
                  aria-haspopup="true"
                  aria-expanded={isHeaderLanguageDropdownOpen}
                  aria-label={t('header.languageSwitcher.changeLanguage')}
                >
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    ></path>
                  </svg>
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
              /* Hamburger Menu Button for non-login pages */
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${
                  useLightText // This will correctly use white for home/referral
                    ? 'text-white hover:text-gray-300 focus:ring-white'
                    : 'text-brand-text-muted hover:text-brand-purple focus:ring-brand-purple'
                }`}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-drawer-menu"
                aria-label={t('header.mobileMenu.open')}
              >
                <NewMenuIcon
                  className="h-7 w-7"
                  aria-hidden="true"
                />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* New Mobile Drawer Menu - Styled as Pop-up */}
      {isMobileMenuOpen && !isOnLoginPage && (
        <div
          id="mobile-drawer-menu"
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title" // Should have an invisible title element if used like this
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50"
            aria-hidden="true"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Drawer Panel - Styled as Pop-up */}
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
              {' '}
              {/* Adjusted pt-0, added pb-5 */}
              {mainNavLinks.map((link) => (
                <NavLink
                  key={`mobile-drawer-${link.labelKey}`}
                  to={link.to}
                  end={link.end}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-xl py-4 block"
                  // Add active styling if needed, e.g., font-bold or a different background on hover/focus
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
