import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TFunction } from 'i18next';

// Icons for the internal header
const HelpCenterLogoIcon: React.FC<
  React.ImgHTMLAttributes<HTMLImageElement>
> = (props) => (
  <img
    src="/assets/logo-help.png" // Updated logo path
    alt="LetsVPN"
    {...props}
  />
);

const HelpCenterGlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
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

const HelpCenterMenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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

const HelpCenterCloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="22"
    height="21"
    viewBox="0 0 22 21"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.27485 8.7001C3.27485 5.42781 5.92757 2.7751 9.19985 2.7751C12.4721 2.7751 15.1249 5.42781 15.1249 8.7001C15.1249 11.9724 12.4721 14.6251 9.19985 14.6251C5.92757 14.6251 3.27485 11.9724 3.27485 8.7001ZM9.19985 0.225098C4.51924 0.225098 0.724854 4.01948 0.724854 8.7001C0.724854 13.3807 4.51924 17.1751 9.19985 17.1751C11.0802 17.1751 12.8176 16.5627 14.2234 15.5265L19.0981 20.4013C19.5961 20.8992 20.4033 20.8992 20.9013 20.4013C21.3992 19.9033 21.3992 19.0961 20.9013 18.5981L16.0264 13.7233C17.0625 12.3176 17.6749 10.5804 17.6749 8.7001C17.6749 4.01948 13.8805 0.225098 9.19985 0.225098Z"
    ></path>
  </svg>
);

interface HelpCenterHeaderProps {
  t: TFunction;
  heroTitleFontSize: string;
  internalHeaderNavFontSize: string;
}

const HelpCenterHeader: React.FC<HelpCenterHeaderProps> = ({
  t,
  heroTitleFontSize,
  internalHeaderNavFontSize,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const headerStyle: React.CSSProperties = {
    height: '405px',
    backgroundImage: `
      radial-gradient(ellipse 333.38% 100% at 50% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.008) 11.67%, rgba(255, 255, 255, 0.035) 21.17%, rgba(255, 255, 255, 0.07) 28.85%, rgba(255, 255, 255, 0.12) 35.03%, rgba(255, 255, 255, 0.18) 40.05%, rgba(255, 255, 255, 0.25) 44.25%, rgba(255, 255, 255, 0.33) 47.96%, rgba(255, 255, 255, 0.408) 51.51%, rgba(255, 255, 255, 0.494) 55.23%, rgba(255, 255, 255, 0.584) 59.47%, rgba(255, 255, 255, 0.67) 64.55%, rgba(255, 255, 255, 0.76) 70.81%, rgba(255, 255, 255, 0.843) 78.58%, rgba(255, 255, 255, 0.957) 88.2%, rgb(255, 255, 255) 100%),
      url('/assets/bg-help.png'),
      linear-gradient(93.63deg, var(--header-gradient-start, #2533E8) 2.132%, var(--header-gradient-middle, #8936EB) 47.969%, var(--header-gradient-end, #DC30A6) 97.806%)
    `,
    backgroundRepeat: 'no-repeat, no-repeat, repeat',
    backgroundPosition: '50% 0%, center center, center center',
    backgroundSize: '333.38% 100%, cover, auto',
    color: 'white',
  };

  return (
    <>
      <header
        className="text-white"
        style={headerStyle}
        aria-label={t('helpCenterPage.internalHeader.ariaLabel')}
      >
        <div className="mx-auto w-full max-w-[960px] h-full flex flex-col">
          <div className="px-4 sm:px-6 lg:px-0 flex items-center justify-between h-[60px] md:h-[70px] w-full flex-shrink-0">
            <Link
              to="/"
              className="flex-shrink-0"
              aria-label={t('altTexts.logo')}
            >
              <HelpCenterLogoIcon className="h-[30px] md:h-[36px] w-auto" />
            </Link>
            <nav className="hidden md:flex items-center space-x-5 lg:space-x-7">
              <a
                href="https://letsvpn.world/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${internalHeaderNavFontSize} hover:text-gray-200 transition-colors`}
              >
                {t('helpCenterPage.internalHeader.goToLetsVPN')}
              </a>
              <Link
                to="/login"
                className={`${internalHeaderNavFontSize} hover:text-gray-200 transition-colors`}
              >
                {t('helpCenterPage.internalHeader.account')}
              </Link>
              <div
                className={`flex items-center ${internalHeaderNavFontSize} text-white`}
                aria-label={t(
                  'helpCenterPage.internalHeader.languageAriaLabel'
                )}
              >
                <HelpCenterGlobeIcon className="w-[22px] h-[22px] mr-1.5" />
                <span>{t('helpCenterPage.internalHeader.language')}</span>
              </div>
            </nav>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-white hover:text-gray-300 focus:outline-none"
                aria-label={t(
                  'helpCenterPage.internalHeader.openMenuAriaLabel'
                )}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-help-menu"
              >
                <HelpCenterMenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex-grow flex flex-col items-start justify-start text-left px-4 pt-8 pb-8 md:pb-12">
            <h1 className={`${heroTitleFontSize} font-bold mb-6 md:mb-8`}>
              {t('helpCenterPage.title')}
            </h1>
            <div className="relative w-full max-w-[960px]">
              <label
                htmlFor="search-input"
                className="sr-only"
              >
                {t('helpCenterPage.searchPlaceholder')}
              </label>
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <SearchIcon className="w-[22px] h-[21px] text-white/70 peer-focus:text-gray-400 transition-colors duration-200 ease-in-out" />
              </div>
              <input
                id="search-input"
                type="search"
                autoComplete="off"
                className="peer w-full h-[62.8px] rounded-lg border border-white/40 bg-white/20 hover:bg-white/30 focus:bg-white py-3 pl-[4.7rem] pr-4 text-[1.6rem] sm:text-[1.7rem] text-white focus:text-brand-text-primary placeholder-white/70 focus:placeholder-gray-500 shadow-md outline-none transition-all duration-200 ease-in-out focus:ring-2 focus:ring-white focus:border-transparent"
                placeholder={t('helpCenterPage.searchPlaceholder')}
                aria-label={t('helpCenterPage.searchPlaceholder')}
              />
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          id="mobile-help-menu"
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-black/50"
            aria-hidden="true"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div
            className={`
              fixed top-0 left-0 right-0
              bg-white
              shadow-2xl 
              flex flex-col
              transform-origin-top transition-all duration-300 ease-in-out
              ${
                isMobileMenuOpen
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 pointer-events-none'
              }
            `}
            style={{ minHeight: '176px' }}
          >
            <div className="flex justify-end items-center p-3 flex-shrink-0">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-brand-text-primary"
                aria-label={t(
                  'helpCenterPage.internalHeader.closeMenuAriaLabel'
                )}
              >
                <HelpCenterCloseIcon className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col px-4 py-2 space-y-0.5 flex-grow overflow-y-auto">
              <a
                href="https://letsvpn.world/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-[1.6rem] font-bold text-brand-text-primary hover:bg-gray-100 rounded px-2 transition-colors"
              >
                {t('helpCenterPage.internalHeader.goToLetsVPN')}
              </a>
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-[1.6rem] font-bold text-brand-text-primary hover:bg-gray-100 rounded px-2 transition-colors"
              >
                {t('helpCenterPage.internalHeader.account')}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpCenterHeader;
