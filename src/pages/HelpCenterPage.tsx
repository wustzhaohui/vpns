
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import HelpCenterHeader from '@/components/helpcenter/HelpCenterHeader';
import HelpCenterFooter from '@/components/helpcenter/HelpCenterFooter';

// Icons for the main content (category cards)
const NewHelpDocumentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M946.511127 0H170.654255C89.181091 0 46.545455 42.635636 46.545455 124.1088v747.743418l1.508072-11.357091A149.317818 149.317818 0 0 0 46.545455 881.645382c0 81.789673 52.093673 133.901964 133.883345 133.901963h754.706618A42.319127 42.319127 0 0 0 977.454545 973.228218V30.943418C977.454545 18.953309 958.519855 0 935.135418 0h11.357091zM314.330764 59.056873h183.761454v384.223418l-93.351563-42.300509-90.409891 42.300509V59.056873z m604.066909 897.4336H169.071709a63.488 63.488 0 1 1 0-126.938764h749.325964v126.938764z m0-185.995637H169.071709c-22.714182 0-44.2368 5.12-63.488 14.261528V115.581673c0-38.521018 20.945455-56.5248 53.694836-56.5248h98.843928V513.303273c0 7.801018 3.835345 14.447709 10.612363 18.338909 6.7584 3.872582 14.429091 3.853964 21.187491-0.055855l103.200582-60.043636a20.591709 20.591709 0 0 1 21.001309-0.167564l108.674327 61.011782c6.7584 3.798109 14.354618 3.723636 21.038546-0.186182 6.702545-3.909818 10.482036-10.519273 10.482036-18.245818V59.038255h364.078546v711.437963z"
      fill="currentColor"
    ></path>
  </svg>
);

interface Category {
  id: string;
  titleKey: string;
  descriptionKey: string;
  authorsKey: string;
  articleCountKey: string;
  link: string;
}

const cardAvatarPaths = [
  '/assets/avatar-01.png',
  '/assets/avatar-02.jpg',
  '/assets/avatar-03.jpg',
];

const HelpCenterPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get<{ categories: Category[] }>('/data/help.json');
        setCategories(response.data.categories);
        setError(null);
      } catch (err) {
        setError('Failed to load help center categories.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);
  
  const useLargeFont =
    i18n.language.startsWith('zh') || i18n.language.startsWith('zh-Hant');

  const heroTitleFontSize = useLargeFont
    ? 'text-[2.8rem] sm:text-[3.5rem] md:text-[3.8rem]'
    : 'text-[2.5rem] sm:text-[3rem] md:text-[3.2rem]';
  const categoryTitleFontSize = useLargeFont
    ? 'text-[1.8rem] sm:text-[2rem]'
    : 'text-[1.7rem] sm:text-[1.8rem]';
  const categoryDescriptionFontSize = useLargeFont
    ? 'text-[1.5rem] sm:text-[1.6rem]'
    : 'text-[1.4rem] sm:text-[1.5rem]';
  const categoryMetaFontSize = useLargeFont
    ? 'text-[1.3rem] sm:text-[1.4rem]'
    : 'text-[1.2rem] sm:text-[1.3rem]';

  const internalHeaderNavFontSize = useLargeFont
    ? 'text-[1.7rem]'
    : 'text-[1.6rem]';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HelpCenterHeader
        t={t}
        heroTitleFontSize={heroTitleFontSize}
        internalHeaderNavFontSize={internalHeaderNavFontSize}
      />

      <main className="flex-grow bg-transparent -mt-[10rem] relative z-10">
        <section className="bg-transparent pt-0 pb-8 md:pb-10 flex-grow">
          <div className="main-container mx-auto px-4 sm:px-6 lg:px-0 max-w-[960px]">
            {loading && <p className="text-center text-gray-500">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {!loading && !error && categories.map((category) => (
              <a
                key={category.id}
                href={category.link}
                target={category.link.startsWith('http') ? '_blank' : '_self'}
                rel={
                  category.link.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="flex flex-col items-start md:flex-row md:items-start bg-white p-8 rounded-lg shadow-md mb-4 md:mb-5 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-purple-light"
              >
                <div className="flex-shrink-0 bg-blue-500 w-[40px] h-[40px] md:w-[86px] md:h-[86px] rounded-md mb-4 md:mb-0 md:mr-8 flex items-center justify-center">
                  <NewHelpDocumentIcon className="w-6 h-6 md:w-11 md:h-11 text-white" />
                </div>
                <div className="flex-grow text-left md:text-left">
                  <h3
                    className={`${categoryTitleFontSize} text-brand-text-primary mb-1 sm:mb-1.5 font-medium`}
                  >
                    {t(category.titleKey)}
                  </h3>
                  {t(category.descriptionKey) && (
                    <p
                      className={`${categoryDescriptionFontSize} text-gray-600 mb-2 sm:mb-2 leading-relaxed line-clamp-2`}
                    >
                      {t(category.descriptionKey)}
                    </p>
                  )}
                  <div
                    className={`flex items-center justify-start ${categoryMetaFontSize} text-gray-500`}
                  >
                    <div className="flex -space-x-2 mr-2 sm:mr-2.5">
                      {cardAvatarPaths.map((path, idx) => (
                        <img
                          key={idx}
                          className="inline-block h-5 w-5 sm:h-[22px] sm:w-[22px] rounded-full ring-1 ring-white"
                          src={path}
                          alt={t('helpCenterPage.categories.0.avatarAlt', {
                            name: `Team Member ${idx + 1}`,
                          })}
                        />
                      ))}
                    </div>
                    <span className="mr-2 sm:mr-2.5">
                      {t(category.authorsKey)}
                    </span>
                    <span className="mr-1 sm:mr-1.5">•</span>
                    <span>{t(category.articleCountKey)}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <HelpCenterFooter />
    </div>
  );
};

export default HelpCenterPage;
