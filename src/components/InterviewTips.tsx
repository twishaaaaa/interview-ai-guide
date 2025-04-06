
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { BookOpen, CheckCircle, Book, Gift, MessageSquare, Clock, Users, ThumbsUp } from 'lucide-react';

const InterviewTips: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Interview Tips & Strategies</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Master your next interview with these expert strategies and insights tailored for different interview types and scenarios.
          </p>
        </div>
        
        <Tabs defaultValue="preparation">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="preparation" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Preparation
            </TabsTrigger>
            <TabsTrigger value="technical" className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" /> Technical
            </TabsTrigger>
            <TabsTrigger value="behavioral" className="flex items-center gap-2">
              <Users className="h-4 w-4" /> Behavioral
            </TabsTrigger>
            <TabsTrigger value="common-mistakes" className="flex items-center gap-2">
              <ThumbsUp className="h-4 w-4" /> Success Tips
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="preparation">
            <Card>
              <CardHeader>
                <CardTitle>Interview Preparation</CardTitle>
                <CardDescription>
                  Essential steps to prepare for your interview
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="bg-interview-background p-2 rounded-full h-fit">
                      <Book className="h-5 w-5 text-interview-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Research the Company</h3>
                      <p className="text-gray-600">
                        Thoroughly research the company's mission, products, services, culture, and recent news. 
                        Understand their industry position and challenges. This shows genuine interest and helps 
                        you tailor your answers to align with their values and needs.
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex gap-3">
                    <div className="bg-interview-background p-2 rounded-full h-fit">
                      <MessageSquare className="h-5 w-5 text-interview-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Practice Your Responses</h3>
                      <p className="text-gray-600">
                        Prepare and practice answers to common interview questions. Use the STAR method 
                        (Situation, Task, Action, Result) for behavioral questions. Practice speaking clearly 
                        and concisely, keeping responses focused and under two minutes when possible.
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex gap-3">
                    <div className="bg-interview-background p-2 rounded-full h-fit">
                      <Gift className="h-5 w-5 text-interview-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Know Your Value Proposition</h3>
                      <p className="text-gray-600">
                        Clearly define what makes you unique and valuable to the employer. Identify your 
                        key strengths, experiences, and achievements that are most relevant to the position. 
                        Be ready to articulate how these qualities will benefit the company specifically.
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex gap-3">
                    <div className="bg-interview-background p-2 rounded-full h-fit">
                      <Clock className="h-5 w-5 text-interview-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Prepare Logistics in Advance</h3>
                      <p className="text-gray-600">
                        Confirm the interview format, time, and location. If it's virtual, test your 
                        technology beforehand. Plan your outfit, prepare copies of your resume, and 
                        arrange transportation. Aim to arrive 10-15 minutes early to avoid rushing.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-interview-background p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Pro Tip:</h3>
                  <p className="text-gray-700">
                    Prepare thoughtful questions to ask the interviewer. This demonstrates your interest 
                    and helps you evaluate if the position is right for you. Questions about company 
                    culture, team dynamics, and expectations for the role are particularly effective.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="technical">
            <Card>
              <CardHeader>
                <CardTitle>Technical Interview Strategies</CardTitle>
                <CardDescription>
                  Tips for excelling in technical assessments and coding interviews
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">During Coding Exercises:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                    <li>
                      <strong>Think aloud</strong> - Vocalize your thought process to show your problem-solving approach
                    </li>
                    <li>
                      <strong>Start with clarity</strong> - Make sure you understand the problem before coding
                    </li>
                    <li>
                      <strong>Begin with a simple solution</strong> - Then optimize if time permits
                    </li>
                    <li>
                      <strong>Write clean, readable code</strong> - Use meaningful variable names and proper indentation
                    </li>
                    <li>
                      <strong>Test your solution</strong> - Walk through with examples to verify correctness
                    </li>
                  </ul>
                  
                  <h3 className="font-bold text-lg mt-6">System Design Questions:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                    <li>
                      <strong>Clarify requirements</strong> - Understand the scope, scale, and constraints
                    </li>
                    <li>
                      <strong>Draw diagrams</strong> - Visual representations help communicate your ideas
                    </li>
                    <li>
                      <strong>Consider tradeoffs</strong> - Discuss pros and cons of different approaches
                    </li>
                    <li>
                      <strong>Address scalability</strong> - Show you understand how your solution would scale
                    </li>
                    <li>
                      <strong>Mention potential bottlenecks</strong> - And how you'd address them
                    </li>
                  </ul>
                  
                  <h3 className="font-bold text-lg mt-6">Language-Specific Questions:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                    <li>
                      <strong>Review core concepts</strong> - Data structures, algorithms, language fundamentals
                    </li>
                    <li>
                      <strong>Understand language quirks</strong> - Common pitfalls and best practices
                    </li>
                    <li>
                      <strong>Be honest about expertise</strong> - If you don't know something, say so
                    </li>
                    <li>
                      <strong>Explain your reasoning</strong> - Not just what you'd do, but why
                    </li>
                  </ul>
                </div>
                
                <div className="bg-interview-background p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Technical Preparation Checklist:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Data Structures:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm pl-2">
                        <li>Arrays and Strings</li>
                        <li>Linked Lists</li>
                        <li>Stacks and Queues</li>
                        <li>Trees and Graphs</li>
                        <li>Hash Tables</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Algorithms:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm pl-2">
                        <li>Sorting and Searching</li>
                        <li>Recursion</li>
                        <li>Dynamic Programming</li>
                        <li>Graph Traversal</li>
                        <li>Big O Notation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="behavioral">
            <Card>
              <CardHeader>
                <CardTitle>Behavioral Interview Mastery</CardTitle>
                <CardDescription>
                  How to effectively communicate your experiences and soft skills
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">The STAR Method:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-interview-primary">Situation</h4>
                      <p className="text-gray-600 text-sm">
                        Describe the context or background. What was the specific challenge or situation 
                        you faced? Set the scene with enough detail for the interviewer to understand 
                        the complexity.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-interview-primary">Task</h4>
                      <p className="text-gray-600 text-sm">
                        Explain your responsibility or role in the situation. What were you specifically 
                        tasked with accomplishing? What goals or objectives needed to be met?
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-interview-primary">Action</h4>
                      <p className="text-gray-600 text-sm">
                        Detail the steps you took to address the challenge. Focus on YOUR actions, 
                        not what the team did (use "I" not "we"). Be specific about your contribution 
                        and the skills you demonstrated.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-interview-primary">Result</h4>
                      <p className="text-gray-600 text-sm">
                        Share the outcomes of your actions. Quantify results when possible (e.g., 
                        increased efficiency by 20%). Include what you learned and how you grew 
                        from the experience, even if the outcome wasn't perfect.
                      </p>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mt-6">Common Behavioral Questions:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                    <li>
                      <strong>Leadership:</strong> "Tell me about a time when you led a team through a difficult project."
                    </li>
                    <li>
                      <strong>Conflict Resolution:</strong> "Describe a situation where you had to resolve a conflict with a colleague."
                    </li>
                    <li>
                      <strong>Problem Solving:</strong> "Share an example of a complex problem you solved with an innovative approach."
                    </li>
                    <li>
                      <strong>Failure:</strong> "Tell me about a time you failed and what you learned from it."
                    </li>
                    <li>
                      <strong>Adaptability:</strong> "Describe how you adapted to an unexpected change at work."
                    </li>
                  </ul>
                </div>
                
                <div className="bg-interview-background p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Behavioral Interview Preparation Tips:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 pl-2">
                    <li>
                      <strong>Prepare 5-7 strong stories</strong> that can be adapted to different questions
                    </li>
                    <li>
                      <strong>Focus on recent experiences</strong> (within the last 2-3 years if possible)
                    </li>
                    <li>
                      <strong>Be authentic</strong> - real examples with challenges and lessons are more compelling
                    </li>
                    <li>
                      <strong>Keep responses concise</strong> - aim for 1-2 minutes per answer
                    </li>
                    <li>
                      <strong>Practice out loud</strong> to refine your delivery and timing
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="common-mistakes">
            <Card>
              <CardHeader>
                <CardTitle>Keys to Interview Success</CardTitle>
                <CardDescription>
                  Common pitfalls to avoid and strategies for standing out
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                      <h3 className="font-bold text-lg mb-3 text-red-700">Common Mistakes to Avoid</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex gap-2">
                          <span className="text-red-500">✗</span>
                          <span><strong>Being unprepared</strong> - Not researching the company or role</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-red-500">✗</span>
                          <span><strong>Speaking negatively</strong> about former employers or colleagues</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-red-500">✗</span>
                          <span><strong>Providing generic answers</strong> that could apply to any job</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-red-500">✗</span>
                          <span><strong>Focusing too much on "I"</strong> without showing teamwork</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-red-500">✗</span>
                          <span><strong>Not asking questions</strong> when given the opportunity</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <h3 className="font-bold text-lg mb-3 text-green-700">Success Strategies</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex gap-2">
                          <span className="text-green-500">✓</span>
                          <span><strong>Research thoroughly</strong> - Show you understand their business</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-500">✓</span>
                          <span><strong>Demonstrate results</strong> with specific metrics when possible</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-500">✓</span>
                          <span><strong>Connect your experience</strong> directly to job requirements</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-500">✓</span>
                          <span><strong>Show enthusiasm</strong> for the role and company mission</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-500">✓</span>
                          <span><strong>Ask thoughtful questions</strong> that demonstrate insight</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-interview-background p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-3">Before, During, and After</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-interview-primary">Before the Interview</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li>• Research company culture and values</li>
                          <li>• Prepare your elevator pitch</li>
                          <li>• Practice with mock interviews</li>
                          <li>• Plan your outfit and route</li>
                          <li>• Get a good night's sleep</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-interview-primary">During the Interview</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li>• Maintain good body language</li>
                          <li>• Listen actively, don't just wait to speak</li>
                          <li>• Take a pause before answering difficult questions</li>
                          <li>• Provide concrete examples</li>
                          <li>• Be authentic and personable</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-interview-primary">After the Interview</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li>• Send a thoughtful thank-you note</li>
                          <li>• Follow up appropriately (1-2 weeks)</li>
                          <li>• Reflect on your performance</li>
                          <li>• Document questions for future reference</li>
                          <li>• Continue your job search regardless</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-interview-primary rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Final Advice: The 3 C's of Interview Success</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div>
                        <h4 className="font-semibold text-interview-primary mb-1">Competence</h4>
                        <p className="text-sm text-gray-700">
                          Demonstrate you have the skills and experience to excel in the role
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-interview-primary mb-1">Confidence</h4>
                        <p className="text-sm text-gray-700">
                          Present yourself with self-assurance without crossing into arrogance
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-interview-primary mb-1">Connection</h4>
                        <p className="text-sm text-gray-700">
                          Build rapport and show you'd be a valuable cultural addition to the team
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InterviewTips;
