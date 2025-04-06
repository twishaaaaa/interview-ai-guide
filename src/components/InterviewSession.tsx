
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import { useInterview, Question, Answer } from '@/context/InterviewContext';
import { evaluateAnswer } from '@/data/mockData';
import { Clock, ChevronRight, Send, Mic, MicOff } from 'lucide-react';

const InterviewSession: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { currentInterview, addAnswer, addEvaluation, completeInterview } = useInterview();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Start timer when component mounts
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  // If no interview is found, redirect to setup
  useEffect(() => {
    if (!currentInterview) {
      toast({
        variant: "destructive",
        title: "Interview Not Found",
        description: "Redirecting to interview setup...",
      });
      navigate('/interview/setup');
    }
  }, [currentInterview, navigate, toast]);
  
  if (!currentInterview) {
    return null;
  }
  
  const currentQuestion: Question = currentInterview.questions[currentQuestionIndex];
  const totalQuestions = currentInterview.questions.length;
  const progress = ((currentQuestionIndex) / totalQuestions) * 100;
  
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const toggleRecording = () => {
    // In a real app, this would activate speech recognition
    setIsRecording(!isRecording);
    
    if (!isRecording) {
      toast({
        title: "Speech Recognition Active",
        description: "Speak clearly into your microphone.",
      });
    } else {
      toast({
        title: "Recording Stopped",
        description: "Speech recognition deactivated.",
      });
    }
  };
  
  const handleNextQuestion = async () => {
    if (answer.trim() === '') {
      toast({
        variant: "destructive",
        title: "Empty Answer",
        description: "Please provide an answer before continuing.",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create answer object
      const newAnswer: Answer = {
        questionId: currentQuestion.id,
        answer,
        timeTaken: timer
      };
      
      // Add answer to interview
      addAnswer(newAnswer);
      
      // Simulate AI evaluation (in a real app, this would call the backend)
      const evaluation = evaluateAnswer(answer, currentQuestion.idealKeywords);
      
      // Add evaluation to interview
      addEvaluation({
        questionId: currentQuestion.id,
        ...evaluation
      });
      
      // Reset for next question
      setAnswer('');
      setTimer(0);
      
      // Check if this was the last question
      if (currentQuestionIndex === totalQuestions - 1) {
        // Calculate overall score (average of all evaluations)
        const overallScore = Math.round(
          currentInterview.evaluations.reduce((acc, eval) => acc + eval.score, 0) / totalQuestions
        );
        
        // Generate feedback based on evaluations
        const allEvaluations = [...currentInterview.evaluations, evaluation];
        const feedback = generateMockFeedback(overallScore);
        
        // Complete the interview
        completeInterview(overallScore, feedback);
        
        // Navigate to results page
        navigate(`/interview/results/${currentInterview.id}`);
      } else {
        // Move to next question
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      }
    } catch (error) {
      console.error('Error submitting answer:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit answer. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Simple mock feedback generation
  const generateMockFeedback = (score: number): string => {
    if (score >= 80) {
      return "Excellent performance! Your answers were comprehensive and hit most of the key points we were looking for. You demonstrated strong technical knowledge and communication skills.";
    } else if (score >= 60) {
      return "Good performance overall. You showed competence in many areas but could improve the depth of some of your answers. Consider incorporating more specific examples from your experience.";
    } else {
      return "There's room for improvement in your interview performance. Focus on developing more comprehensive answers and deepening your technical knowledge in key areas.";
    }
  };
  
  return (
    <div className="container mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{formatTime(timer)}</span>
          </div>
        </div>
        <Progress value={progress} className="h-2 bg-gray-200" />
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Type your answer here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="min-h-[200px] resize-none"
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={toggleRecording}
            className="flex items-center gap-2"
          >
            {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            {isRecording ? "Stop Recording" : "Start Voice Input"}
          </Button>
          <Button 
            onClick={handleNextQuestion}
            disabled={isSubmitting}
            className="bg-interview-primary hover:bg-interview-primary/90 flex items-center gap-2"
          >
            {currentQuestionIndex === totalQuestions - 1 ? (
              <>Finish Interview<ChevronRight className="h-4 w-4" /></>
            ) : (
              <>Next Question<ChevronRight className="h-4 w-4" /></>
            )}
          </Button>
        </CardFooter>
      </Card>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-medium mb-2">Interview Tips:</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Take a moment to structure your thoughts before answering</li>
          <li>• Use specific examples from your experience when possible</li>
          <li>• Keep your answers concise but thorough (aim for 1-2 minutes per question)</li>
          <li>• It's okay to pause and think - quality matters more than speed</li>
        </ul>
      </div>
    </div>
  );
};

export default InterviewSession;
