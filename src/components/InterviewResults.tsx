
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { useInterview } from '@/context/InterviewContext';
import { DownloadCloud, BarChart, Clock, ThumbsUp, ThumbsDown, ChevronRight } from 'lucide-react';

const InterviewResults: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { currentInterview } = useInterview();
  
  useEffect(() => {
    if (!currentInterview || !currentInterview.completed) {
      toast({
        variant: "destructive",
        title: "Results Not Available",
        description: "No completed interview found. Redirecting to setup...",
      });
      navigate('/interview/setup');
    }
  }, [currentInterview, navigate, toast]);
  
  if (!currentInterview || !currentInterview.completed) {
    return null;
  }
  
  const { jobRole, experienceLevel, questions, answers, evaluations, overallScore, feedback } = currentInterview;
  
  const getScoreColor = (score: number): string => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  const getProgressColor = (score: number): string => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  const getSentimentIcon = (sentiment: string) => {
    if (sentiment === 'positive') return <ThumbsUp className="h-4 w-4 text-green-500" />;
    if (sentiment === 'negative') return <ThumbsDown className="h-4 w-4 text-red-500" />;
    return null;
  };
  
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  return (
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Interview Performance Results</h1>
          <p className="text-gray-600">
            {experienceLevel.charAt(0).toUpperCase() + experienceLevel.slice(1)} Level {jobRole} Interview
          </p>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center justify-between">
              <span>Overall Score</span>
              <span className={getScoreColor(overallScore || 0)}>{overallScore}%</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress 
              value={overallScore} 
              className={`h-4 mb-6 ${getProgressColor(overallScore || 0)}`} 
            />
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
              <h3 className="font-medium mb-2">AI Feedback:</h3>
              <p className="text-gray-700 whitespace-pre-line">{feedback}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <p className="text-sm text-gray-500 mb-1">Questions</p>
                <p className="text-2xl font-bold">{questions.length}</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <p className="text-sm text-gray-500 mb-1">Avg Time</p>
                <p className="text-2xl font-bold">
                  {formatTime(
                    Math.round(
                      answers.reduce((acc, a) => acc + a.timeTaken, 0) / answers.length
                    )
                  )}
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <p className="text-sm text-gray-500 mb-1">Keywords</p>
                <p className="text-2xl font-bold">
                  {evaluations.reduce((acc, e) => acc + e.keywords.length, 0)}
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <p className="text-sm text-gray-500 mb-1">Top Score</p>
                <p className="text-2xl font-bold">
                  {Math.max(...evaluations.map(e => e.score))}%
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col md:flex-row gap-4 justify-between">
            <Button variant="outline" className="flex items-center gap-2 w-full md:w-auto">
              <DownloadCloud className="h-4 w-4" /> 
              Download Results
            </Button>
            <Button asChild className="bg-interview-primary hover:bg-interview-primary/90 w-full md:w-auto">
              <Link to="/dashboard" className="flex items-center gap-2">
                <BarChart className="h-4 w-4" /> View Dashboard
              </Link>
            </Button>
          </CardFooter>
        </Card>
        
        <h2 className="text-xl font-bold mb-4">Question Breakdown</h2>
        
        {questions.map((question, index) => {
          const answer = answers.find(a => a.questionId === question.id);
          const evaluation = evaluations.find(e => e.questionId === question.id);
          
          if (!answer || !evaluation) return null;
          
          return (
            <Card key={question.id} className="mb-4">
              <CardHeader>
                <CardTitle className="text-lg">
                  {index + 1}. {question.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Your Answer:</span>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{formatTime(answer.timeTaken)}</span>
                      {getSentimentIcon(evaluation.sentiment)}
                    </div>
                  </div>
                  <p className="text-gray-700 bg-gray-50 p-3 rounded-md border border-gray-100">
                    {answer.answer}
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Score:</span>
                    <span className={`font-bold ${getScoreColor(evaluation.score)}`}>
                      {evaluation.score}%
                    </span>
                  </div>
                  <Progress 
                    value={evaluation.score} 
                    className={`h-2 ${getProgressColor(evaluation.score)}`} 
                  />
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Keywords Mentioned:</p>
                  <div className="flex flex-wrap gap-2">
                    {evaluation.keywords.map(keyword => (
                      <Badge key={keyword} variant="secondary">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
        
        <div className="flex justify-center mt-8 mb-4">
          <Button asChild className="bg-interview-primary hover:bg-interview-primary/90">
            <Link to="/interview/setup" className="flex items-center gap-2">
              Try Another Interview <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewResults;
