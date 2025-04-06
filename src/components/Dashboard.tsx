
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getQuestionsForRole, evaluateAnswer, generateFeedback } from '@/data/mockData';
import { JobRole, ExperienceLevel, Interview, useInterview, Evaluation } from '@/context/InterviewContext';
import { LineChart, BarChart2, Calendar, Clock, Award, TrendingUp, PieChart } from 'lucide-react';
import {
  LineChart as ReLineChart,
  Line,
  BarChart,
  Bar,
  PieChart as RePieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const Dashboard: React.FC = () => {
  const { interviews, setInterviews } = useInterview();
  const [currentTab, setCurrentTab] = useState('overview');
  
  // Generate mock interview history if none exists
  useEffect(() => {
    if (interviews.length === 0) {
      const mockInterviews = generateMockInterviews();
      setInterviews(mockInterviews);
    }
  }, [interviews.length, setInterviews]);
  
  // Generate random mock interviews for demo purposes
  const generateMockInterviews = (): Interview[] => {
    const jobRoles: JobRole[] = [
      'Software Engineer',
      'Frontend Developer',
      'Backend Developer'
    ];
    
    const experienceLevels: ExperienceLevel[] = ['entry', 'mid', 'senior'];
    
    // Generate 5 random interviews with completed status
    return Array.from({ length: 5 }, (_, i) => {
      const roleIndex = Math.floor(Math.random() * jobRoles.length);
      const levelIndex = Math.floor(Math.random() * experienceLevels.length);
      
      const jobRole = jobRoles[roleIndex];
      const experienceLevel = experienceLevels[levelIndex];
      const questions = getQuestionsForRole(jobRole, experienceLevel);
      
      // Generate random answers and evaluations
      const answers = questions.map(q => ({
        questionId: q.id,
        answer: `This is a mock answer for the question about ${q.question.split(' ').slice(0, 3).join(' ')}...`,
        timeTaken: Math.floor(Math.random() * 120) + 30 // 30-150 seconds
      }));
      
      const evaluations = questions.map((q, index) => {
        const baseScore = Math.floor(Math.random() * 40) + 40; // 40-80 base score
        // Make scores trend upward with more interviews
        const adjustedScore = Math.min(100, baseScore + (i * 5));
        
        return {
          questionId: q.id,
          relevance: adjustedScore,
          keywords: q.idealKeywords?.slice(0, Math.floor(Math.random() * 3) + 1) || [],
          sentiment: adjustedScore > 70 ? 'positive' as const : adjustedScore > 50 ? 'neutral' as const : 'negative' as const,
          score: adjustedScore
        };
      });
      
      const overallScore = Math.round(
        evaluations.reduce((acc, ev) => acc + ev.score, 0) / evaluations.length
      );
      
      // Create date for interview (more recent for higher indices)
      const date = new Date();
      date.setDate(date.getDate() - (5 - i) * 2); // Spread out over the last 10 days
      
      return {
        id: `mock-interview-${i}`,
        jobRole,
        experienceLevel,
        questions,
        answers,
        evaluations,
        overallScore,
        feedback: generateFeedback(evaluations),
        completed: true,
        createdAt: date
      };
    });
  };
  
  // Prepare data for charts
  const prepareScoreProgressData = () => {
    return interviews
      .filter(interview => interview.completed)
      .map((interview, index) => ({
        name: `Interview ${index + 1}`,
        score: interview.overallScore || 0,
        date: new Date(interview.createdAt).toLocaleDateString()
      }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };
  
  const prepareRoleDistributionData = () => {
    const roleCounts: Record<string, number> = {};
    
    interviews.forEach(interview => {
      if (roleCounts[interview.jobRole]) {
        roleCounts[interview.jobRole]++;
      } else {
        roleCounts[interview.jobRole] = 1;
      }
    });
    
    return Object.entries(roleCounts).map(([name, value]) => ({
      name,
      value
    }));
  };
  
  const prepareStrengthsWeaknessesData = () => {
    // Simplification for demo - in a real app, this would analyze actual question categories
    return [
      { name: 'Technical Knowledge', score: 78 },
      { name: 'Communication', score: 85 },
      { name: 'Problem Solving', score: 72 },
      { name: 'Experience', score: 68 },
      { name: 'Cultural Fit', score: 90 }
    ];
  };
  
  const scoreProgressData = prepareScoreProgressData();
  const roleDistributionData = prepareRoleDistributionData();
  const strengthsWeaknessesData = prepareStrengthsWeaknessesData();
  
  const COLORS = ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe'];
  
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Your Dashboard</h1>
          <p className="text-gray-600">Track your interview performance and progress</p>
        </div>
        <Button asChild className="mt-4 md:mt-0 bg-interview-primary hover:bg-interview-primary/90">
          <Link to="/interview/setup">Start New Interview</Link>
        </Button>
      </div>
      
      <Tabs defaultValue="overview" value={currentTab} onValueChange={setCurrentTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" /> Overview
          </TabsTrigger>
          <TabsTrigger value="progress" className="flex items-center gap-2">
            <LineChart className="h-4 w-4" /> Progress
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" /> History
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Average Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">
                    {Math.round(
                      interviews
                        .filter(i => i.completed)
                        .reduce((acc, i) => acc + (i.overallScore || 0), 0) / 
                      Math.max(1, interviews.filter(i => i.completed).length)
                    )}%
                  </span>
                  <span className="text-sm text-green-600 font-medium mb-1">+5%</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Compared to last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">{interviews.length}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Last interview: {
                    interviews.length > 0 
                      ? new Date(interviews[interviews.length - 1].createdAt).toLocaleDateString() 
                      : 'N/A'
                  }
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Highest Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">
                    {Math.max(
                      0,
                      ...interviews
                        .filter(i => i.completed)
                        .map(i => i.overallScore || 0)
                    )}%
                  </span>
                  <Award className="h-5 w-5 text-yellow-500 mb-1" />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {interviews.filter(i => i.completed).length > 0 
                    ? interviews
                        .filter(i => i.completed)
                        .sort((a, b) => (b.overallScore || 0) - (a.overallScore || 0))[0].jobRole
                    : 'N/A'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Score Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ReLineChart data={scoreProgressData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="score" 
                        stroke="#3b82f6" 
                        activeDot={{ r: 8 }} 
                        name="Interview Score"
                      />
                    </ReLineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Strengths & Weaknesses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={strengthsWeaknessesData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="name" type="category" width={120} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="score" fill="#3b82f6" name="Competency Score" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Job Role Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart>
                    <Pie
                      data={roleDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {roleDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RePieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="progress" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Your Interview Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ReLineChart data={scoreProgressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#3b82f6" 
                      activeDot={{ r: 8 }} 
                      name="Interview Score"
                    />
                  </ReLineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2">Progress Analysis:</h3>
                <p className="text-gray-700">
                  {interviews.length > 1 
                    ? "Your interview performance shows improvement over time. Continue practicing to maintain this positive trend."
                    : "Complete more interviews to see your progress over time."}
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Time Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={
                      interviews
                        .filter(i => i.completed)
                        .map((interview, index) => ({
                          name: `Interview ${index + 1}`,
                          avgTime: Math.round(
                            interview.answers.reduce((acc, a) => acc + a.timeTaken, 0) / 
                            Math.max(1, interview.answers.length)
                          ) / 60 // Convert to minutes
                        }))
                    }>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="avgTime" fill="#60a5fa" name="Avg. Answer Time (min)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Keyword Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={
                      interviews
                        .filter(i => i.completed)
                        .map((interview, index) => ({
                          name: `Interview ${index + 1}`,
                          keywords: interview.evaluations.reduce(
                            (acc, e) => acc + e.keywords.length, 0
                          )
                        }))
                    }>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="keywords" fill="#93c5fd" name="Keywords Used" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="history" className="space-y-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Interview History</h2>
            <p className="text-gray-600">Review your past interviews and performance</p>
          </div>
          
          {interviews
            .filter(interview => interview.completed)
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .map(interview => (
              <Card key={interview.id} className="overflow-hidden">
                <CardHeader className="bg-gray-50 pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">
                      {interview.jobRole} ({interview.experienceLevel.charAt(0).toUpperCase() + interview.experienceLevel.slice(1)} Level)
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" asChild className="text-sm">
                        <Link to={`/interview/results/${interview.id}`}>
                          View Results
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <div className="flex items-center gap-2 mb-2 md:mb-0">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">
                        {new Date(interview.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">
                        {Math.round(
                          interview.answers.reduce((acc, a) => acc + a.timeTaken, 0) / 60
                        )} minutes
                      </span>
                      <span className="mx-2">•</span>
                      <span className="text-sm text-gray-500">
                        {interview.questions.length} Questions
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium">Overall Score:</span>
                        <span className={`font-bold ${
                          (interview.overallScore || 0) >= 80 
                            ? 'text-green-600' 
                            : (interview.overallScore || 0) >= 60 
                              ? 'text-yellow-600' 
                              : 'text-red-600'
                        }`}>
                          {interview.overallScore}%
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 line-clamp-2">
                        {interview.feedback?.split('\n')[0] || 'No feedback available.'}
                      </p>
                    </div>
                    
                    <Button asChild variant="outline" className="mt-4 md:mt-0">
                      <Link to="/interview/setup">Practice Again</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          
          {interviews.filter(i => i.completed).length === 0 && (
            <div className="text-center py-12">
              <BarChart2 className="h-12 w-12 mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium mb-2">No Interview History Yet</h3>
              <p className="text-gray-500 mb-6">
                Complete your first interview to start tracking your progress
              </p>
              <Button asChild className="bg-interview-primary hover:bg-interview-primary/90">
                <Link to="/interview/setup">Start Your First Interview</Link>
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
