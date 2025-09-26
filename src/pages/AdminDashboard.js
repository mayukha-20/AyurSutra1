import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();

  const stats = [
    { title: 'Total Centers', value: '24', change: '+3 this month', color: 'bg-blue-500' },
    { title: 'Active Practitioners', value: '156', change: '+12 this month', color: 'bg-green-500' },
    { title: 'Total Patients', value: '2,847', change: '+234 this month', color: 'bg-purple-500' },
    { title: 'Monthly Revenue', value: '4,52,300', change: '+18% from last month', color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Welcome back, {user?.name}! Here's what's happening with your platform.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {stat.title.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.title}
                    </p>
                    <p className="text-xs text-green-600 dark:text-green-400">
                      {stat.change}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Management Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Center Management */}
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Center Management
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Wellness Center Mumbai</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Mumbai, Maharashtra</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                    Verified
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Ayurveda Healing Bangalore</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bangalore, Karnataka</p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-xs">
                    Pending
                  </span>
                </div>
              </div>
              <Link to="/admin/centers" className="w-full mt-4 btn-primary inline-block text-center">
                Manage Centers
              </Link>
            </div>

            {/* Practitioner Management */}
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Practitioner Management
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Dr. Priya Sharma</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">15 years experience</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                    Active
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Dr. Rajesh Kumar</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">12 years experience</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                    Active
                  </span>
                </div>
              </div>
              <Link to="/admin/practitioners" className="w-full mt-4 btn-primary inline-block text-center">
                Manage Practitioners
              </Link>
            </div>

            {/* Recent Activity */}
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Recent Activity
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-white">New center registered</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-white">Practitioner verification completed</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-white">Monthly report generated</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/admin/centers" className="p-3 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors text-center">
                  Add Center
                </Link>
                <Link to="/admin/practitioners" className="p-3 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-100 dark:hover:bg-green-800 transition-colors text-center">
                  Verify Practitioner
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;