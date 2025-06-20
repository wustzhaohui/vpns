import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface ContactIconItem {
  name: string;
  icon: React.ReactNode; // Changed from string to ReactNode
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [currentLanguage, setCurrentLanguage] = useState<'中文' | 'English'>(
    '中文'
  );
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  const softwareDownloads = [
    { name: 'PC 版本', href: '#' },
    { name: 'Android 版本', href: '#' },
    { name: 'iOS 版本', href: '#' },
    { name: 'Mac 版本', href: '#' },
  ];

  const relatedResources = [
    { name: '推广赚现金', href: '/referral' },
    { name: '博客', href: '/blog' },
    { name: '帮助中心', href: '#' },
  ];

  const userAgreements = [
    { name: '隐私权政策', href: '#' },
    { name: '服务条款', href: '#' },
    { name: '注册协议', href: '#' },
  ];

  const contactIcons: ContactIconItem[] = [
    {
      name: 'Email',
      icon: (
        <img
          src="/assets/email.2e4e9014.svg"
          alt="Email us"
          className="w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem]"
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
          className="w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem]"
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
          className="w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem]"
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
          className="w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem]"
        />
      ),
      href: '#',
      label: 'Join us on Telegram',
    },
  ];

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen((prev) => !prev);
  };

  const selectLanguage = (language: '中文' | 'English') => {
    setCurrentLanguage(language);
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

  return (
    <footer className="bg-white text-brand-text-primary">
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 max-w-container-wide py-8 sm:py-10 md:py-12 lg:py-16 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-10 md:gap-8">
          {' '}
          {/* Adjusted gap-y for mobile */}
          {/* Column 1: Logo, Contact, Copyright */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-6 hover:opacity-80 transition-opacity"
            >
              <img
                src="/assets/footer-logo.png"
                alt="快连VPN Logo"
                className="h-8 sm:h-9 md:h-10 w-auto" // Adjusted logo height
              />{' '}
            </Link>
            <h4 className="text-[1.6rem] sm:text-[1.7rem] md:text-[1.9rem] font-semibold text-brand-text-muted mb-2 sm:mb-3">
              联系我们:
            </h4>
            <div className="flex space-x-2 mb-4 sm:space-x-3 sm:mb-6">
              {' '}
              {/* Adjusted icon spacing and margin */}
              {contactIcons.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-opacity duration-200 hover:opacity-75" // Adjusted icon container size
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <p className="text-[1.4rem] sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.9rem] text-gray-500">
              {' '}
              {/* Adjusted copyright text size */}
              版权所有 © {currentYear} LetsVPN 团队
            </p>
          </div>
          {/* Wrapper for the next 4 sections, applying 2-col layout on mobile and 'contents' on md+ */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:contents">
            {/* Column 2: 软件下载 */}
            <div>
              <h3 className="text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.7rem] font-semibold text-brand-text-primary mb-4 sm:mb-5 md:mb-[25px] lg:mb-[30px]">
                {' '}
                {/* Adjusted title size and margin */}
                软件下载
              </h3>
              <ul className="space-y-3 sm:space-y-4 md:space-y-[1.8rem] lg:space-y-[2rem]">
                {' '}
                {/* Adjusted link spacing */}
                {softwareDownloads.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[1.9rem] text-gray-600 hover:text-[#747E8B] transition-colors duration-200" // Adjusted link text size
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: 相关资源 */}
            <div>
              <h3 className="text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.7rem] font-semibold text-brand-text-primary mb-4 sm:mb-5 md:mb-[25px] lg:mb-[30px]">
                {' '}
                {/* Adjusted title size and margin */}
                相关资源
              </h3>
              <ul className="space-y-3 sm:space-y-4 md:space-y-[1.8rem] lg:space-y-[2rem]">
                {' '}
                {/* Adjusted link spacing, changed from 3rem */}
                {relatedResources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[1.9rem] text-gray-600 hover:text-[#747E8B] transition-colors duration-200" // Adjusted link text size
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: 用户协议 */}
            <div>
              <h3 className="text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.7rem] font-semibold text-brand-text-primary mb-4 sm:mb-5 md:mb-[25px] lg:mb-[30px]">
                {' '}
                {/* Adjusted title size and margin */}
                用户协议
              </h3>
              <ul className="space-y-3 sm:space-y-4 md:space-y-[1.8rem] lg:space-y-[2rem]">
                {' '}
                {/* Adjusted link spacing */}
                {userAgreements.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[1.9rem] text-gray-600 hover:text-[#747E8B] transition-colors duration-200" // Adjusted link text size
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: 更换语言 */}
            <div
              className="relative"
              ref={languageDropdownRef}
            >
              <h3 className="text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.7rem] font-semibold text-brand-text-primary mb-4 sm:mb-5 md:mb-[25px] lg:mb-[30px]">
                {' '}
                {/* Adjusted title size and margin */}
                更换语言
              </h3>
              <button
                className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[1.9rem] text-gray-600 hover:text-[#747E8B] transition-colors duration-200 flex items-center" // Adjusted button text size
                onClick={toggleLanguageDropdown}
                aria-haspopup="true"
                aria-expanded={isLanguageDropdownOpen}
                aria-label={`Change language, current language is ${currentLanguage}`}
              >
                {currentLanguage}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                    isLanguageDropdownOpen ? 'transform rotate-180' : ''
                  }`}
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
              </button>
              {isLanguageDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-max bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="language-button"
                >
                  <button
                    onClick={() => selectLanguage('中文')}
                    className={`block w-full text-left px-4 py-2 text-[1.5rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[1.9rem] ${
                      currentLanguage === '中文'
                        ? 'font-semibold text-brand-purple'
                        : 'text-gray-700'
                    } hover:bg-gray-100 hover:text-brand-purple`} // Adjusted item text size
                    role="menuitem"
                  >
                    中文
                  </button>
                  <button
                    onClick={() => selectLanguage('English')}
                    className={`block w-full text-left px-4 py-2 text-[1.5rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[1.9rem] ${
                      currentLanguage === 'English'
                        ? 'font-semibold text-brand-purple'
                        : 'text-gray-700'
                    } hover:bg-gray-100 hover:text-brand-purple`} // Adjusted item text size
                    role="menuitem"
                  >
                    English
                  </button>
                </div>
              )}
            </div>
          </div>{' '}
          {/* End of wrapper for 4 sections */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
