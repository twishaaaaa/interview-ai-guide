
import React from 'react';
import InterviewTips from '@/components/InterviewTips';

const InterviewTipsPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Interview Tips & Strategies</h1>
          <p className="text-lg text-gray-600">Expert advice to help you succeed in your next interview</p>
        </div>
        <InterviewTips />
      </div>
    </div>
  );
};

export default InterviewTipsPage;
