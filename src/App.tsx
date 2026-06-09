import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './Layout';
import { Loader2 } from 'lucide-react';

const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Cart = lazy(() => import('./pages/Cart'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Profile = lazy(() => import('./pages/Profile'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));

const PageLoader = () => (
  <div className="flex-1 flex items-center justify-center min-h-[60vh]">
    <Loader2 className="w-8 h-8 text-neon-purple animate-spin" />
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-background flex flex-col items-center justify-center"><Loader2 className="w-10 h-10 text-neon-purple animate-spin" /></div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <Suspense fallback={<PageLoader />}><Home /></Suspense>
            } />
            <Route path="catalog" element={
              <Suspense fallback={<PageLoader />}><Catalog /></Suspense>
            } />
            <Route path="product/:id" element={
              <Suspense fallback={<PageLoader />}><ProductDetails /></Suspense>
            } />
            <Route path="cart" element={
              <Suspense fallback={<PageLoader />}><Cart /></Suspense>
            } />
            <Route path="wishlist" element={
              <Suspense fallback={<PageLoader />}><Wishlist /></Suspense>
            } />
            <Route path="login" element={
              <Suspense fallback={<PageLoader />}><Login /></Suspense>
            } />
            <Route path="signup" element={
              <Suspense fallback={<PageLoader />}><Signup /></Suspense>
            } />
            <Route path="forgot-password" element={
              <Suspense fallback={<PageLoader />}><ForgotPassword /></Suspense>
            } />
            <Route path="profile" element={
              <Suspense fallback={<PageLoader />}><Profile /></Suspense>
            } />
            <Route path="about" element={
              <Suspense fallback={<PageLoader />}><About /></Suspense>
            } />
            <Route path="contact" element={
              <Suspense fallback={<PageLoader />}><Contact /></Suspense>
            } />
            <Route path="privacy" element={
              <Suspense fallback={<PageLoader />}><PrivacyPolicy /></Suspense>
            } />
            <Route path="terms" element={
              <Suspense fallback={<PageLoader />}><TermsConditions /></Suspense>
            } />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
