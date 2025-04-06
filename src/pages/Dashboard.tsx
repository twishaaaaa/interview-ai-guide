
import React from 'react';
import DashboardComponent from '@/components/Dashboard';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Interview Dashboard</h1>
          <p className="text-lg text-gray-600">Track your progress and continue practicing to improve your skills</p>
        </div>
        <DashboardComponent />
      </div>
    </div>
  );
};

export default Dashboard;
