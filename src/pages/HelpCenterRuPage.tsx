
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HelpCenterHeader from '@/components/helpcenter/HelpCenterHeader';
import HelpCenterFooter from '@/components/helpcenter/HelpCenterFooter';

const HelpCategoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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

const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

interface HelpRuData {
  pageTitle: string;
  description: string;
  authors: {
    names: string;
    avatars: string[];
  };
  articleCount: string;
  categories: {
    id: string;
    title: string;
    articles: {
      id: string;
      title: string;
      link: string;
    }[];
  }[];
}

const HelpCenterRuPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState<HelpRuData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<HelpRuData>('/data/help-ru.json');
        setData(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to load help center content.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const useLargeFont = i18n.language.startsWith('zh') || i18n.language.startsWith('zh-Hant');
  const heroTitleFontSize = useLargeFont ? 'text-[2.8rem] sm:text-[3.5rem] md:text-[3.8rem]' : 'text-[2.5rem] sm:text-[3rem] md:text-[3.2rem]';
  const internalHeaderNavFontSize = useLargeFont ? 'text-[1.7rem]' : 'text-[1.6rem]';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HelpCenterHeader
        t={t}
        heroTitleFontSize={heroTitleFontSize}
        internalHeaderNavFontSize={internalHeaderNavFontSize}
      />

      <main className="flex-grow bg-transparent -mt-[10rem] relative z-10">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-0 max-w-[960px]">
          {loading && <p className="text-center text-gray-500">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          
          {data && (
            <>
              {/* Breadcrumbs & Title Section */}
              <div className="text-left mb-6">
                <nav className="flex items-center text-[1.4rem] text-gray-400 mb-6" aria-label="Breadcrumb">
                  <Link to="/help" className="hover:text-brand-purple transition-colors">All Collections</Link>
                  <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-1" />
                  <span className="font-medium text-gray-600">{data.pageTitle}</span>
                </nav>
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-blue-500 w-[56px] h-[56px] rounded-lg flex items-center justify-center">
                        <HelpCategoryIcon className="w-9 h-9 text-white" />
                    </div>
                    <div>
                        <h1 className="text-[3.2rem] font-bold text-brand-text-primary">{data.pageTitle}</h1>
                        <p className="text-gray-600 mt-1 text-[1.6rem]">{data.description}</p>
                        <div className="flex items-center text-[1.4rem] text-gray-500 mt-2">
                            <div className="flex -space-x-2 mr-2">
                                {data.authors.avatars.map((avatar, index) => (
                                    <img key={index} src={avatar} alt={`Author ${index + 1}`} className="inline-block h-6 w-6 rounded-full ring-2 ring-white" />
                                ))}
                            </div>
                            <span>{data.authors.names}</span>
                            <span className="mx-2">•</span>
                            <span>{data.articleCount}</span>
                        </div>
                    </div>
                </div>
              </div>

              {/* Articles List */}
              <div className="space-y-4">
                {data.categories.map((category) => (
                  <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden p-[1.2rem]">
                    {category.title && (
                      <div className="border-b border-gray-200">
                        <h2 className="text-[2.2rem] font-semibold text-brand-text-primary pb-[2.4rem]">{category.title}</h2>
                      </div>
                    )}
                    <ul className="space-y-0 pt-[1.2rem]">
                      {category.articles.map((article) => (
                        <li key={article.id}>
                          <Link to={article.link} className="flex justify-between items-center group py-[1.2rem] hover:bg-gray-50 transition-colors -mx-[1.2rem] px-[1.2rem]">
                            <span className="text-[1.6rem] text-gray-700 group-hover:text-brand-purple transition-colors">{article.title}</span>
                            <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-brand-purple" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <HelpCenterFooter />
    </div>
  );
};

export default HelpCenterRuPage;
