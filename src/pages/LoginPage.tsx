import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LoginPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const useLargeFont = i18n.language.startsWith('zh') || i18n.language.startsWith('zh-Hant');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [viewMode, setViewMode] = useState<
    'login' | 'forgotPassword' | 'register'
  >('login');

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
      // Simulating a successful login for demonstration if needed, or actual logic
      // For now, it just logs and alerts
      alert(t('loginPage.login.loginAttemptMessage')); // Using a translated message
    }
  };

  const titleFontSize = useLargeFont ? 'md:text-[64px]' : 'md:text-[48px]';
  const descriptionFontSize = useLargeFont ? 'md:text-[2rem]' : 'md:text-[1.8rem]';
  const inputPlaceholderFontSize = useLargeFont ? 'md:placeholder:text-[30px] md:text-[30px]' : 'md:placeholder:text-[24px] md:text-[24px]';
  const buttonTextFontSize = useLargeFont ? 'md:text-[28px]' : 'md:text-[22px]';
  const linkTextFontSize = useLargeFont ? 'md:text-[22px] lg:text-[24px]' : 'md:text-[18px] lg:text-[20px]';


  const renderContent = () => {
    if (viewMode === 'forgotPassword') {
      return (
        <>
          <div className="mb-6 md:mb-[45px]">
            <h2 className={`text-left text-3xl ${titleFontSize} font-bold text-brand-text-primary`}>
              {t('loginPage.forgotPassword.title')}
            </h2>
          </div>
          <p className={`text-left text-base ${descriptionFontSize} text-brand-text-muted mb-8 md:mb-12 leading-relaxed`}>
            {t('loginPage.forgotPassword.description')}
          </p>
          <div className="w-full mb-6 md:mb-[40px]">
            <Link
              to="/"
              className={`group relative w-full h-14 md:h-[7.5rem] rounded-full text-lg ${buttonTextFontSize} flex items-center justify-center text-white font-semibold transition-all duration-300 bg-gradient-to-r from-[#2533E8] via-[#8936EB] to-[#DC30A6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-dark hover:opacity-95`}
              aria-label={t('loginPage.forgotPassword.goHomeButton')}
            >
              {t('loginPage.forgotPassword.goHomeButton')}
            </Link>
          </div>
          <div className="text-left">
            <div className={`font-medium text-sm sm:text-base ${linkTextFontSize}`}>
              <span className="text-brand-text-primary">{t('loginPage.forgotPassword.haveAccount')}</span>
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
          <div className="mb-6 md:mb-[45px]">
            <h2 className={`text-left text-3xl ${titleFontSize} font-bold text-brand-text-primary`}>
              {t('loginPage.register.title')}
            </h2>
          </div>
          <p className={`text-left text-base ${descriptionFontSize} text-brand-text-muted mb-8 md:mb-12 leading-relaxed`}>
            {t('loginPage.register.description')}
          </p>
          <div className="w-full mb-6 md:mb-[40px]">
            <Link
              to="/"
              className={`group relative w-full h-14 md:h-[7.5rem] rounded-full text-lg ${buttonTextFontSize} flex items-center justify-center text-white font-semibold transition-all duration-300 bg-gradient-to-r from-[#2533E8] via-[#8936EB] to-[#DC30A6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-dark hover:opacity-95`}
              aria-label={t('loginPage.register.goHomeButton')}
            >
              {t('loginPage.register.goHomeButton')}
            </Link>
          </div>
          <div className="text-left">
            <div className={`font-medium text-sm sm:text-base ${linkTextFontSize}`}>
              <span className="text-brand-text-primary">{t('loginPage.register.haveAccount')}</span>
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
        <div className="mb-6 md:mb-[45px]">
          <h2 className={`text-left text-3xl ${titleFontSize} font-bold text-brand-text-primary md:whitespace-nowrap`}>
            {t('loginPage.login.title')}
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div
            className={`
              relative flex items-center bg-slate-100 rounded-full md:rounded-[4rem]
              h-14 md:h-[8.5rem] px-4 w-full mb-6 md:mb-[45px]
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
                className="h-5 w-5 md:h-[30px] md:w-[30px]"
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
              className={`appearance-none rounded-none relative block w-full bg-transparent border-none text-base ${inputPlaceholderFontSize} leading-normal md:leading-[40px] text-brand-text-primary placeholder:text-input-icon-placeholder placeholder:text-base focus:outline-none focus:ring-0 focus:border-transparent h-full`}
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
              relative flex items-center bg-slate-100 rounded-full md:rounded-[4rem]
              h-14 md:h-[8.5rem] px-4 w-full mb-6 md:mb-[45px]
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
                className="h-5 w-5 md:h-[30px] md:w-[30px]"
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
              className={`appearance-none rounded-none relative block w-full bg-transparent border-none text-base ${inputPlaceholderFontSize} leading-normal md:leading-[40px] text-brand-text-primary placeholder:text-input-icon-placeholder placeholder:text-base focus:outline-none focus:ring-0 focus:border-transparent h-full`}
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
              aria-label={t(showPassword ? 'loginPage.login.hidePassword' : 'loginPage.login.showPassword')}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-[30px] md:w-[30px]"
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
                  className="h-5 w-5 md:h-[30px] md:w-[30px]"
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

          <div className="w-full mb-4 md:mb-[30px]">
            <button
              type="submit"
              className={`group relative w-full h-14 md:h-[7.5rem] rounded-full text-lg ${buttonTextFontSize} flex items-center justify-center text-white font-semibold transition-all duration-300 bg-gradient-to-r from-brand-gradient-from to-brand-gradient-to focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-dark hover:opacity-95`}
              aria-label={t('loginPage.login.loginButton')}
            >
              {t('loginPage.login.loginButton')}
            </button>
          </div>

          <div className="flex flex-row items-center justify-between mt-6 md:mt-[40px]">
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
    <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)] overflow-y-auto flex items-start justify-start pt-[3rem] pb-8 px-4 sm:py-12 sm:px-6 md:items-center md:justify-center md:py-8 lg:py-8 lg:px-8 bg-slate-50">
      <div className="w-full max-w-container-wide mx-auto rounded-xl overflow-hidden">
        <div className="flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-0">
          <div className="order-1 md:order-none pt-0 pb-6 sm:pb-8 md:py-12 px-4 sm:px-6 md:px-8 flex flex-col justify-center">
            <div className="w-full">{renderContent()}</div>
          </div>
          <div className="flex order-2 md:order-none flex-col items-center justify-center p-4 sm:p-6 md:p-12 mt-6 md:mt-0">
            <img
              className="max-w-full h-auto block object-contain max-h-[200px] sm:max-h-[250px] md:max-h-full"
              src="/assets/login_info.8a76c6cc.png"
              alt={t('altTexts.loginIllustration')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;