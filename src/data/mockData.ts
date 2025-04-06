import { Interview, JobRole, ExperienceLevel, Question } from "../context/InterviewContext";

// Generate a random UUID-like string for IDs
const generateId = () => Math.random().toString(36).substring(2, 15);

// Mock questions for different job roles
export const getQuestionsForRole = (role: JobRole, level: ExperienceLevel): Question[] => {
  const questions: Record<JobRole, Record<ExperienceLevel, Question[]>> = {
    "Software Engineer": {
      entry: [
        { id: generateId(), question: "What programming languages are you familiar with?", idealKeywords: ["JavaScript", "Python", "Java", "C++"] },
        { id: generateId(), question: "Explain the difference between a stack and a queue.", idealKeywords: ["LIFO", "FIFO", "data structure", "operations"] },
        { id: generateId(), question: "What is version control and why is it important?", idealKeywords: ["Git", "collaboration", "history", "changes"] },
        { id: generateId(), question: "Describe the software development lifecycle.", idealKeywords: ["requirements", "design", "development", "testing", "deployment", "maintenance"] },
        { id: generateId(), question: "What is your approach to debugging code?", idealKeywords: ["systematic", "logs", "debugger", "testing", "isolate"] }
      ],
      mid: [
        { id: generateId(), question: "Explain how you would design a scalable web application.", idealKeywords: ["microservices", "load balancing", "caching", "database", "architecture"] },
        { id: generateId(), question: "What design patterns have you implemented in your projects?", idealKeywords: ["singleton", "factory", "observer", "MVC", "dependency injection"] },
        { id: generateId(), question: "How do you ensure code quality in your work?", idealKeywords: ["testing", "code review", "static analysis", "continuous integration", "documentation"] },
        { id: generateId(), question: "Describe a challenging technical problem you solved recently.", idealKeywords: ["analysis", "solution", "implementation", "results", "learning"] },
        { id: generateId(), question: "How do you approach refactoring legacy code?", idealKeywords: ["tests", "incremental", "documentation", "planning", "risks"] }
      ],
      senior: [
        { id: generateId(), question: "How would you architect a system that needs to handle millions of concurrent users?", idealKeywords: ["sharding", "distributed", "asynchronous", "caching", "optimization"] },
        { id: generateId(), question: "Describe your experience with leading technical projects.", idealKeywords: ["leadership", "planning", "delegation", "communication", "delivery"] },
        { id: generateId(), question: "How do you evaluate new technologies for potential adoption?", idealKeywords: ["research", "prototyping", "risk assessment", "business value", "maintenance"] },
        { id: generateId(), question: "What strategies do you use to mentor junior developers?", idealKeywords: ["guidance", "feedback", "code review", "learning path", "empowerment"] },
        { id: generateId(), question: "How do you balance technical debt with new feature development?", idealKeywords: ["prioritization", "refactoring", "strategic planning", "business impact", "sustainability"] }
      ]
    },
    "Frontend Developer": {
      entry: [
        { id: generateId(), question: "What frontend frameworks or libraries have you worked with?", idealKeywords: ["React", "Vue", "Angular", "JavaScript", "HTML", "CSS"] },
        { id: generateId(), question: "Explain the box model in CSS.", idealKeywords: ["content", "padding", "border", "margin", "box-sizing"] },
        { id: generateId(), question: "What is responsive design and why is it important?", idealKeywords: ["mobile", "viewport", "media queries", "flexibility", "user experience"] },
        { id: generateId(), question: "Describe the difference between cookies, localStorage, and sessionStorage.", idealKeywords: ["persistence", "storage", "browser", "expiration", "scope"] },
        { id: generateId(), question: "What is the Virtual DOM and why is it used?", idealKeywords: ["performance", "React", "rendering", "reconciliation", "efficiency"] }
      ],
      mid: [
        { id: generateId(), question: "How do you optimize website performance?", idealKeywords: ["lazy loading", "code splitting", "minification", "caching", "image optimization"] },
        { id: generateId(), question: "Explain state management in frontend applications.", idealKeywords: ["Redux", "context", "store", "actions", "reducers"] },
        { id: generateId(), question: "How do you ensure accessibility in web applications?", idealKeywords: ["ARIA", "semantic HTML", "keyboard navigation", "screen readers", "contrast"] },
        { id: generateId(), question: "Describe your experience with client-side routing.", idealKeywords: ["SPA", "history API", "React Router", "navigation", "lazy loading"] },
        { id: generateId(), question: "What testing strategies do you use for frontend code?", idealKeywords: ["unit tests", "integration tests", "E2E tests", "Jest", "Cypress"] }
      ],
      senior: [
        { id: generateId(), question: "How would you architect a large-scale frontend application?", idealKeywords: ["modularity", "scalability", "performance", "maintainability", "code organization"] },
        { id: generateId(), question: "Describe your approach to implementing design systems.", idealKeywords: ["consistency", "components", "documentation", "collaboration", "standards"] },
        { id: generateId(), question: "How do you balance user experience with technical constraints?", idealKeywords: ["trade-offs", "priorities", "performance", "usability", "communication"] },
        { id: generateId(), question: "What strategies do you use for frontend security?", idealKeywords: ["XSS", "CSRF", "content security policy", "HTTPS", "input validation"] },
        { id: generateId(), question: "How do you keep up with the rapidly evolving frontend ecosystem?", idealKeywords: ["learning", "communities", "blogs", "experiments", "selective adoption"] }
      ]
    },
    "Backend Developer": {
      entry: [
        { id: generateId(), question: "What backend technologies or frameworks have you used?", idealKeywords: ["Node.js", "Express", "Django", "Spring", "ASP.NET"] },
        { id: generateId(), question: "Explain the difference between SQL and NoSQL databases.", idealKeywords: ["relational", "schema", "structured", "document", "flexibility"] },
        { id: generateId(), question: "What is an API and how do you design one?", idealKeywords: ["endpoints", "REST", "requests", "responses", "documentation"] },
        { id: generateId(), question: "Describe the HTTP request methods and when to use each.", idealKeywords: ["GET", "POST", "PUT", "DELETE", "idempotent"] },
        { id: generateId(), question: "What is server-side caching and why is it important?", idealKeywords: ["performance", "Redis", "Memcached", "throughput", "latency"] }
      ],
      mid: [
        { id: generateId(), question: "How do you handle authentication and authorization in backend systems?", idealKeywords: ["JWT", "OAuth", "sessions", "permissions", "roles"] },
        { id: generateId(), question: "Explain your approach to database schema design.", idealKeywords: ["normalization", "relationships", "indexes", "performance", "scalability"] },
        { id: generateId(), question: "How do you ensure the security of backend applications?", idealKeywords: ["validation", "sanitization", "encryption", "rate limiting", "security headers"] },
        { id: generateId(), question: "Describe your experience with message queues or event-driven architectures.", idealKeywords: ["RabbitMQ", "Kafka", "asynchronous", "decoupling", "reliability"] },
        { id: generateId(), question: "What testing strategies do you use for backend code?", idealKeywords: ["unit tests", "integration tests", "mocking", "fixtures", "test coverage"] }
      ],
      senior: [
        { id: generateId(), question: "How would you design a highly scalable and available backend system?", idealKeywords: ["microservices", "load balancing", "horizontal scaling", "redundancy", "circuit breakers"] },
        { id: generateId(), question: "Describe your approach to handling data at scale.", idealKeywords: ["sharding", "partitioning", "indexing", "optimization", "aggregation"] },
        { id: generateId(), question: "How do you monitor and troubleshoot backend systems in production?", idealKeywords: ["logging", "metrics", "alerts", "tracing", "dashboards"] },
        { id: generateId(), question: "What strategies do you use for database performance optimization?", idealKeywords: ["indexing", "query optimization", "caching", "execution plans", "normalization"] },
        { id: generateId(), question: "How do you approach building systems that are resilient to failures?", idealKeywords: ["fallbacks", "retries", "circuit breakers", "timeout patterns", "fault isolation"] }
      ]
    },
    "Full Stack Developer": {
      entry: [
        { id: generateId(), question: "What technologies do you use for frontend and backend development?", idealKeywords: ["JavaScript", "HTML", "CSS", "Node.js", "React", "Express"] },
        { id: generateId(), question: "Explain the MVC architecture pattern.", idealKeywords: ["model", "view", "controller", "separation", "organization"] },
        { id: generateId(), question: "How do you connect a frontend application to a backend API?", idealKeywords: ["fetch", "axios", "API", "requests", "responses"] },
        { id: generateId(), question: "What is responsive design and how do you implement it?", idealKeywords: ["media queries", "flexible layouts", "mobile-first", "viewport", "CSS Grid"] },
        { id: generateId(), question: "Describe your experience with databases.", idealKeywords: ["SQL", "NoSQL", "queries", "schemas", "CRUD operations"] }
      ],
      mid: [
        { id: generateId(), question: "How do you manage state between frontend and backend?", idealKeywords: ["Redux", "context", "API", "caching", "synchronization"] },
        { id: generateId(), question: "Explain your approach to full stack application architecture.", idealKeywords: ["layers", "separation of concerns", "API design", "state management", "data flow"] },
        { id: generateId(), question: "How do you ensure security across the full stack?", idealKeywords: ["validation", "authentication", "HTTPS", "CSRF protection", "input sanitization"] },
        { id: generateId(), question: "Describe your experience with deployment and DevOps.", idealKeywords: ["CI/CD", "Docker", "cloud services", "automation", "environments"] },
        { id: generateId(), question: "What testing strategies do you use across the full stack?", idealKeywords: ["unit tests", "integration tests", "E2E tests", "mocking", "test coverage"] }
      ],
      senior: [
        { id: generateId(), question: "How would you architect a scalable full stack application?", idealKeywords: ["microservices", "load balancing", "caching", "performance optimization", "code organization"] },
        { id: generateId(), question: "Describe your approach to optimizing performance across the entire stack.", idealKeywords: ["lazy loading", "caching", "database indexing", "code splitting", "CDN"] },
        { id: generateId(), question: "How do you balance technical considerations across frontend and backend?", idealKeywords: ["trade-offs", "communication", "shared understanding", "consistent patterns", "best practices"] },
        { id: generateId(), question: "What strategies do you use for managing technical debt in full stack applications?", idealKeywords: ["refactoring", "code reviews", "monitoring", "documentation", "incremental improvements"] },
        { id: generateId(), question: "How do you approach mentoring and growing full stack development teams?", idealKeywords: ["knowledge sharing", "code reviews", "standards", "learning culture", "cross-training"] }
      ]
    },
    "Data Scientist": {
      entry: [
        { id: generateId(), question: "What programming languages and tools do you use for data analysis?", idealKeywords: ["Python", "R", "SQL", "Pandas", "NumPy"] },
        { id: generateId(), question: "Explain the difference between supervised and unsupervised learning.", idealKeywords: ["labeled data", "unlabeled data", "classification", "clustering", "examples"] },
        { id: generateId(), question: "What steps do you take to clean and preprocess data?", idealKeywords: ["missing values", "normalization", "outliers", "feature engineering", "transformation"] },
        { id: generateId(), question: "Describe some common evaluation metrics for machine learning models.", idealKeywords: ["accuracy", "precision", "recall", "F1-score", "ROC curve"] },
        { id: generateId(), question: "What visualization tools do you use and why are they important?", idealKeywords: ["Matplotlib", "Seaborn", "visualization", "insights", "communication"] }
      ],
      mid: [
        { id: generateId(), question: "How do you approach feature selection and engineering?", idealKeywords: ["correlation", "importance", "dimensionality reduction", "domain knowledge", "transformation"] },
        { id: generateId(), question: "Explain your experience with various machine learning algorithms.", idealKeywords: ["regression", "decision trees", "neural networks", "clustering", "ensemble methods"] },
        { id: generateId(), question: "How do you handle imbalanced datasets?", idealKeywords: ["sampling", "SMOTE", "class weights", "evaluation metrics", "threshold tuning"] },
        { id: generateId(), question: "Describe your experience with time series analysis.", idealKeywords: ["seasonality", "trends", "ARIMA", "forecasting", "stationarity"] },
        { id: generateId(), question: "How do you communicate data insights to non-technical stakeholders?", idealKeywords: ["visualization", "storytelling", "simplification", "business context", "recommendations"] }
      ],
      senior: [
        { id: generateId(), question: "How would you design and implement a machine learning pipeline in production?", idealKeywords: ["feature store", "model registry", "monitoring", "retraining", "versioning"] },
        { id: generateId(), question: "Describe your approach to solving complex business problems with data science.", idealKeywords: ["problem framing", "hypothesis testing", "iterative approach", "business metrics", "impact assessment"] },
        { id: generateId(), question: "How do you ensure fairness and address bias in machine learning models?", idealKeywords: ["bias detection", "fairness metrics", "diverse data", "transparency", "ethical considerations"] },
        { id: generateId(), question: "What strategies do you use for optimizing large-scale data processing?", idealKeywords: ["distributed computing", "spark", "sampling", "algorithmic efficiency", "incremental processing"] },
        { id: generateId(), question: "How do you approach building and leading data science teams?", idealKeywords: ["diverse skills", "collaboration", "knowledge sharing", "research culture", "business alignment"] }
      ]
    },
    "DevOps Engineer": {
      entry: [
        { id: generateId(), question: "What version control systems have you worked with?", idealKeywords: ["Git", "branches", "merging", "conflict resolution", "repositories"] },
        { id: generateId(), question: "Explain the concept of continuous integration and deployment.", idealKeywords: ["automation", "testing", "pipeline", "frequent integration", "deployment"] },
        { id: generateId(), question: "What containerization technologies are you familiar with?", idealKeywords: ["Docker", "containers", "images", "Dockerfile", "isolation"] },
        { id: generateId(), question: "Describe your experience with cloud platforms.", idealKeywords: ["AWS", "Azure", "GCP", "services", "infrastructure"] },
        { id: generateId(), question: "What monitoring tools have you used?", idealKeywords: ["Prometheus", "Grafana", "logs", "metrics", "alerts"] }
      ],
      mid: [
        { id: generateId(), question: "How do you implement infrastructure as code?", idealKeywords: ["Terraform", "CloudFormation", "Ansible", "automation", "version control"] },
        { id: generateId(), question: "Explain your approach to CI/CD pipeline design.", idealKeywords: ["stages", "testing", "automation", "deployment strategies", "feedback loops"] },
        { id: generateId(), question: "How do you ensure security in DevOps practices?", idealKeywords: ["scanning", "least privilege", "secrets management", "compliance", "security as code"] },
        { id: generateId(), question: "Describe your experience with container orchestration.", idealKeywords: ["Kubernetes", "scaling", "deployment", "services", "configuration"] },
        { id: generateId(), question: "How do you approach troubleshooting in production environments?", idealKeywords: ["logs", "metrics", "tracing", "systematic approach", "root cause analysis"] }
      ],
      senior: [
        { id: generateId(), question: "How would you design a highly available and scalable infrastructure?", idealKeywords: ["redundancy", "auto-scaling", "load balancing", "disaster recovery", "multi-region"] },
        { id: generateId(), question: "Describe your approach to implementing DevOps culture in organizations.", idealKeywords: ["collaboration", "automation", "measurement", "sharing", "improvement"] },
        { id: generateId(), question: "How do you manage compliance and security at scale?", idealKeywords: ["policy as code", "automation", "scanning", "auditing", "remediation"] },
        { id: generateId(), question: "What strategies do you use for cost optimization in cloud environments?", idealKeywords: ["right-sizing", "reserved instances", "spot instances", "monitoring", "governance"] },
        { id: generateId(), question: "How do you approach incident management and site reliability?", idealKeywords: ["SLOs", "post-mortems", "chaos engineering", "runbooks", "automation"] }
      ]
    },
    "Product Manager": {
      entry: [
        { id: generateId(), question: "How do you gather and prioritize product requirements?", idealKeywords: ["user research", "stakeholders", "prioritization", "value", "feasibility"] },
        { id: generateId(), question: "Explain the difference between outputs and outcomes.", idealKeywords: ["features", "impact", "metrics", "value", "user needs"] },
        { id: generateId(), question: "What methodologies do you use for product development?", idealKeywords: ["agile", "scrum", "sprints", "kanban", "waterfall"] },
        { id: generateId(), question: "How do you define success for a product feature?", idealKeywords: ["metrics", "KPIs", "user satisfaction", "business goals", "adoption"] },
        { id: generateId(), question: "Describe your experience working with cross-functional teams.", idealKeywords: ["collaboration", "communication", "engineering", "design", "stakeholders"] }
      ],
      mid: [
        { id: generateId(), question: "How do you develop and communicate product strategy?", idealKeywords: ["vision", "roadmap", "alignment", "stakeholders", "business goals"] },
        { id: generateId(), question: "Explain your approach to user research and validation.", idealKeywords: ["interviews", "testing", "prototypes", "feedback", "insights"] },
        { id: generateId(), question: "How do you balance technical constraints with user needs?", idealKeywords: ["trade-offs", "prioritization", "communication", "alternatives", "MVP"] },
        { id: generateId(), question: "Describe your experience with data-driven product decisions.", idealKeywords: ["analytics", "experiments", "metrics", "insights", "iteration"] },
        { id: generateId(), question: "How do you manage stakeholder expectations?", idealKeywords: ["communication", "transparency", "alignment", "priorities", "trade-offs"] }
      ],
      senior: [
        { id: generateId(), question: "How would you develop a product strategy for a new market?", idealKeywords: ["market research", "competitive analysis", "user needs", "differentiation", "go-to-market"] },
        { id: generateId(), question: "Describe your approach to building and leading product teams.", idealKeywords: ["hiring", "mentoring", "processes", "collaboration", "culture"] },
        { id: generateId(), question: "How do you align product strategy with business strategy?", idealKeywords: ["revenue", "market share", "strategic goals", "metrics", "executive alignment"] },
        { id: generateId(), question: "What frameworks do you use for making strategic product decisions?", idealKeywords: ["prioritization", "opportunity assessment", "risk management", "portfolio management", "value vs. effort"] },
        { id: generateId(), question: "How do you foster innovation within product development?", idealKeywords: ["experimentation", "user focus", "creativity", "calculated risks", "learning culture"] }
      ]
    },
    "UX Designer": {
      entry: [
        { id: generateId(), question: "What UX design tools are you proficient in?", idealKeywords: ["Figma", "Sketch", "Adobe XD", "prototyping", "wireframing"] },
        { id: generateId(), question: "Explain the difference between UX and UI design.", idealKeywords: ["experience", "interface", "usability", "aesthetics", "function"] },
        { id: generateId(), question: "How do you approach user research?", idealKeywords: ["interviews", "surveys", "usability testing", "personas", "observations"] },
        { id: generateId(), question: "Describe your design process for a typical project.", idealKeywords: ["research", "wireframes", "prototypes", "testing", "iteration"] },
        { id: generateId(), question: "What principles of visual design do you consider in your work?", idealKeywords: ["hierarchy", "contrast", "alignment", "proximity", "consistency"] }
      ],
      mid: [
        { id: generateId(), question: "How do you ensure accessibility in your designs?", idealKeywords: ["WCAG", "inclusive design", "screen readers", "color contrast", "keyboard navigation"] },
        { id: generateId(), question: "Explain your approach to information architecture.", idealKeywords: ["organization", "navigation", "taxonomy", "card sorting", "user flows"] },
        { id: generateId(), question: "How do you use data to inform design decisions?", idealKeywords: ["analytics", "user testing", "heatmaps", "metrics", "insights"] },
        { id: generateId(), question: "Describe your experience collaborating with developers.", idealKeywords: ["handoff", "specifications", "communication", "feasibility", "implementation"] },
        { id: generateId(), question: "How do you handle conflicting feedback on designs?", idealKeywords: ["prioritization", "user needs", "business goals", "testing", "evidence"] }
      ],
      senior: [
        { id: generateId(), question: "How would you establish or improve a design system?", idealKeywords: ["components", "consistency", "documentation", "collaboration", "maintenance"] },
        { id: generateId(), question: "Describe your approach to building and leading design teams.", idealKeywords: ["mentoring", "critique", "process", "culture", "collaboration"] },
        { id: generateId(), question: "How do you balance innovation with usability in design?", idealKeywords: ["familiar patterns", "testing", "iterative approach", "user expectations", "progressive disclosure"] },
        { id: generateId(), question: "How do you advocate for user needs within an organization?", idealKeywords: ["research", "data", "storytelling", "business alignment", "education"] },
        { id: generateId(), question: "What strategies do you use to measure the impact of design changes?", idealKeywords: ["metrics", "A/B testing", "usability studies", "user satisfaction", "business outcomes"] }
      ]
    },
    "QA Engineer": {
      entry: [
        { id: generateId(), question: "What testing techniques are you familiar with?", idealKeywords: ["manual testing", "automated testing", "functional testing", "regression testing", "exploratory testing"] },
        { id: generateId(), question: "Explain the difference between verification and validation.", idealKeywords: ["specifications", "requirements", "building right", "building right thing", "process"] },
        { id: generateId(), question: "How do you write effective test cases?", idealKeywords: ["clear", "concise", "repeatable", "coverage", "expected results"] },
        { id: generateId(), question: "What tools have you used for test management and bug tracking?", idealKeywords: ["JIRA", "TestRail", "Bugzilla", "documentation", "reporting"] },
        { id: generateId(), question: "Describe your approach to regression testing.", idealKeywords: ["automation", "test selection", "prioritization", "efficiency", "coverage"] }
      ],
      mid: [
        { id: generateId(), question: "How do you implement test automation frameworks?", idealKeywords: ["Selenium", "Cypress", "architecture", "maintainability", "reliability"] },
        { id: generateId(), question: "Explain your approach to API testing.", idealKeywords: ["Postman", "endpoint validation", "response codes", "payload validation", "security testing"] },
        { id: generateId(), question: "How do you ensure quality in agile development environments?", idealKeywords: ["shift left", "continuous testing", "automation", "collaboration", "short feedback loops"] },
        { id: generateId(), question: "Describe your experience with performance testing.", idealKeywords: ["load testing", "stress testing", "bottlenecks", "JMeter", "metrics"] },
        { id: generateId(), question: "How do you approach testing complex scenarios?", idealKeywords: ["decomposition", "edge cases", "boundary testing", "test data", "prioritization"] }
      ],
      senior: [
        { id: generateId(), question: "How would you design a comprehensive quality strategy for a product?", idealKeywords: ["test planning", "risk assessment", "automation strategy", "metrics", "processes"] },
        { id: generateId(), question: "Describe your approach to building and leading QA teams.", idealKeywords: ["mentoring", "process improvement", "skill development", "collaboration", "best practices"] },
        { id: generateId(), question: "How do you integrate security testing into the QA process?", idealKeywords: ["OWASP", "penetration testing", "vulnerability scanning", "threat modeling", "compliance"] },
        { id: generateId(), question: "What strategies do you use to balance thoroughness with delivery speed?", idealKeywords: ["risk-based testing", "automation", "prioritization", "shift left", "exploratory testing"] },
        { id: generateId(), question: "How do you measure and improve the effectiveness of testing?", idealKeywords: ["metrics", "defect detection", "coverage", "process improvement", "root cause analysis"] }
      ]
    }
  };
  
  return questions[role][level] || [];
};

