
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, Award, Clock, Target, CheckCircle, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-16 md:pt-24 lg:pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-interview-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo and Title */}
          <div className="flex items-center justify-center bg-interview-primary/10 p-3 rounded-full mb-6 animate-fade-in">
            <Mic className="h-8 w-8 text-interview-primary" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Master Your <span className="text-interview-primary">Interviews</span> <br />
            With AI-Powered Practice
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-8">
            Prepare for job interviews with personalized AI feedback. Practice with realistic 
            questions tailored to your field and experience level.
          </p>
          
          {/* CTA Buttons with improved styling */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button asChild size="lg" className="bg-interview-primary hover:bg-interview-primary/90 transition-all shadow-md hover:shadow-xl">
              <Link to="/interview/setup" className="flex items-center gap-2">
                Start Practicing Now
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover:bg-interview-background transition-all">
              <Link to="/tips">Interview Tips</Link>
            </Button>
          </div>
          
          {/* Features section with cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <Card className="hover:shadow-md transition-all hover:border-interview-primary/30 hover:translate-y-[-5px]">
              <CardContent className="p-6">
                <div className="p-3 bg-interview-background rounded-full w-fit mb-4">
                  <Target className="h-6 w-6 text-interview-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Questions</h3>
                <p className="text-gray-600">
                  Tailored questions based on your job role and experience level
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-all hover:border-interview-primary/30 hover:translate-y-[-5px]">
              <CardContent className="p-6">
                <div className="p-3 bg-interview-background rounded-full w-fit mb-4">
                  <Clock className="h-6 w-6 text-interview-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Real-time Feedback</h3>
                <p className="text-gray-600">
                  Get instant analysis of your responses and areas for improvement
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-all hover:border-interview-primary/30 hover:translate-y-[-5px]">
              <CardContent className="p-6">
                <div className="p-3 bg-interview-background rounded-full w-fit mb-4">
                  <Award className="h-6 w-6 text-interview-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Track Progress</h3>
                <p className="text-gray-600">
                  Monitor your improvement over time with detailed performance metrics
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Social proof section */}
          <div className="mt-16 max-w-3xl">
            <h3 className="text-2xl font-bold mb-6">Why InterviewAI Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <div className="text-left">
                  <h4 className="font-medium">Practice Makes Perfect</h4>
                  <p className="text-gray-600">Regular interview simulations build confidence and fluency</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <div className="text-left">
                  <h4 className="font-medium">AI-Powered Analysis</h4>
                  <p className="text-gray-600">Get detailed feedback on your communication style and content</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <div className="text-left">
                  <h4 className="font-medium">Industry Relevance</h4>
                  <p className="text-gray-600">Questions tailored to current industry standards and expectations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <div className="text-left">
                  <h4 className="font-medium">No Judgment Zone</h4>
                  <p className="text-gray-600">Practice in a private, stress-free environment before the real thing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
