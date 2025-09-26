import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { PageLoader } from './components/Loader';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PatientBooking from './pages/PatientBooking';
import Ritucharya from './pages/Ritucharya';
import AdminDashboard from './pages/AdminDashboard';
import PractitionerDashboard from './pages/PractitionerDashboard';
import ProgressDashboardAyursutra from './pages/ProgressDashboardAyursutra';
import TestCredentials from './pages/TestCredentials';

// Admin V2 Pages (additive)
import AdminCentersV2 from './pages/admin/v2/AdminCentersV2';
import AdminPractitionersV2 from './pages/admin/v2/AdminPractitionersV2';
import AdminDetailedReportV2 from './pages/admin/v2/AdminDetailedReportV2';

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <PageLoader />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Layout Component
const Layout = ({ children, isHomePage = false }) => {
  return (
    <div className={`min-h-screen flex flex-col ${
      isHomePage ? '' : 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50'
    }`}>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="App">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={
                <Layout isHomePage={true}>
                  <Home />
                </Layout>
              } />
              
              <Route path="/login" element={
                <Layout>
                  <Login />
                </Layout>
              } />
              
              <Route path="/signup" element={
                <Layout>
                  <Signup />
                </Layout>
              } />
              
              <Route path="/ritucharya" element={
                <Layout>
                  <Ritucharya />
                </Layout>
              } />
              
              <Route path="/test-credentials" element={
                <Layout>
                  <TestCredentials />
                </Layout>
              } />

              {/* Protected Routes */}
              <Route path="/patient/booking" element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <Layout>
                    <PatientBooking />
                  </Layout>
                </ProtectedRoute>
              } />

              <Route path="/admin/dashboard" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Layout>
                    <AdminDashboard />
                  </Layout>
                </ProtectedRoute>
              } />

              <Route path="/admin/centers" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Layout>
                    <AdminCentersV2 />
                  </Layout>
                </ProtectedRoute>
              } />

              <Route path="/practitioner/dashboard" element={
                <ProtectedRoute allowedRoles={['practitioner']}>
                  <Layout>
                    <PractitionerDashboard />
                  </Layout>
                </ProtectedRoute>
              } />

              <Route path="/admin/practitioners" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Layout>
                    <AdminPractitionersV2 />
                  </Layout>
                </ProtectedRoute>
              } />

              <Route path="/admin/report" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Layout>
                    <AdminDetailedReportV2 />
                  </Layout>
                </ProtectedRoute>
              } />

              <Route path="/patient/progress" element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <Layout>
                    <ProgressDashboardAyursutra />
                  </Layout>
                </ProtectedRoute>
              } />

              {/* Admin V2 routes (additive, non-breaking) */}
              <Route path="/admin/v2/centers" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Layout>
                    <AdminCentersV2 />
                  </Layout>
                </ProtectedRoute>
              } />

              <Route path="/admin/v2/practitioners" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Layout>
                    <AdminPractitionersV2 />
                  </Layout>
                </ProtectedRoute>
              } />

              <Route path="/admin/v2/report" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Layout>
                    <AdminDetailedReportV2 />
                  </Layout>
                </ProtectedRoute>
              } />

              {/* Catch all route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;