// Mock evaluation logic (simulates AI evaluation)
export const evaluateAnswer = (answer: string, idealKeywords: string[] = []): {
  relevance: number;
  keywords: string[];
  sentiment: 'positive' | 'neutral' | 'negative';
  score: number;
} => {
  // Simple keyword matching (in a real app, this would be done by an AI model)
  const lowerAnswer = answer.toLowerCase();
  const matchedKeywords = idealKeywords.filter(keyword => 
    lowerAnswer.includes(keyword.toLowerCase())
  );
  
  // Calculate keyword match percentage
  const keywordScore = idealKeywords.length > 0 
    ? (matchedKeywords.length / idealKeywords.length) * 100 
    : 50;
  
  // Analyze length - too short is not good
  const lengthScore = Math.min(100, Math.max(0, answer.length / 10));
  
  // Determine sentiment (simplified)
  let sentiment: 'positive' | 'neutral' | 'negative' = 'neutral';
  if (keywordScore > 70) sentiment = 'positive';
  if (keywordScore < 30) sentiment = 'negative';
  
  // Calculate overall score (weighted)
  const score = Math.round((keywordScore * 0.7) + (lengthScore * 0.3));
  
  // Calculate relevance (simplified)
  const relevance = Math.min(100, Math.max(50, score + Math.random() * 20 - 10));
  
  return {
    relevance: Math.round(relevance),
    keywords: matchedKeywords,
    sentiment,
    score
  };
};

