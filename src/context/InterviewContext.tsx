
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define our types
export type JobRole = 'Software Engineer' | 'Frontend Developer' | 'Backend Developer' | 'Full Stack Developer' | 'Data Scientist' | 'DevOps Engineer' | 'Product Manager' | 'UX Designer' | 'QA Engineer';
export type ExperienceLevel = 'entry' | 'mid' | 'senior';

export interface Question {
  id: string;
  question: string;
  idealKeywords?: string[];
}

export interface Answer {
  questionId: string;
  answer: string;
  timeTaken: number;
}

export interface Evaluation {
  questionId: string;
  relevance: number;
  keywords: string[];
  sentiment: 'positive' | 'neutral' | 'negative';
  score: number;
}

export interface Interview {
  id: string;
  jobRole: JobRole;
  experienceLevel: ExperienceLevel;
  questions: Question[];
  answers: Answer[];
  evaluations: Evaluation[];
  overallScore?: number;
  feedback?: string;
  completed: boolean;
  createdAt: Date;
}

interface InterviewContextType {
  currentInterview: Interview | null;
  interviews: Interview[];
  setCurrentInterview: (interview: Interview) => void;
  setInterviews: (interviews: Interview[]) => void;
  addAnswer: (answer: Answer) => void;
  addEvaluation: (evaluation: Evaluation) => void;
  completeInterview: (score: number, feedback: string) => void;
}

const InterviewContext = createContext<InterviewContextType | undefined>(undefined);

export const useInterview = () => {
  const context = useContext(InterviewContext);
  if (context === undefined) {
    throw new Error('useInterview must be used within an InterviewProvider');
  }
  return context;
};

interface InterviewProviderProps {
  children: ReactNode;
}

export const InterviewProvider: React.FC<InterviewProviderProps> = ({ children }) => {
  const [currentInterview, setCurrentInterview] = useState<Interview | null>(null);
  const [interviews, setInterviews] = useState<Interview[]>([]);

  const addAnswer = (answer: Answer) => {
    if (!currentInterview) return;

    const updatedInterview = {
      ...currentInterview,
      answers: [...currentInterview.answers, answer]
    };
    setCurrentInterview(updatedInterview);
  };

  const addEvaluation = (evaluation: Evaluation) => {
    if (!currentInterview) return;

    const updatedInterview = {
      ...currentInterview,
      evaluations: [...currentInterview.evaluations, evaluation]
    };
    setCurrentInterview(updatedInterview);
  };

  const completeInterview = (score: number, feedback: string) => {
    if (!currentInterview) return;

    const updatedInterview = {
      ...currentInterview,
      overallScore: score,
      feedback,
      completed: true
    };
    setCurrentInterview(updatedInterview);
    
    // Update interview in the list as well
    const updatedInterviews = interviews.map(interview => 
      interview.id === currentInterview.id ? updatedInterview : interview
    );
    setInterviews(updatedInterviews);
  };

  return (
    <InterviewContext.Provider
      value={{
        currentInterview,
        interviews,
        setCurrentInterview,
        setInterviews,
        addAnswer,
        addEvaluation,
        completeInterview
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
};
