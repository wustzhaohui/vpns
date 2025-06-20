import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-bold text-brand-purple mb-4">404</h1>
      <h2 className="text-4xl font-semibold text-brand-text-primary mb-6">Oops! Page Not Found.</h2> {/* Changed text-gray-700 to text-brand-text-primary */}
      <p className="text-gray-500 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="button-gradient"
      >
        <span role="img" aria-hidden="true" className="mr-2">🏠</span>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;