
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { JobRole, ExperienceLevel, Interview, useInterview } from '@/context/InterviewContext';
import { getQuestionsForRole } from '@/data/mockData';
import { Briefcase, GraduationCap } from 'lucide-react';

const InterviewSetup: React.FC = () => {
  const [jobRole, setJobRole] = useState<JobRole>('Software Engineer');
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>('mid');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();
  const { setCurrentInterview } = useInterview();
  
  const handleJobRoleChange = (value: string) => {
    setJobRole(value as JobRole);
  };
  
  const handleExperienceLevelChange = (value: string) => {
    setExperienceLevel(value as ExperienceLevel);
  };
  
  const startInterview = () => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      try {
        // Get questions for the selected role and experience level
        const questions = getQuestionsForRole(jobRole, experienceLevel);
        
        // Create a new interview
        const interview: Interview = {
          id: Math.random().toString(36).substring(2, 15),
          jobRole,
          experienceLevel,
          questions,
          answers: [],
          evaluations: [],
          completed: false,
          createdAt: new Date(),
        };
        
        // Set as current interview
        setCurrentInterview(interview);
        
        toast({
          title: "Interview Created",
          description: `Starting a ${experienceLevel} level ${jobRole} interview.`,
        });
        
        // Navigate to the interview session
        navigate(`/interview/session/${interview.id}`);
      } catch (error) {
        console.error('Error starting interview:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to start interview. Please try again.",
        });
      } finally {
        setLoading(false);
      }
    }, 1000);
  };
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Setup Your Mock Interview</CardTitle>
        <CardDescription>
          Configure your interview settings to get personalized questions
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-interview-primary" />
            <Label htmlFor="job-role" className="text-lg font-medium">Job Role</Label>
          </div>
          <Select value={jobRole} onValueChange={handleJobRoleChange}>
            <SelectTrigger id="job-role" className="w-full">
              <SelectValue placeholder="Select job role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Software Engineer">Software Engineer</SelectItem>
              <SelectItem value="Frontend Developer">Frontend Developer</SelectItem>
              <SelectItem value="Backend Developer">Backend Developer</SelectItem>
              <SelectItem value="Full Stack Developer">Full Stack Developer</SelectItem>
              <SelectItem value="Data Scientist">Data Scientist</SelectItem>
              <SelectItem value="DevOps Engineer">DevOps Engineer</SelectItem>
              <SelectItem value="Product Manager">Product Manager</SelectItem>
              <SelectItem value="UX Designer">UX Designer</SelectItem>
              <SelectItem value="QA Engineer">QA Engineer</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-interview-primary" />
            <Label className="text-lg font-medium">Experience Level</Label>
          </div>
          <RadioGroup 
            value={experienceLevel} 
            onValueChange={handleExperienceLevelChange}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <Label
              htmlFor="entry"
              className={`flex flex-col items-center justify-between rounded-md border-2 p-4 cursor-pointer hover:bg-gray-50 ${
                experienceLevel === 'entry' ? 'border-interview-primary' : 'border-gray-200'
              }`}
            >
              <RadioGroupItem value="entry" id="entry" className="sr-only" />
              <span className="text-sm font-medium">Entry Level</span>
              <span className="text-xs text-gray-500">0-2 years</span>
            </Label>
            
            <Label
              htmlFor="mid"
              className={`flex flex-col items-center justify-between rounded-md border-2 p-4 cursor-pointer hover:bg-gray-50 ${
                experienceLevel === 'mid' ? 'border-interview-primary' : 'border-gray-200'
              }`}
            >
              <RadioGroupItem value="mid" id="mid" className="sr-only" />
              <span className="text-sm font-medium">Mid Level</span>
              <span className="text-xs text-gray-500">2-5 years</span>
            </Label>
            
            <Label
              htmlFor="senior"
              className={`flex flex-col items-center justify-between rounded-md border-2 p-4 cursor-pointer hover:bg-gray-50 ${
                experienceLevel === 'senior' ? 'border-interview-primary' : 'border-gray-200'
              }`}
            >
              <RadioGroupItem value="senior" id="senior" className="sr-only" />
              <span className="text-sm font-medium">Senior Level</span>
              <span className="text-xs text-gray-500">5+ years</span>
            </Label>
          </RadioGroup>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={startInterview} 
          disabled={loading}
          className="w-full bg-interview-primary hover:bg-interview-primary/90"
        >
          {loading ? "Preparing Questions..." : "Start Mock Interview"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InterviewSetup;
