
import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, User, BarChart, Home, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Mic className="h-6 w-6 text-interview-primary" />
            <span className="text-xl font-bold text-gray-900">InterviewAI</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-interview-primary">
            Home
          </Link>
          <Link to="/dashboard" className="text-sm font-medium text-gray-700 hover:text-interview-primary">
            Dashboard
          </Link>
          <Link to="/practice" className="text-sm font-medium text-gray-700 hover:text-interview-primary">
            Practice
          </Link>
          <Link to="/tips" className="text-sm font-medium text-gray-700 hover:text-interview-primary">
            Interview Tips
          </Link>
        </div>
        
        <div className="hidden md:block">
          <Button asChild variant="default" className="bg-interview-primary hover:bg-interview-primary/90">
            <Link to="/interview/setup">Start Interview</Link>
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 pt-6">
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                <span className="text-sm font-medium">Home</span>
              </Link>
              <Link to="/dashboard" className="flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
              <Link to="/practice" className="flex items-center gap-2">
                <Mic className="h-5 w-5" />
                <span className="text-sm font-medium">Practice</span>
              </Link>
              <Link to="/tips" className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="text-sm font-medium">Interview Tips</span>
              </Link>
              <Button asChild className="w-full mt-4 bg-interview-primary hover:bg-interview-primary/90">
                <Link to="/interview/setup">Start Interview</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
