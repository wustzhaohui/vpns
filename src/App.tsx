import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ReferralPage from './pages/ReferralPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
// import ForgotPasswordPage from './pages/ForgotPasswordPage'; // Removed
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/referral" element={<ReferralPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */} {/* Removed */}
          {/* <Route path="/register" element={<RegisterPage />} /> */} {/* Removed RegisterPage route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;