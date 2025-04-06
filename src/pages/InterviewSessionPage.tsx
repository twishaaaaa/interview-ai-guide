
import React from 'react';
import InterviewSession from '@/components/InterviewSession';

const InterviewSessionPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Mock Interview Session</h1>
        <InterviewSession />
      </div>
    </div>
  );
};

export default InterviewSessionPage;
