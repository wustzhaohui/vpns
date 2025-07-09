import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LoginPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const useLargeFont =
    i18n.language.startsWith('zh') || i18n.language.startsWith('zh-Hant');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<
    'login' | 'forgotPassword' | 'register'
  >('login');

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;
    if (!username) {
      setUsernameError(true);
      isValid = false;
    } else {
      setUsernameError(false);
    }

    if (!password) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    if (isValid) {
      console.log('Login attempt:', { username, password });
      setIsModalOpen(true);
    }
  };

  const titleFontSize = useLargeFont ? 'md:text-[42px]' : 'md:text-[36px]';
  const descriptionFontSize = useLargeFont
    ? 'md:text-[1.8rem]'
    : 'md:text-[1.6rem]';
  const inputPlaceholderFontSize = useLargeFont
    ? 'md:placeholder:text-[20px] md:text-[20px]'
    : 'md:placeholder:text-[18px] md:text-[18px]';
  const buttonTextFontSize = useLargeFont ? 'md:text-[20px]' : 'md:text-[18px]';
  const linkTextFontSize = useLargeFont ? 'md:text-[18px]' : 'md:text-[16px]';

  const renderContent = () => {
    if (viewMode === 'forgotPassword') {
      return (
        <>
          <div className="mb-6 md:mb-8">
            <h2
              className={`text-left text-3xl ${titleFontSize} font-bold text-brand-text-primary`}
            >
              {t('loginPage.forgotPassword.title')}
            </h2>
          </div>
          <p
            className={`text-left text-base ${descriptionFontSize} text-brand-text-muted mb-8 md:mb-10 leading-relaxed`}
          >
            {t('loginPage.forgotPassword.description')}
          </p>
          <div className="w-full mb-6 md:mb-8">
            <Link
              to="/"
              className={`group relative w-full h-14 md:h-[6rem] rounded-full text-lg ${buttonTextFontSize} flex items-center justify-center text-white font-semibold transition-all duration-300 bg-gradient-to-r from-[#2533E8] via-[#8936EB] to-[#DC30A6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-dark hover:opacity-95`}
              aria-label={t('loginPage.forgotPassword.goHomeButton')}
            >
              {t('loginPage.forgotPassword.goHomeButton')}
            </Link>
          </div>
          <div className="text-left">
            <div
              className={`font-medium text-sm sm:text-base ${linkTextFontSize}`}
            >
              <span className="text-brand-text-primary">
                {t('loginPage.forgotPassword.haveAccount')}
              </span>
              <button
                type="button"
                onClick={() => setViewMode('login')}
                className="text-gradient-purple-pink py-2 transition-opacity duration-150 hover:opacity-80 focus:outline-none"
                aria-label={t('loginPage.forgotPassword.goToLogin')}
              >
                {t('loginPage.forgotPassword.goToLogin')}
              </button>
            </div>
          </div>
        </>
      );
    }

    if (viewMode === 'register') {
      return (
        <>
          <div className="mb-6 md:mb-8">
            <h2
              className={`text-left text-3xl ${titleFontSize} font-bold text-brand-text-primary`}
            >
              {t('loginPage.register.title')}
            </h2>
          </div>
          <p
            className={`text-left text-base ${descriptionFontSize} text-brand-text-muted mb-8 md:mb-10 leading-relaxed`}
          >
            {t('loginPage.register.description')}
          </p>
          <div className="w-full mb-6 md:mb-8">
            <Link
              to="/"
              className={`group relative w-full h-14 md:h-[6rem] rounded-full text-lg ${buttonTextFontSize} flex items-center justify-center text-white font-semibold transition-all duration-300 bg-gradient-to-r from-[#2533E8] via-[#8936EB] to-[#DC30A6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-dark hover:opacity-95`}
              aria-label={t('loginPage.register.goHomeButton')}
            >
              {t('loginPage.register.goHomeButton')}
            </Link>
          </div>
          <div className="text-left">
            <div
              className={`font-medium text-sm sm:text-base ${linkTextFontSize}`}
            >
              <span className="text-brand-text-primary">
                {t('loginPage.register.haveAccount')}
              </span>
              <button
                type="button"
                onClick={() => setViewMode('login')}
                className="text-gradient-purple-pink py-2 transition-opacity duration-150 hover:opacity-80 focus:outline-none"
                aria-label={t('loginPage.register.goToLogin')}
              >
                {t('loginPage.register.goToLogin')}
              </button>
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="mb-6 md:mb-8">
          <h2
            className={`text-left text-3xl ${titleFontSize} font-bold text-brand-text-primary md:whitespace-nowrap`}
          >
            {t('loginPage.login.title')}
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div
            className={`
              relative flex items-center bg-slate-100 rounded-full
              h-14 md:h-[6rem] px-4 w-full mb-6 md:mb-8
              focus-within:border-transparent
              ${
                usernameError
                  ? 'ring-2 ring-input-error-pink'
                  : 'focus-within:ring-2 focus-within:ring-input-focus-blue'
              }
            `}
          >
            <span className="text-input-icon-placeholder mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-10 md:w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className={`appearance-none rounded-none relative block w-full bg-transparent border-none text-base ${inputPlaceholderFontSize} leading-normal text-brand-text-primary placeholder:text-input-icon-placeholder placeholder:text-base focus:outline-none focus:ring-0 focus:border-transparent h-full`}
              placeholder={t('loginPage.login.usernamePlaceholder')}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (usernameError && e.target.value) setUsernameError(false);
              }}
            />
          </div>

          <div
            className={`
              relative flex items-center bg-slate-100 rounded-full
              h-14 md:h-[6rem] px-4 w-full mb-6 md:mb-8
              focus-within:border-transparent
              ${
                passwordError
                  ? 'ring-2 ring-input-error-pink'
                  : 'focus-within:ring-2 focus-within:ring-input-focus-blue'
              }
            `}
          >
            <span className="text-input-icon-placeholder mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-10 md:w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v2"
                />
              </svg>
            </span>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              className={`appearance-none rounded-none relative block w-full bg-transparent border-none text-base ${inputPlaceholderFontSize} leading-normal text-brand-text-primary placeholder:text-input-icon-placeholder placeholder:text-base focus:outline-none focus:ring-0 focus:border-transparent h-full`}
              placeholder={t('loginPage.login.passwordPlaceholder')}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (passwordError && e.target.value) setPasswordError(false);
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-input-icon-placeholder hover:text-brand-text-primary focus:outline-none p-2"
              aria-label={t(
                showPassword
                  ? 'loginPage.login.hidePassword'
                  : 'loginPage.login.showPassword'
              )}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10S6.477 0 12 0s10 4.477 10 10c0 .985-.145 1.946-.412 2.85M15 12a3 3 0 11-6 0 3 3 0 016 0zm-2.067 4.933A5.009 5.009 0 0112 17c-2.761 0-5-2.239-5-5 0-1.02.306-1.956.834-2.75M1 1l22 22"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.274 1.054-.674 2.052-1.178 3M1 1l22 22"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="w-full mb-4 md:mb-6">
            <button
              type="submit"
              className={`group relative w-full h-14 md:h-[6rem] rounded-full text-lg ${buttonTextFontSize} flex items-center justify-center text-white font-semibold transition-all duration-300 bg-gradient-to-r from-brand-gradient-from to-brand-gradient-to focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-dark hover:opacity-95`}
              aria-label={t('loginPage.login.loginButton')}
            >
              {t('loginPage.login.loginButton')}
            </button>
          </div>
          <div className="flex flex-row items-center justify-between mt-6 md:mt-8">
            <button
              type="button"
              onClick={() => setViewMode('forgotPassword')}
              className={`font-medium text-sm sm:text-base ${linkTextFontSize} text-gradient-purple-pink py-2 transition-opacity duration-150 hover:opacity-80 focus:outline-none`}
              aria-label={t('loginPage.login.forgotPasswordLink')}
            >
              {t('loginPage.login.forgotPasswordLink')}
            </button>
            <button
              type="button"
              onClick={() => setViewMode('register')}
              className={`font-medium text-sm sm:text-base ${linkTextFontSize} text-gradient-purple-pink py-2 transition-opacity duration-150 hover:opacity-80 focus:outline-none`}
              aria-label={t('loginPage.login.registerLink')}
            >
              {t('loginPage.login.registerLink')}
            </button>
          </div>
        </form>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#F2F7FF] text-brand-text-primary flex items-center justify-center">
      <div className="w-full h-full flex flex-col pc:flex-row">
        {/* Illustration Section */}
        <div className="w-full pc:w-1/2 flex items-center justify-center p-8 order-1 pc:order-1">
          <div className="w-full">
            <img
              src="/assets/login_info.8a76c6cc.png"
              alt={t('altTexts.loginIllustration')}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full pc:w-1/2 flex items-center justify-center p-8 order-2 pc:order-2">
          <div className="w-full text-center pc:w-[80%]">{renderContent()}</div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="login-modal-title"
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 text-center max-w-sm w-full mx-auto relative animate-modal-pop-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={t('loginPage.modal.closeButton')}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3
              id="login-modal-title"
              className="text-xl md:text-2xl font-bold text-brand-text-primary mb-4"
            >
              {t('loginPage.modal.title')}
            </h3>
            <p className="text-brand-text-muted mb-6 md:mb-8 text-base md:text-lg">
              {t('loginPage.modal.description')}
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full h-12 md:h-14 rounded-full text-lg font-semibold flex items-center justify-center text-white bg-gradient-to-r from-brand-gradient-from to-brand-gradient-to hover:opacity-95 transition-opacity"
            >
              {t('loginPage.modal.okButton')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
