import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
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
      // Handle login logic here
      console.log('Login attempt:', { username, password });
      alert('Login functionality is not implemented yet.');
    }
  };

  const renderContent = () => {
    if (viewMode === 'forgotPassword') {
      return (
        <>
          <div className="mb-6 md:mb-[45px]">
            <h2 className="text-left text-3xl md:text-[64px] font-bold text-brand-text-primary">
              忘记密码
            </h2>
          </div>
          <p className="text-left text-base md:text-[2rem] text-brand-text-muted mb-8 md:mb-12 leading-relaxed">
            您可以在客户端的账户管理中查看自己的用户名及密码，如果没有客户端请先返回官网首页下载。
          </p>
          <div className="w-full mb-6 md:mb-[40px]">
            <Link
              to="/"
              className="group relative w-full h-14 md:h-[7.5rem] rounded-full text-lg md:text-[28px] flex items-center justify-center text-white font-semibold transition-all duration-300 bg-gradient-to-r from-[#2533E8] via-[#8936EB] to-[#DC30A6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-dark hover:opacity-95"
              aria-label="返回首页"
            >
              返回首页
            </Link>
          </div>
          <div className="text-left">
            <div className="font-medium text-sm sm:text-base md:text-[22px] lg:text-[24px]">
              <span className="text-brand-text-primary">已有账号 </span>
              <button
                type="button"
                onClick={() => setViewMode('login')}
                className="text-gradient-purple-pink py-2 transition-opacity duration-150 hover:opacity-80 focus:outline-none"
                aria-label="去登录"
              >
                去登录
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
            <h2 className="text-left text-3xl md:text-[64px] font-bold text-brand-text-primary">
              注册快连账户
            </h2>
          </div>
          <p className="text-left text-base md:text-[2rem] text-brand-text-muted mb-8 md:mb-12 leading-relaxed">
            暂时不支持在网站上注册账户，请您在客户端中进行注册，如果没有客户端请返回官网首页下载。
          </p>
          <div className="w-full mb-6 md:mb-[40px]">
            <Link
              to="/"
              className="group relative w-full h-14 md:h-[7.5rem] rounded-full text-lg md:text-[28px] flex items-center justify-center text-white font-semibold transition-all duration-300 bg-gradient-to-r from-[#2533E8] via-[#8936EB] to-[#DC30A6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-dark hover:opacity-95"
              aria-label="返回首页"
            >
              返回首页
            </Link>
          </div>
          <div className="text-left">
            <div className="font-medium text-sm sm:text-base md:text-[22px] lg:text-[24px]">
              <span className="text-brand-text-primary">已有账号 </span>
              <button
                type="button"
                onClick={() => setViewMode('login')}
                className="text-gradient-purple-pink py-2 transition-opacity duration-150 hover:opacity-80 focus:outline-none"
                aria-label="去登录"
              >
                去登录
              </button>
            </div>
          </div>
        </>
      );
    }

    // Default to login form
    return (
      <>
        <div className="mb-6 md:mb-[45px]">
          <h2 className="text-left text-3xl md:text-[64px] font-bold text-brand-text-primary md:whitespace-nowrap">
            登录快连账户
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Username Input Field */}
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
              className="appearance-none rounded-none relative block w-full bg-transparent border-none text-base md:text-[30px] leading-normal md:leading-[40px] text-brand-text-primary placeholder:text-input-icon-placeholder placeholder:text-base md:placeholder:text-[30px] focus:outline-none focus:ring-0 focus:border-transparent h-full"
              placeholder="用户名或邮箱"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (usernameError && e.target.value) setUsernameError(false);
              }}
            />
          </div>

          {/* Password Input Field */}
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
              className="appearance-none rounded-none relative block w-full bg-transparent border-none text-base md:text-[30px] leading-normal md:leading-[40px] text-brand-text-primary placeholder:text-input-icon-placeholder placeholder:text-base md:placeholder:text-[30px] focus:outline-none focus:ring-0 focus:border-transparent h-full"
              placeholder="密码"
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
              aria-label={showPassword ? 'Hide password' : 'Show password'}
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

          {/* Login Button */}
          <div className="w-full mb-4 md:mb-[30px]">
            <button
              type="submit"
              className="group relative w-full h-14 md:h-[7.5rem] rounded-full text-lg md:text-[28px] flex items-center justify-center text-white font-semibold transition-all duration-300 bg-gradient-to-r from-brand-gradient-from to-brand-gradient-to focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-dark hover:opacity-95"
              aria-label="登录账户"
            >
              登录
            </button>
          </div>

          {/* Links under the button */}
          <div className="flex flex-row items-center justify-between mt-6 md:mt-[40px]">
            <button
              type="button"
              onClick={() => setViewMode('forgotPassword')}
              className="font-medium text-sm sm:text-base md:text-[22px] lg:text-[24px] text-gradient-purple-pink py-2 transition-opacity duration-150 hover:opacity-80 focus:outline-none"
              aria-label="忘记密码"
            >
              忘记密码?
            </button>
            <button
              type="button"
              onClick={() => setViewMode('register')}
              className="font-medium text-sm sm:text-base md:text-[22px] lg:text-[24px] text-gradient-purple-pink py-2 transition-opacity duration-150 hover:opacity-80 focus:outline-none"
              aria-label="注册账户"
            >
              注册账户
            </button>
          </div>
        </form>
      </>
    );
  };

  return (
    <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)] overflow-y-auto flex items-center justify-center py-8 px-4 sm:py-12 sm:px-6 lg:px-8 bg-slate-50">
      {/* Card Wrapper: Constrains width, centers. Shadow and background removed. */}
      <div className="w-full max-w-container-wide mx-auto rounded-xl overflow-hidden">
        {/* Main login layout: flex-col for mobile, grid for md+ */}
        <div className="flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-0">
          {/* Illustration area: Visible on all screens, ordered first on mobile */}
          <div className="flex order-1 md:order-none flex-col items-center justify-center p-4 sm:p-6 md:p-12 mb-6 md:mb-0">
            <img
              className="max-w-full h-auto block object-contain max-h-[200px] sm:max-h-[250px] md:max-h-full"
              src="/assets/login_info.8a76c6cc.png"
              alt="Login illustration"
            />
          </div>
          {/* Form area: Ordered second on mobile */}
          <div className="order-2 md:order-none pt-0 pb-6 sm:pb-8 md:py-12 px-4 sm:px-6 md:px-8 flex flex-col justify-center">
            <div className="w-full">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
