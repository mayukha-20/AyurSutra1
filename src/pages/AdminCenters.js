import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminCenters = () => {
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    const fetchCenters = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('/api/centers');
        if (!res.ok) throw new Error(`Failed to load centers: ${res.status}`);
        const data = await res.json();
        if (active) setCenters(Array.isArray(data) ? data : []);
      } catch (e) {
        if (active) setError(e.message || 'Error loading centers');
      } finally {
        if (active) setLoading(false);
      }
    };
    fetchCenters();
    return () => { active = false; };
  }, []);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Centers</h1>
          <Link to="/admin/dashboard" className="btn-primary">Back to Dashboard</Link>
        </div>

        <div className="card">
          {loading && (
            <div className="text-gray-600 dark:text-gray-300">Loading centers...</div>
          )}
          {error && (
            <div className="text-red-600 dark:text-red-400">{error}</div>
          )}
          {!loading && !error && (
            centers.length === 0 ? (
              <div className="text-gray-600 dark:text-gray-300">No centers found.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Location</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    {centers.map((c, idx) => (
                      <tr key={c._id || idx}>
                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{c.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{c.location}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${c.verified ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'}`}>
                            {c.verified ? 'Verified' : 'Pending'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline" disabled>
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCenters;
