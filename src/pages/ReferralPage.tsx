import React from 'react';

// New SVG Icons
const TelegramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M9.78,18.65l.28,4.17a.89.89,0,0,0,.88.78.78.78,0,0,0,.3-.06L14,21.54l4.76,3.57a.9.9,0,0,0,.6.2.81.81,0,0,0,.54-.18.86.86,0,0,0,.41-.78l1.76-13.63H5.24ZM11.16,16.51,17.29,9.79,21.6,6.38Z" />
    <path d="M22,3.15,3.22,9.68A2.39,2.39,0,0,0,3,14L6.1,15.22l9.78-6.19a.44.44,0,0,1,.56.06.41.41,0,0,1,.07.57l-7.39,6.89.06,0L8,22.36A2.38,2.38,0,0,0,10.7,24l.32,0L14,21.73l4.76,3.57a2.33,2.33,0,0,0,3.32-2.1L24,5.1A2.4,2.4,0,0,0,22,3.15Z" />
  </svg>
);

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0,2c-2.67,0-8,1.34-8,4v2H20V18C20,15.34,14.67,14,12,14Z" />
  </svg>
);

const ReferralPage: React.FC = () => {
  const rewardNotifications = [
    '用户597**89已提现3522元',
    '用户135**60已提现10032元',
    '用户987**89已提现1238元',
    '用户123**89已提现4322元',
    '用户437**56已提现560元',
  ];

  const infoCards = [
    {
      title: '推荐一人可赚 5 元',
      description:
        '每个人有独立的推荐 ID, 新用户首次安装快连时填写您的 ID 即算推荐成功, 过程极其简单;',
      illustrationPlaceholder: (
        <img
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-auto md:h-[80%] object-contain mx-auto md:mx-0 md:ml-auto md:mr-auto rounded-md"
          src="/assets/pro_icon1.png"
          alt="推荐奖励图示"
        ></img>
      ),
    },
    {
      title: '每周额外领取 100 元',
      description:
        '您的推广数量每周达到 100 人时, 除去除基础推荐奖励另外还可以免费赚取额外 100 元奖励;',
      illustrationPlaceholder: (
        <img
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-auto md:h-[80%] object-contain mx-auto md:mx-0 md:ml-auto md:mr-auto rounded-md"
          src="/assets/pro_icon2.png"
          alt="每周额外奖励图示"
        ></img>
      ),
    },
    {
      title: '周周结算提现简单',
      description:
        '无需提供身份证等隐私信息, 所有的收入均可提现至支付宝或银行卡;',
      illustrationPlaceholder: (
        <img
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-auto md:h-[80%] object-contain mx-auto md:mx-0 md:ml-auto md:mr-auto rounded-md"
          src="/assets/pro_icon3.png"
          alt="结算提现图示"
        ></img>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center min-h-screen pt-[80px] md:pt-[100px] text-white overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url(/assets/home_bg_pc.png)' }}
      >
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col w-full max-w-container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="text-center md:text-left pt-10 md:pt-0">
              <h1 className="text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.4rem] font-bold mb-4 sm:mb-5 md:mb-8 leading-tight">
                推广赚<span className="text-yellow-400">现金</span>
              </h1>
              <p className="text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem] leading-relaxed text-purple-200/90 mb-6 sm:mb-7 md:mb-10 max-w-auto mx-auto md:mx-0">
                推荐一人安装，最高可赚 5 元，每周还能领取 100
                元额外奖励，可提现至支付宝或银行卡。注册推广员无需提供身份证等隐私信息，提供推广教程，简单易上手！
              </p>
              <h2 className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[3.2rem] font-semibold mb-4 sm:mb-5 md:mb-8">
                扫码立即成为推广员
              </h2>
              <div className="flex flex-col items-center md:items-start max-w-md mx-auto md:mx-0">
                <div className="bg-white p-3 rounded-xl shadow-2xl mb-4 w-[24rem] h-[30rem] sm:w-[28rem] sm:h-[35rem] md:w-[34rem] md:h-[43rem] flex items-center justify-center">
                  <img
                    src="/assets/pro_telegram.67630c52.png"
                    alt="Telegram QR Code"
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Right Content - Illustration Placeholder with Reward Notifications */}
            <div className="hidden md:flex flex-col items-center justify-center relative min-h-[500px] md:min-h-[600px]">
              <div className="w-full h-full backdrop-blur-sm flex items-center justify-center text-center p-8 relative">
                <img
                  src="/assets/pro_index.gif"
                  alt="推广奖励动画图示"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Card Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 max-w-container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center h-full"
              >
                {/* Text Content Area (Left) */}
                <div className="md:w-4/5 text-center md:text-left mb-6 md:mb-0 md:pr-6">
                  <h3 className="text-[1.8rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] font-bold text-brand-text-primary mb-4">
                    {card.title}
                  </h3>
                  <p className="text-[1.4rem] sm:text-[1.5rem] md:text-[1.6rem] lg:text-[1.8rem] leading-relaxed text-gray-600">
                    {card.description}
                  </p>
                </div>
                {/* Illustration Placeholder Area (Right) */}
                <div className="md:w-2/5  flex items-center justify-center md:h-full">
                  {card.illustrationPlaceholder}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReferralPage;
