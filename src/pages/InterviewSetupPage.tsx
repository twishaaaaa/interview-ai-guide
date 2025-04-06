
import React from 'react';
import InterviewSetup from '@/components/InterviewSetup';

const InterviewSetupPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Mock Interview Setup</h1>
        <InterviewSetup />
      </div>
    </div>
  );
};

export default InterviewSetupPage;
