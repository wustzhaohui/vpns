import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

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
  nameKey: string; // Key for name translation
  titleKey: string; // Key for title translation
  textKey: string; // Key for text translation
}

// Avatars remain, text content will be fetched via translation keys
const reviewDataStructure: Review[] = Array(6)
  .fill(null)
  .map((_, index) => ({
    avatar: `https://picsum.photos/seed/user${index + 1}/100/100`,
    nameKey: `homePage.userReviews.reviews.${index}.name`,
    titleKey: `homePage.userReviews.reviews.${index}.title`,
    textKey: `homePage.userReviews.reviews.${index}.text`,
  }));

const UserReviewsSection: React.FC = () => {
  const { t } = useTranslation();
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const translatedReviews = reviewDataStructure.map((review) => ({
    ...review,
    name: t(review.nameKey),
    title: t(review.titleKey),
    text: t(review.textKey),
  }));

  const nextReview = useCallback(() => {
    setCurrentReviewIndex(
      (prevIndex) => (prevIndex + 1) % translatedReviews.length
    );
  }, [translatedReviews.length]);

  const prevReview = () => {
    setCurrentReviewIndex(
      (prevIndex) =>
        (prevIndex - 1 + translatedReviews.length) % translatedReviews.length
    );
  };

  const selectReview = (index: number) => {
    setCurrentReviewIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 5000);
    return () => clearInterval(timer);
  }, [nextReview]);

  const getDesktopDisplayedReviews = () => {
    const numReviews = translatedReviews.length;
    if (numReviews === 0) return [];
    // Ensure this logic correctly handles originalIndex if needed for direct mapping
    // For now, it just maps over translatedReviews directly for display purposes
    if (numReviews <= 5)
      return translatedReviews.map((review, index) => ({
        ...review,
        originalIndex: index,
      }));

    const displayed = [];
    for (let i = -2; i <= 2; i++) {
      let reviewIndex = (currentReviewIndex + i + numReviews) % numReviews;
      displayed.push({
        ...translatedReviews[reviewIndex],
        originalIndex: reviewIndex,
      });
    }
    return displayed;
  };

  const desktopDisplayedReviews = getDesktopDisplayedReviews();
  const currentReview = translatedReviews[currentReviewIndex];

  const sectionTitleFontSize = 'text-[2.8rem] md:text-[4rem] lg:text-[4.5rem]';
  const reviewTextFontSize = 'text-[1.6rem] lg:text-[1.8rem]';
  const reviewerNameFontSize = 'text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]';

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 max-w-container-wide text-center">
        <h2
          className={`${sectionTitleFontSize} font-bold text-brand-text-primary mb-12`}
        >
          {t('homePage.userReviews.title')}
        </h2>

        {currentReview && (
          <div className="relative max-w-3xl mx-auto">
            <p
              className={`${reviewTextFontSize} leading-relaxed text-gray-700 mb-10 min-h-[8rem] md:min-h-[10rem] flex items-center justify-center px-4 md:px-8`}
            >
              {currentReview.text}
            </p>

            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevReview}
                className="p-2 text-gray-400 hover:text-brand-purple transition-colors shrink-0"
                aria-label={t('homePage.userReviews.prevReview')}
              >
                <ArrowLeftIcon className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              <div className="flex-grow overflow-x-auto whitespace-nowrap px-2 md:hidden">
                <div className="flex items-end justify-start gap-x-[2rem] sm:gap-x-[3rem] py-2">
                  {translatedReviews.map((review, index) => (
                    <button
                      key={`mobile-${index}`}
                      onClick={() => selectReview(index)}
                      aria-label={t('homePage.userReviews.selectReview', {
                        name: review.name,
                      })}
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

              <div className="hidden md:flex flex-grow items-end justify-center gap-x-[4rem] lg:gap-x-[7rem] py-2">
                {desktopDisplayedReviews.map(
                  (
                    review // review here already includes translated name, title, text
                  ) => (
                    <button
                      key={`desktop-${review.originalIndex}`}
                      onClick={() => selectReview(review.originalIndex)}
                      aria-label={t('homePage.userReviews.selectReview', {
                        name: review.name,
                      })}
                      className={`transition-all duration-300 ease-in-out rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 flex-shrink-0`}
                    >
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className={`object-cover rounded-full cursor-pointer
                          ${
                            review.originalIndex === currentReviewIndex
                              ? 'w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] shadow-lg'
                              : 'w-[5.5rem] h-[5.5rem] lg:w-[7rem] lg:h-[7rem] opacity-60 hover:opacity-100'
                          }
                        `}
                      />
                    </button>
                  )
                )}
              </div>

              <button
                onClick={nextReview}
                className="p-2 text-gray-400 hover:text-brand-purple transition-colors shrink-0"
                aria-label={t('homePage.userReviews.nextReview')}
              >
                <ArrowRightIcon className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            <h4
              className={`${reviewerNameFontSize} font-semibold text-brand-text-primary`}
            >
              {currentReview.name}
            </h4>
            <p className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.6rem]">
              {currentReview.title}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default UserReviewsSection;