// Generate feedback based on evaluations
export const generateFeedback = (evaluations: { score: number }[]): string => {
  const averageScore = evaluations.reduce((acc, evaluation) => acc + evaluation.score, 0) / evaluations.length;
  
  let feedback = "";
  
  if (averageScore > 80) {
    feedback = "Excellent performance! You demonstrated strong knowledge and communication skills throughout the interview. Your answers were thorough and hit most of the key points we were looking for.\n\n";
    feedback += "Strengths:\n";
    feedback += "- Clear and concise communication\n";
    feedback += "- Solid technical knowledge\n";
    feedback += "- Good use of relevant examples\n\n";
    feedback += "Areas for improvement:\n";
    feedback += "- Consider elaborating more on some technical implementations\n";
    feedback += "- Continue to work on connecting your experiences to the specific job requirements\n";
    feedback += "- Practice explaining complex concepts in simpler terms";
  } else if (averageScore > 60) {
    feedback = "Good performance! You showed competence in most areas and provided reasonable answers to the questions. There's room for improvement in some aspects of your responses.\n\n";
    feedback += "Strengths:\n";
    feedback += "- Good understanding of core concepts\n";
    feedback += "- Structured responses\n";
    feedback += "- Positive communication style\n\n";
    feedback += "Areas for improvement:\n";
    feedback += "- Include more specific examples from your experience\n";
    feedback += "- Focus on incorporating more industry keywords and concepts\n";
    feedback += "- Work on providing more depth in technical explanations";
  } else {
    feedback = "Thanks for completing the interview. You showed potential but there are several areas where more preparation could help you perform better in future interviews.\n\n";
    feedback += "Strengths:\n";
    feedback += "- Willingness to tackle difficult questions\n";
    feedback += "- Basic understanding of concepts\n";
    feedback += "- Professional communication\n\n";
    feedback += "Areas for improvement:\n";
    feedback += "- Deepen your technical knowledge in key areas\n";
    feedback += "- Practice structuring more comprehensive answers\n";
    feedback += "- Research more about industry-specific terminology and concepts\n";
    feedback += "- Consider preparing specific examples from past experiences";
  }
  
  return feedback;
};
