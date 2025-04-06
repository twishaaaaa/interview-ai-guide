
import React from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ChevronRight, Check, Users, BarChart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* How it works section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How InterviewAI Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-interview-primary flex items-center justify-center text-white font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Set Up Your Interview</h3>
              <p className="text-gray-600">Choose your job role, experience level, and interview focus area</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-interview-primary flex items-center justify-center text-white font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Practice with AI</h3>
              <p className="text-gray-600">Answer industry-specific questions with text or voice input</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-interview-primary flex items-center justify-center text-white font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Get Detailed Feedback</h3>
              <p className="text-gray-600">Receive personalized insights and tips to improve your performance</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/interview/setup" className="inline-flex items-center text-interview-primary hover:underline font-medium">
              Start your first interview <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"InterviewAI helped me prepare for my software engineering interviews. The feedback was spot-on and I felt much more confident!"</p>
                <p className="font-medium">- Alex J., Software Engineer</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"The targeted questions for UX design were exactly what I needed. I got the job after practicing here for two weeks!"</p>
                <p className="font-medium">- Morgan T., UX Designer</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"As a career changer, I needed lots of practice. The detailed feedback helped me identify and fix weaknesses in my interview skills."</p>
                <p className="font-medium">- Jamie L., Data Scientist</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 bg-interview-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ace Your Next Interview?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">Start practicing today and build the confidence you need to succeed.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/interview/setup" className="bg-white text-interview-primary px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors">
              Start Free Practice
            </Link>
            <Link to="/tips" className="bg-transparent border border-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
              View Interview Tips
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
