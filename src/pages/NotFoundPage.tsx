import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-bold text-brand-purple mb-4">404</h1>
      <h2 className="text-4xl font-semibold text-brand-text-primary mb-6">
        {t('notFoundPage.title')}
      </h2>
      <p className="text-gray-500 mb-8 max-w-md">
        {t('notFoundPage.description')}
      </p>
      <Link
        to="/"
        className="button-gradient"
      >
        <span role="img" aria-hidden="true" className="mr-2">🏠</span>
        {t('notFoundPage.goHomeButton')}
      </Link>
    </div>
  );
};

export default NotFoundPage;