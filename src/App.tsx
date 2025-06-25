import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ReferralPage from './pages/ReferralPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
// Removed: import TravelPlannerPage from './pages/TravelPlannerPage';
import NotFoundPage from './pages/NotFoundPage';
import LanguageEffect from './components/LanguageEffect';

function App() {
  return (
    <Router>
      <LanguageEffect />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/referral" element={<ReferralPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Removed: <Route path="/travel-planner" element={<TravelPlannerPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;