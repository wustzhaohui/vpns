import React from 'react';

// New SVG Icon for PC
const NewWindowsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Spread props to allow className, etc.
    fill="currentColor" // Ensure fill is applied if not specified in props
  >
    <path d="M523.8 191.4v288.9h382V128.1zM523.8 833.6l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zM120.1 770.6L443 823.2V543.8H120.1z"></path>
  </svg>
);

const AppleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 1024 1024"
    fill="currentColor"
    {...props}
  >
    <path d="M747.4 535.7c-0.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7z" />
    <path d="M642.3 230.7c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z" />
  </svg>
);

// New SVG Icon for Android
const NewAndroidIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="currentColor"
  >
    <path d="M270.1 741.7c0 23.4 19.1 42.5 42.6 42.5h48.7v120.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V784.1h85v120.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V784.1h48.7c23.5 0 42.6-19.1 42.6-42.5V346.4h-486v395.3zM627.2 141.6l44.9-65c2.6-3.8 2-8.9-1.5-11.4-3.5-2.4-8.5-1.2-11.1 2.6l-46.6 67.6c-30.7-12.1-64.9-18.8-100.8-18.8-35.9 0-70.1 6.7-100.8 18.8l-46.6-67.5c-2.6-3.8-7.6-5.1-11.1-2.6-3.5 2.4-4.1 7.4-1.5 11.4l44.9 65c-71.4 33.2-121.4 96.1-127.8 169.6h486c-6.6-73.6-56.7-136.5-128-169.7zM409.5 244.1c-14.8 0-26.9-12-26.9-26.9 0-14.8 12-26.9 26.9-26.9 14.8 0 26.9 12 26.9 26.9-0.1 14.9-12.1 26.9-26.9 26.9z m208.4 0c-14.8 0-26.9-12-26.9-26.9 0-14.8 12-26.9 26.9-26.9 14.8 0 26.9 12 26.9 26.9-0.1 14.9-12.1 26.9-26.9 26.9zM841.3 344.8c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V400.1c0.1-30.6-24.3-55.3-54.6-55.3zM182.7 344.8c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V400.1c0-30.6-24.5-55.3-54.6-55.3z"></path>
  </svg>
);

const trialItems = [
  {
    platform: 'PC 版下载',
    icon: (
      <NewWindowsIcon className="w-[2.5rem] h-[2.5rem] sm:w-[2.8rem] sm:h-[2.8rem] md:w-[3rem] md:h-[3rem] mr-2 sm:mr-3" />
    ),
    gradient: 'from-blue-500 to-fuchsia-500',
  },
  {
    platform: 'iOS 版下载',
    icon: (
      <AppleIcon className="w-[2.5rem] h-[2.5rem] sm:w-[2.8rem] sm:h-[2.8rem] md:w-[3rem] md:h-[3rem] mr-2 sm:mr-3" />
    ),
    gradient: 'from-blue-500 to-pink-500',
  },
  {
    platform: '安卓版下载',
    icon: (
      <NewAndroidIcon className="w-[2.5rem] h-[2.5rem] sm:w-[2.8rem] sm:h-[2.8rem] md:w-[3rem] md:h-[3rem] mr-2 sm:mr-3" />
    ),
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    platform: 'Mac 版下载',
    icon: (
      <AppleIcon className="w-[2.5rem] h-[2.5rem] sm:w-[2.8rem] sm:h-[2.8rem] md:w-[3rem] md:h-[3rem] mr-2 sm:mr-3" />
    ),
    gradient: 'from-blue-500 to-pink-500',
  },
];

const FreeTrialSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white text-center">
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 max-w-container-wide">
        <h2 className="text-[2.8rem] sm:text-[3.5rem] md:text-[4.2rem] lg:text-[5rem] xl:text-[6.4rem] font-bold text-brand-text-primary mb-12 md:mb-16">
          立即免费试用
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {trialItems.map((item, index) => (
            <div
              key={item.platform}
              className="flex flex-col items-center"
            >
              <img
                src={`/assets/test-0${index + 1}.png`}
                alt={`${item.platform} app preview`}
                className="w-full object-contain rounded-lg mb-8 sm:mb-12 md:mb-16"
                aria-label={`${item.platform} app preview`}
              />
              <button
                className={`w-full max-w-[28rem] flex items-center justify-center text-white px-6 h-[6rem] sm:h-[6.5rem] md:h-[7rem] text-[1.5rem] sm:text-[1.7rem] md:text-[1.9rem] lg:text-[2rem] xl:text-[2.2rem] rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-r ${item.gradient}`}
              >
                {item.icon}
                {item.platform}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeTrialSection;
