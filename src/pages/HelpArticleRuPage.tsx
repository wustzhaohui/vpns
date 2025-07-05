import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import HelpCenterHeader from '@/components/helpcenter/HelpCenterHeader';
import HelpCenterFooter from '@/components/helpcenter/HelpCenterFooter';

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

interface ArticleData {
  title: string;
  author: string;
  authorAvatar: string;
  updated: string;
  breadcrumb: { name: string; link: string }[];
  content: string;
}

const HelpArticleRuPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { articleId } = useParams<{ articleId: string }>();
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await axios.get<ArticleData>(
          `/data/help-ru-article-${articleId}.json`
        );
        setArticle(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to load article content.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (articleId) {
      fetchArticle();
    }
  }, [articleId]);

  const useLargeFont =
    i18n.language.startsWith('zh') || i18n.language.startsWith('zh-Hant');
  const heroTitleFontSize = useLargeFont
    ? 'text-[2.8rem] sm:text-[3.5rem] md:text-[3.8rem]'
    : 'text-[2.5rem] sm:text-[3rem] md:text-[3.2rem]';
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

      <main className="flex-grow  -mt-[12rem] md:-mt-[16rem] relative z-10">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-0 max-w-[800px] text-left">
          {loading && (
            <p className="text-center text-gray-500 py-10">
              Loading article...
            </p>
          )}
          {error && <p className="text-center text-red-500 py-10">{error}</p>}

          {article && (
            <>
              <nav
                className="mb-6 flex items-center text-[1.4rem] text-gray-500 flex-wrap"
                aria-label="Breadcrumb"
              >
                {article.breadcrumb.map((crumb, index) => (
                  <div
                    key={index}
                    className="flex items-center"
                  >
                    <Link
                      to={crumb.link}
                      className="text-gray-400 hover:text-brand-purple transition-colors"
                    >
                      {crumb.name}
                    </Link>
                    <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2 flex-shrink-0" />
                  </div>
                ))}
                <span className="text-gray-700 font-medium truncate">
                  {article.title}
                </span>
              </nav>

              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md">
                <article>
                  <header className="mb-8 pb-8 border-b border-gray-200">
                    <h1 className="text-[1.6rem] md:text-[3.2rem] font-bold text-brand-text-primary mb-4 leading-tight">
                      {article.title}
                    </h1>
                    <div className="flex items-center text-gray-500 text-sm">
                      <img
                        src={article.authorAvatar}
                        alt={article.author}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        Written by{' '}
                        <span className="font-semibold text-gray-700">
                          {article.author}
                        </span>
                        <br />
                        <span className="text-xs">{article.updated}</span>
                      </div>
                    </div>
                  </header>
                  <div
                    className="article-content"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </article>
              </div>
            </>
          )}
        </div>
      </main>
      <HelpCenterFooter />
    </div>
  );
};

export default HelpArticleRuPage;
