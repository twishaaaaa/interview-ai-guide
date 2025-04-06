
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mic, Award, Clock, Target } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-16 md:pt-24 lg:pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-interview-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center bg-interview-primary/10 p-3 rounded-full mb-6">
            <Mic className="h-8 w-8 text-interview-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Master Your <span className="text-interview-primary">Interviews</span> <br />
            With AI-Powered Practice
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-8">
            Prepare for job interviews with personalized AI feedback. Practice with realistic questions tailored to your field and experience level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button asChild size="lg" className="bg-interview-primary hover:bg-interview-primary/90">
              <Link to="/interview/setup">Start Practicing Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/tips">Interview Tips</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="p-3 bg-interview-background rounded-full w-fit mb-4">
                <Target className="h-6 w-6 text-interview-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Questions</h3>
              <p className="text-gray-600">
                Tailored questions based on your job role and experience level
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="p-3 bg-interview-background rounded-full w-fit mb-4">
                <Clock className="h-6 w-6 text-interview-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Real-time Feedback</h3>
              <p className="text-gray-600">
                Get instant analysis of your responses and areas for improvement
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="p-3 bg-interview-background rounded-full w-fit mb-4">
                <Award className="h-6 w-6 text-interview-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Track Progress</h3>
              <p className="text-gray-600">
                Monitor your improvement over time with detailed performance metrics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
