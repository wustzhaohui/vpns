import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ReferralPage from './pages/ReferralPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import HelpCenterPage from './pages/HelpCenterPage';
import HelpCenterZhPage from './pages/HelpCenterZhPage';
import HelpCenterRuPage from './pages/HelpCenterRuPage'; // Added
import HelpCenterEnPage from './pages/HelpCenterEnPage'; // Added
import HelpArticlePage from './pages/HelpArticlePage';
import HelpArticleEnPage from './pages/HelpArticleEnPage'; // Added
import HelpArticleRuPage from './pages/HelpArticleRuPage';
import NotFoundPage from './pages/NotFoundPage';
import LanguageEffect from './components/LanguageEffect';

function App() {
  return (
    <Router>
      <LanguageEffect />
      <Routes>
        {/* Help Center pages without shared Layout */}
        <Route
          path="/help"
          element={<HelpCenterPage />}
        />
        <Route
          path="/help/zh"
          element={<HelpCenterZhPage />}
        />
        <Route
          path="/help/ru"
          element={<HelpCenterRuPage />}
        />
        <Route
          path="/help/en"
          element={<HelpCenterEnPage />}
        />
        <Route
          path="/help/article/:articleId"
          element={<HelpArticlePage />}
        />
        <Route
          path="/help/en/article/:articleId"
          element={<HelpArticleEnPage />}
        />
        <Route
          path="/help/ru/article/:articleId"
          element={<HelpArticleRuPage />}
        />

        {/* Other routes use the shared Layout */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route
                  path="/"
                  element={<HomePage />}
                />
                <Route
                  path="/referral"
                  element={<ReferralPage />}
                />
                <Route
                  path="/blog"
                  element={<BlogPage />}
                />
                <Route
                  path="/login"
                  element={<LoginPage />}
                />
                <Route
                  path="*"
                  element={<NotFoundPage />}
                />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
