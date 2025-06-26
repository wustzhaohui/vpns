import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ReferralPage from './pages/ReferralPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import HelpCenterPage from './pages/HelpCenterPage';
import NotFoundPage from './pages/NotFoundPage';
import LanguageEffect from './components/LanguageEffect';

function App() {
  return (
    <Router>
      <LanguageEffect />
      <Routes>
        {/* Help Center page without shared Layout */}
        <Route path="/help" element={<HelpCenterPage />} />

        {/* Other routes use the shared Layout */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/referral" element={<ReferralPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;