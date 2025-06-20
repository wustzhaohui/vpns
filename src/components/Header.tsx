import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

// Minimal Language Switcher Component (as seen in screenshot for login page)
const LanguageSwitcher: React.FC = () => (
  <div className="flex items-center text-sm text-white">
    <span
      role="img"
      aria-hidden="true"
      className="mr-1"
    >
      🌐
    </span>
    简体中文
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 ml-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>
);

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

// Icon for Scan QR to Download (still used in mobile popover trigger)
const QrCodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-12v8h8V3h-8zm6 6h-4V5h4v4zm0 8h-2v2h-2v-2h-2v2h-2v-2h2v-2h-2v-2h2v-2h2v2h2v2zm-2-2h-2v-2h2v2zM13 13h2v2h-2z" />
  </svg>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerIsNudgingUp, setHeaderIsNudgingUp] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isQrPopoverOpen, setIsQrPopoverOpen] = useState(false);

  const qrPopoverRef = useRef<HTMLDivElement>(null);
  const qrButtonRef = useRef<HTMLButtonElement>(null);
  const qrPopoverDesktopRef = useRef<HTMLDivElement>(null);

  const isBehaviorActiveRef = useRef(false);
  const pauseTimerRef = useRef<number | null>(null);
  const lastYRef = useRef(0);

  const location = useLocation();
  const isOnLoginPage = location.pathname === '/login';
  const isOnBlogPage = location.pathname === '/blog';
  const animationDuration = 300;

  useEffect(() => {
    const initialY = window.scrollY;
    setIsAtTop(initialY <= 10);
    lastYRef.current = initialY;
    isBehaviorActiveRef.current = initialY > 10;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastYRef.current;

      setIsAtTop(currentY <= 10);

      if (isOnLoginPage || isOnBlogPage) {
        setHeaderIsNudgingUp(false);
        isBehaviorActiveRef.current = false;
        if (pauseTimerRef.current) {
          clearTimeout(pauseTimerRef.current);
          pauseTimerRef.current = null;
        }
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
  }, [isOnLoginPage, isOnBlogPage, animationDuration]);

  // Close QR popover when clicking outside (for mobile full screen popover)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isQrPopoverOpen &&
        qrPopoverRef.current &&
        !qrPopoverRef.current.contains(event.target as Node)
      ) {
        if (
          qrButtonRef.current &&
          qrButtonRef.current.contains(event.target as Node) &&
          window.innerWidth < 768
        ) {
          // If it's mobile and click is on trigger, let the button's onClick handle it
        } else {
          setIsQrPopoverOpen(false);
        }
      }
    };
    if (isQrPopoverOpen && window.innerWidth < 768) {
      // Only for mobile full screen
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isQrPopoverOpen]);

  const mainNavLinks = [
    { to: '/', label: '主页', end: true },
    { to: '/referral', label: '推广赚现金' },
    { to: '/blog', label: '博客' },
    { to: '/help', label: '帮助中心' },
  ];

  const headerBaseClass = `sticky top-0 z-50 h-[60px] md:h-[100px] transition-all duration-[${animationDuration}ms] ease-out transform`;

  const headerDynamicBgClasses =
    isOnBlogPage || isOnLoginPage
      ? 'bg-white'
      : 'bg-cover bg-top bg-no-repeat bg-fixed';

  const headerStyle = !(isOnBlogPage || isOnLoginPage)
    ? { backgroundImage: 'url(/assets/home_bg_pc.png)' }
    : {};

  const headerScrollTransform =
    headerIsNudgingUp && !isOnLoginPage && !isOnBlogPage
      ? '-translate-y-[20px]'
      : 'translate-y-0';

  const headerShadow = isAtTop ? 'shadow-none' : 'shadow-md';

  const defaultNavLinkClass = `text-[2.4rem] font-semibold transition-colors duration-200`; // Desktop nav link size

  const getNavLinkClasses = (isActive: boolean) => {
    if (isOnBlogPage) {
      return isActive
        ? `${defaultNavLinkClass} text-brand-text-primary`
        : `${defaultNavLinkClass} text-black/60 hover:text-brand-text-primary`;
    }
    return isActive
      ? `${defaultNavLinkClass} text-white`
      : `${defaultNavLinkClass} text-white/70 hover:text-white`;
  };

  const mobileToggleIconColor =
    isOnBlogPage || isOnLoginPage ? 'text-brand-text-primary' : 'text-white';

  const mobileMenuBg =
    isOnBlogPage || isOnLoginPage
      ? 'bg-white border-t border-gray-200'
      : 'bg-brand-purple-dark/95 backdrop-blur-sm';

  const getMobileNavLinkClasses = (
    isActive: boolean,
    isQrTrigger?: boolean
  ) => {
    const baseClass = `block px-3 py-2 rounded-md text-[1.8rem] md:text-[2.4rem] font-semibold transition-colors duration-200`; // Adjusted mobile text size
    if (isQrTrigger) {
      return `${baseClass} ${
        isOnBlogPage || isOnLoginPage
          ? 'text-black/60 hover:text-brand-text-primary hover:bg-purple-50'
          : 'text-white/80 hover:text-white hover:bg-white/10'
      } flex items-center`;
    }

    if (isOnBlogPage || isOnLoginPage) {
      return `${baseClass} ${
        isActive
          ? 'text-brand-text-primary bg-purple-100'
          : 'text-black/60 hover:text-brand-text-primary hover:bg-purple-50'
      }`;
    }
    return `${baseClass} ${
      isActive
        ? 'text-white bg-white/20'
        : 'text-white/80 hover:text-white hover:bg-white/10'
    }`;
  };

  const logoSrc =
    isOnBlogPage || isOnLoginPage
      ? '/assets/footer-logo.png'
      : '/assets/logo.png';

  const QrPopoverContent: React.FC<{ isMobile?: boolean }> = ({
    isMobile = false,
  }) => (
    <>
      <img
        src="/assets/pro_telegram.67630c52.png"
        alt="下载APP二维码"
        className={`mx-auto rounded-lg ${
          isMobile ? 'w-36 h-36 mb-2' : 'w-100 h-auto mb-3'
        }`}
      />
      <p
        className={`text-center text-gray-700 leading-snug ${
          isMobile ? 'text-sm mb-0.5' : 'text-[2rem] mb-0.5'
        }`}
      >
        打开手机扫描二维码
      </p>
      <p
        className={`text-center text-gray-700 font-medium ${
          isMobile ? 'text-sm mb-2' : 'text-[2rem] mb-3'
        }`}
      >
        立即下载APP
      </p>
      <hr
        className={`my-2 border-gray-300 border-dashed ${
          isMobile ? 'my-1.5' : 'my-2'
        }`}
      />
      <p
        className={`text-center text-gray-500 ${
          isMobile ? 'text-xs' : 'text-[1.5rem]'
        }`}
      >
        推荐使用浏览器扫码
      </p>
    </>
  );

  return (
    <header
      className={`
        ${headerBaseClass}
        ${headerDynamicBgClasses}
        ${headerScrollTransform}
        ${headerShadow}
        ${
          isOnLoginPage && !(isOnBlogPage || isAtTop)
            ? '!bg-gradient-to-r from-header-gradient-start via-header-gradient-middle to-header-gradient-end'
            : ''
        } 
      `}
      style={isOnLoginPage && !(isOnBlogPage || isAtTop) ? {} : headerStyle}
      role="banner"
    >
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 h-full max-w-container-wide">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center"
              aria-label="快连VPN 主页"
            >
              <img
                src={logoSrc}
                alt="快连VPN Logo"
                className="h-[30px] md:h-[55px] w-auto" // Adjusted mobile logo height
              />
            </Link>
          </div>

          {isOnLoginPage ? (
            <div className="flex items-center">
              <LanguageSwitcher />
            </div>
          ) : (
            <>
              <nav
                className="hidden md:flex md:w-1/2 items-center justify-between"
                aria-label="主要导航"
              >
                {mainNavLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) => getNavLinkClasses(isActive)}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div
                  className="relative"
                  onMouseEnter={() => setIsQrPopoverOpen(true)}
                  onMouseLeave={() => setIsQrPopoverOpen(false)}
                >
                  <button
                    ref={qrButtonRef}
                    className={`${getNavLinkClasses(false)} focus:outline-none`}
                    aria-expanded={isQrPopoverOpen}
                    aria-controls="qr-popover-desktop"
                  >
                    扫码下载
                  </button>
                  {isQrPopoverOpen && (
                    <div
                      ref={qrPopoverDesktopRef}
                      id="qr-popover-desktop"
                      className="desktop-qr-popover-with-caret absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[300px] bg-white p-4 rounded-lg shadow-xl border border-gray-200 z-20"
                      role="tooltip"
                    >
                      <QrPopoverContent />
                    </div>
                  )}
                </div>
                <Link
                  to="/login"
                  className={`${getNavLinkClasses(
                    false
                  )} w-[15rem] h-[5rem] flex items-center justify-center border border-white/40 rounded-full transition-all duration-300 hover:border-white/60 hover:text-white hover:scale-105`}
                  aria-label="登录账户"
                >
                  <PersonIcon className="w-[2rem] h-[2rem] mr-2" />
                  <span className="text-[2.4rem]">登录账户</span>
                </Link>
              </nav>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`inline-flex items-center justify-center p-2 rounded-md ${mobileToggleIconColor} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? (
                    <svg
                      className="block h-6 w-6 md:h-8 md:w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      {' '}
                      {/* Adjusted mobile icon size */}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6 md:h-8 md:w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      {' '}
                      {/* Adjusted mobile icon size */}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isMobileMenuOpen && !isOnLoginPage && (
        <div
          className={`md:hidden absolute top-[60px] md:top-[100px] left-0 w-full ${mobileMenuBg} shadow-lg`}
          id="mobile-menu"
        >
          {' '}
          {/* Adjusted mobile menu top position */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mainNavLinks.map((link) => (
              <NavLink
                key={`mobile-${link.to}`}
                to={link.to}
                end={link.end}
                className={({ isActive }) => getMobileNavLinkClasses(isActive)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            {/* Mobile QR Download Trigger */}
            <button
              ref={qrButtonRef}
              onClick={() => {
                setIsQrPopoverOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className={`${getMobileNavLinkClasses(
                false,
                true
              )} w-full justify-start`}
              aria-expanded={isQrPopoverOpen}
              aria-controls="qr-popover-mobile"
            >
              {/* Removed QrCodeIcon for mobile */}
              扫码下载
            </button>
            <Link
              to="/login"
              className={`${getMobileNavLinkClasses(
                false
              )} border border-transparent hover:border-white/50 w-full justify-start`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* Removed PersonIcon for mobile */}
              登录账户
            </Link>
          </div>
        </div>
      )}

      {/* Full screen QR Popover for Mobile */}
      {isQrPopoverOpen && window.innerWidth < 768 && (
        <div
          id="qr-popover-mobile"
          ref={qrPopoverRef}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="qr-popover-title"
        >
          <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-xs relative">
            <button
              onClick={() => setIsQrPopoverOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 p-1"
              aria-label="关闭二维码弹窗"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <h3
              id="qr-popover-title"
              className="text-lg font-semibold text-center text-brand-text-primary mb-3"
            >
              扫码下载APP
            </h3>
            <QrPopoverContent isMobile={true} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
