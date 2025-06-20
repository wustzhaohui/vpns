import React, { useState, useEffect, useCallback } from 'react';

// SVG Icons for Carousel Navigation
const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    />
  </svg>
);

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

interface Review {
  avatar: string;
  name: string;
  title: string;
  text: string;
}

const reviews: Review[] = [
  {
    avatar: 'https://picsum.photos/seed/user1/100/100',
    name: '芒果味的小仙女',
    title: '个人用户',
    text: '快连这个软件非常良心，界面操作简便不繁琐一用就会了，链接速度稳定不断线，看视频打游戏都很好用，偶尔上ins找我的男神表白，太爽了。',
  },
  {
    avatar: 'https://picsum.photos/seed/user2/100/100',
    name: '王女士',
    title: '设计师, 上海',
    text: '用了快连VPN之后，网速真的快了很多，看视频再也不卡了！非常推荐！',
  },
  {
    avatar: 'https://picsum.photos/seed/user3/100/100',
    name: '李先生',
    title: '项目经理, 北京',
    text: '界面简洁易用，一键连接非常方便，全球节点很多，客服也很专业。',
  },
  {
    avatar: 'https://picsum.photos/seed/user4/100/100',
    name: '小张',
    title: '学生, 广州',
    text: '安全性和稳定性都很好，价格也合理，对于我们学生党来说非常友好。',
  },
  {
    avatar: 'https://picsum.photos/seed/user5/100/100',
    name: '匿名用户',
    title: '游戏爱好者',
    text: '打外服游戏延迟低了不少，赞一个！希望多出点活动。',
  },
  {
    avatar: 'https://picsum.photos/seed/user6/100/100',
    name: '第六人',
    title: '测试员',
    text: '第六个评论测试内容，确保桌面端显示正常。',
  },
];

const UserReviewsSection: React.FC = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const nextReview = useCallback(() => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }, []); // reviews.length is constant here

  const prevReview = () => {
    setCurrentReviewIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const selectReview = (index: number) => {
    setCurrentReviewIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 5000); // Auto-switch every 5 seconds
    return () => clearInterval(timer);
  }, [nextReview]);

  const getDesktopDisplayedReviews = () => {
    const numReviews = reviews.length;
    if (numReviews === 0) return [];
    if (numReviews <= 5)
      return reviews.map((review, index) => ({
        ...review,
        originalIndex: index,
      }));

    const displayed = [];
    for (let i = -2; i <= 2; i++) {
      let reviewIndex = (currentReviewIndex + i + numReviews) % numReviews;
      displayed.push({ ...reviews[reviewIndex], originalIndex: reviewIndex });
    }
    return displayed;
  };

  const desktopDisplayedReviews = getDesktopDisplayedReviews();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 max-w-container-wide text-center">
        <h2 className="text-[2.8rem] sm:text-[3.5rem] md:text-[4.2rem] lg:text-[5rem] xl:text-[6.4rem] font-bold text-brand-text-primary mb-12">
          用户评价
        </h2>

        {reviews.length > 0 && (
          <div className="relative max-w-3xl mx-auto">
            <p className="text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem] leading-relaxed text-gray-700 mb-10 min-h-[8rem] md:min-h-[10rem] flex items-center justify-center px-4 md:px-8">
              {reviews[currentReviewIndex].text}
            </p>

            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevReview}
                className="p-2 text-gray-400 hover:text-brand-purple transition-colors shrink-0"
                aria-label="Previous review"
              >
                <ArrowLeftIcon className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              {/* Mobile: Scrollable avatar container */}
              <div className="flex-grow overflow-x-auto whitespace-nowrap px-2 md:hidden">
                <div className="flex items-end justify-start gap-x-[2rem] sm:gap-x-[3rem] py-2">
                  {reviews.map((review, index) => (
                    <button
                      key={`mobile-${index}`}
                      onClick={() => selectReview(index)}
                      aria-label={`Select review from ${review.name}`}
                      className={`transition-all duration-300 ease-in-out rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 flex-shrink-0`}
                    >
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className={`object-cover rounded-full cursor-pointer
                          ${
                            index === currentReviewIndex
                              ? 'w-16 h-16 sm:w-20 sm:h-20 shadow-lg'
                              : 'w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100'
                          }
                        `}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Desktop: Centered, non-scrollable 5 avatars */}
              <div className="hidden md:flex flex-grow items-end justify-center gap-x-[4rem] lg:gap-x-[7rem] py-2">
                {desktopDisplayedReviews.map((review) => (
                  <button
                    key={`desktop-${review.originalIndex}`}
                    onClick={() => selectReview(review.originalIndex)}
                    aria-label={`Select review from ${review.name}`}
                    className={`transition-all duration-300 ease-in-out rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 flex-shrink-0`}
                  >
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className={`object-cover rounded-full cursor-pointer
                          ${
                            review.originalIndex === currentReviewIndex
                              ? 'w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] shadow-lg'
                              : 'w-[6rem] h-[6rem] lg:w-[8rem] lg:h-[8rem] opacity-60 hover:opacity-100'
                          }
                        `}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={nextReview}
                className="p-2 text-gray-400 hover:text-brand-purple transition-colors shrink-0"
                aria-label="Next review"
              >
                <ArrowRightIcon className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            <h4 className="text-[1.5rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] font-semibold text-brand-text-primary">
              {reviews[currentReviewIndex].name}
            </h4>
            <p className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.8rem] text-gray-500">
              {reviews[currentReviewIndex].title}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default UserReviewsSection;
