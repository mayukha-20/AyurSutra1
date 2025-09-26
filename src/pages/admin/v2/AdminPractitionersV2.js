import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loader from '../../../components/Loader';

const AdminPractitionersV2 = () => {
  const [practitioners, setPractitioners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchPractitioners();
  }, [filter]);

  const fetchPractitioners = async () => {
    try {
      setLoading(true);
      const url = filter ? `/api/v2/practitioners?status=${filter}` : '/api/v2/practitioners';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch practitioners');
      }
      const data = await response.json();
      setPractitioners(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (practitionerId, newStatus) => {
    try {
      const response = await fetch(`/api/v2/practitioners/${practitionerId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!response.ok) {
        throw new Error('Failed to update practitioner status');
      }
      fetchPractitioners();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500 text-center">Error: {error}</div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
<h1 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Practitioners</h1>
        <div className="flex items-center space-x-2">
          <label className="text-sm text-gray-700 dark:text-gray-300">Filter:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded px-2 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="rejected">Rejected</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {practitioners.map((p) => (
              <tr key={p._id}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">{p.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">{p.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    p.status === 'active' ? 'bg-green-100 text-green-800' :
                    p.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    p.status === 'rejected' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {p.status ? p.status.charAt(0).toUpperCase() + p.status.slice(1) : 'Pending'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  {p.status === 'pending' && (
                    <>
                      <button onClick={() => handleStatusChange(p._id, 'active')} className="px-3 py-1 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700">Approve</button>
                      <button onClick={() => handleStatusChange(p._id, 'rejected')} className="px-3 py-1 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700">Reject</button>
                    </>
                  )}
                  {p.status === 'active' && (
                    <button onClick={() => handleStatusChange(p._id, 'inactive')} className="px-3 py-1 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700">Deactivate</button>
                  )}
                  {p.status === 'rejected' && (
                    <button onClick={() => handleStatusChange(p._id, 'active')} className="px-3 py-1 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700">Activate</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default AdminPractitionersV2;
