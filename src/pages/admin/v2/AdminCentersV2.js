import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loader from '../../../components/Loader';
import AddCenterModal from '../../../components/admin/AddCenterModal';

const AdminCentersV2 = () => {
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    const loadCenters = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/v2/centers');
        if (!response.ok) {
          throw new Error('Failed to fetch centers');
        }
        const data = await response.json();
        setCenters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCenters();
  }, []);

  const fetchCenters = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/v2/centers');
      if (!response.ok) {
        throw new Error('Failed to fetch centers');
      }
      const data = await response.json();
      setCenters(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (centerId, newStatus) => {
    try {
      const response = await fetch(`/api/v2/centers/${centerId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ verified: newStatus === 'active' }),
      });

      if (!response.ok) {
        throw new Error('Failed to update center status');
      }

      fetchCenters();
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
      <div className="p-4 text-red-500 text-center">
        Error: {error}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto p-4"
    >
      <div className="flex justify-between items-center mb-6">
<h1 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Centers</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-6 py-3 bg-[#8D6E63] text-white rounded-md hover:bg-[#6D4C41] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8D6E63] font-medium"
        >
          Add Center
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Center Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                City
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {centers.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                  No centers found
                </td>
              </tr>
            ) : (
              centers.map((center) => (
                <tr key={center._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                    {center.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                    {center.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                    {center.contact || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${center.verified ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {center.verified ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleStatusChange(center._id, center.verified ? 'inactive' : 'active')}
                      className={`px-3 py-1 rounded-md text-sm font-medium text-white
                        ${center.verified 
                          ? 'bg-red-600 hover:bg-red-700' 
                          : 'bg-green-600 hover:bg-green-700'}`}
                    >
                      {center.verified ? 'Deactivate' : 'Activate'}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <AddCenterModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={(newCenter) => {
          setCenters([...centers, newCenter]);
          setIsAddModalOpen(false);
        }}
      />
    </motion.div>
  );
};

export default AdminCentersV2;
