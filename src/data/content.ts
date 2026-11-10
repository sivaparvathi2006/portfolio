export const profile = {
  name: 'Siva Parvathi N.',
  role: 'AI & Data Science Student',
  tagline:
    'An AI & Data Science undergraduate building practical, intelligent systems — from semantic search and RAG to computer vision and automation testing.',
  email: 'sivaparvathi20072006@gmail.com',
  location: 'Chennai, India',
  photo: 'https://images.pexels.com/photos/7606070/pexels-photo-7606070.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  socials: [
    { label: 'GitHub', href: 'https://github.com/sivaparvathi097', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/sivaparvathi', icon: 'linkedin' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/sivaparvathi097', icon: 'leetcode' },
    { label: 'Email', href: 'mailto:sivaparvathi20072006@gmail.com', icon: 'mail' },
  ],
};

export const stats = [
  { value: '9.04', label: 'Current CGPA' },
  { value: '3', label: 'Internships' },
  { value: '3', label: 'Featured projects' },
  { value: '6', label: 'Certifications' },
];

export const about = {
  headline: 'Curious mind. Technical thinking. Building intelligent solutions.',
  intro:
    'AI & Data Science undergraduate at RMKCET with a CGPA of 9.04, focused on machine learning, NLP, and generative AI. I build practical applications end-to-end — from data and models to APIs and interfaces — and enjoy learning emerging technologies to solve real problems.',
  highlights: [
    { value: '9.04', label: 'CGPA' },
    { value: 'B.Tech', label: 'AI & Data Science' },
    { value: 'AI / ML', label: 'Technical Focus' },
    { value: 'Chennai', label: 'India' },
  ],
  interests: ['Machine Learning', 'Deep Learning', 'Generative AI', 'LLMs', 'RAG', 'NLP', 'Software Development'],
  approach:
    'I learn emerging technologies and develop practical applications that put them to use — turning research and concepts into working, end-to-end systems.',
};

export const skillGroups = [
  {
    title: 'Programming',
    icon: 'code',
    skills: ['Java', 'Python', 'SQL'],
  },
  {
    title: 'AI / ML',
    icon: 'brain',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Transformers', 'Scikit-learn', 'XGBoost', 'LightGBM'],
  },
  {
    title: 'Generative AI',
    icon: 'sparkles',
    skills: ['LLMs', 'RAG', 'Vector Databases', 'Prompt Engineering'],
  },
  {
    title: 'Web / Backend',
    icon: 'globe',
    skills: ['REST APIs', 'FastAPI', 'Flask', 'React.js', 'HTML5', 'CSS3'],
  },
  {
    title: 'Databases / Cloud',
    icon: 'database',
    skills: ['MongoDB', 'PostgreSQL', 'Microsoft Azure'],
  },
  {
    title: 'Testing / Tools',
    icon: 'wrench',
    skills: ['Playwright', 'Git', 'GitHub', 'Postman', 'Power BI'],
  },
  {
    title: 'Core CS',
    icon: 'cpu',
    skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
];

export type ProjectDetail = {
  problem: string;
  objective: string;
  stack: string[];
  implementation: string;
  features: string[];
  architecture: string;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  tags: string[];
  accent: 'lavender' | 'rose' | 'blue';
  detail: ProjectDetail;
};

export const projects: Project[] = [
  {
    slug: 'pubmed-semantic-search',
    title: 'PubMed Semantic Search Engine',
    shortDescription:
      'A biomedical research search engine using Transformer-based embeddings for semantic retrieval, similarity search, and result ranking — with OCR support for scanned content.',
    tags: ['Python', 'FastAPI', 'Sentence Transformers', 'BM25', 'React.js'],
    accent: 'lavender',
    detail: {
      problem:
        'Biomedical researchers need to find relevant papers quickly, but traditional keyword search misses semantically related results and cannot process scanned or image-based documents.',
      objective:
        'Build a search engine that understands the meaning of biomedical queries, retrieves semantically relevant papers, and can extract text from scanned research documents.',
      stack: ['Python', 'FastAPI', 'Sentence Transformers', 'BM25', 'React.js'],
      implementation:
        'The backend uses Sentence Transformers to generate dense embeddings of paper abstracts and queries, combined with BM25 sparse scoring for hybrid retrieval. A FastAPI service handles search requests and returns ranked results. An OCR module processes image-based and scanned content so that older, non-digitised papers are searchable. The React frontend provides a query interface and displays ranked results with similarity context.',
      features: [
        'Transformer-based semantic embeddings for biomedical text',
        'Hybrid retrieval combining dense and BM25 sparse search',
        'Similarity scoring and result ranking',
        'OCR pipeline for scanned and image-based documents',
        'React-based search interface',
      ],
      architecture:
        'React frontend → FastAPI API gateway → embedding service (Sentence Transformers) + BM25 retriever → document store. OCR module feeds extracted text into the same indexing pipeline.',
    },
  },
  {
    slug: 'auto-reading-ncrp',
    title: 'Auto-Reading NCRP Complaint System',
    shortDescription:
      'An automated complaint document system that extracts text via OCR and uses ML (XGBoost) to prioritise complaints, with a React interface for tracking.',
    tags: ['Python', 'OCR', 'OpenCV', 'XGBoost', 'React.js', 'REST APIs'],
    accent: 'rose',
    detail: {
      problem:
        'Processing large volumes of complaint documents manually is slow and inconsistent, making it hard to prioritise urgent cases.',
      objective:
        'Automate the extraction of text from complaint documents and use machine learning to classify and prioritise complaints so that urgent cases surface first.',
      stack: ['Python', 'OCR', 'OpenCV', 'XGBoost', 'React.js', 'REST APIs'],
      implementation:
        'OpenCV preprocesses scanned complaint documents (denoising, thresholding) before OCR extracts the text. Extracted features are fed into an XGBoost classifier that predicts a priority level for each complaint. A REST API exposes the extraction and classification pipeline, and a React frontend lets staff submit documents and track complaint status and priority.',
      features: [
        'OCR-based text extraction from complaint documents',
        'OpenCV image preprocessing for scan quality',
        'XGBoost-based complaint prioritisation',
        'REST API for extraction and classification',
        'React dashboard for complaint tracking',
      ],
      architecture:
        'React frontend → REST API → OCR module (OpenCV preprocessing + text extraction) → XGBoost priority classifier → complaint store. Results returned to the dashboard for tracking.',
    },
  },
  {
    slug: 'copbot',
    title: 'CopBot — AI Police Assistance Chatbot',
    shortDescription:
      'An AI-powered police assistance chatbot built for the Thoothukudi District Police Hackathon 2025, using NLP to handle queries through a conversational interface.',
    tags: ['Python', 'FastAPI', 'React.js', 'MongoDB', 'NLP', 'REST APIs'],
    accent: 'blue',
    detail: {
      problem:
        'District police handle many repetitive public queries that could be automated, freeing up staff for higher-priority work.',
      objective:
        'Build a conversational AI assistant that can understand and respond to common police-related queries, developed as a hackathon prototype for the Thoothukudi District Police.',
      stack: ['Python', 'FastAPI', 'React.js', 'MongoDB', 'NLP', 'REST APIs'],
      implementation:
        'A FastAPI backend hosts the NLP pipeline that processes user messages and generates responses. Conversation history and user context are stored in MongoDB. The React frontend provides a chat interface where users interact with the assistant. The system was developed as a prototype for the Thoothukudi District Police Hackathon 2025.',
      features: [
        'NLP-based conversational query handling',
        'FastAPI backend for the chatbot service',
        'MongoDB for conversation and context storage',
        'React chat interface',
        'REST API integration between frontend and backend',
      ],
      architecture:
        'React chat frontend → FastAPI API → NLP processing layer → MongoDB (conversation store). Responses are generated and returned through the same API.',
    },
  },
];

export const experience = [
  {
    role: 'AI, Data Science & Web Development Intern',
    company: 'Corizo',
    period: 'June 2024 — January 2025',
    description:
      'Internship in AI, data science, and web development. Gained exposure to data preprocessing, machine learning concepts, and building web interfaces for AI features through guided projects and training.',
    tags: ['Python', 'Machine Learning', 'Data Science', 'Web Development'],
  },
  {
    role: 'Java Development & Data Analyst Intern',
    company: 'Elevate Labs',
    period: 'June 2025 — August 2025',
    description:
      'Worked with Core Java, OOP principles, and file handling. Performed data analysis tasks and developed backend logic and data-handling workflows using Java.',
    tags: ['Core Java', 'OOP', 'File Handling', 'Data Analysis'],
  },
  {
    role: 'Automation Testing Intern',
    company: 'PositEasy',
    period: 'June 2026 — July 2026',
    description:
      'Automation testing of a billing web application using Playwright with Java. Wrote and maintained test scripts, identified defects, and performed regression testing across application scenarios.',
    tags: ['Playwright', 'Java', 'Test Scripts', 'Regression Testing'],
  },
];

export const education = [
  {
    degree: 'B.Tech — Artificial Intelligence and Data Science',
    institution: 'R.M.K. College of Engineering and Technology',
    period: '2023 — Present',
    detail: 'CGPA: 9.04',
  },
  {
    degree: 'HSC — Biology with Mathematics',
    institution: 'Higher Secondary Certificate',
    period: '2022 — 2023',
    detail: 'Percentage: 93%',
  },
];

export const certifications = [
  {
    name: 'GUVI Generative AI',
    issuer: 'GUVI',
    credentialUrl: '',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Generative AI Professional',
    issuer: 'Oracle',
    credentialUrl: '',
  },
  {
    name: 'Introduction to MongoDB',
    issuer: 'MongoDB',
    credentialUrl: '',
  },
  {
    name: 'NPTEL Cloud Computing — Elite',
    issuer: 'NPTEL',
    credentialUrl: '',
  },
  {
    name: 'NPTEL Python for Data Science — Elite+Silver',
    issuer: 'NPTEL',
    credentialUrl: '',
  },
  {
    name: 'ML Fundamentals',
    issuer: 'Celonis Academy',
    credentialUrl: '',
  },
];

export const achievements = [
  {
    title: 'Academic Excellence Award',
    context: 'RMKCET 2025',
    description: 'Received a ₹10,000 Academic Excellence Award at R.M.K. College of Engineering and Technology.',
    type: 'award',
  },
  {
    title: 'Top 3 Winner — RMKCET Ideathon 2025',
    context: 'Ideathon',
    description: 'Finished in the top 3 at the RMKCET Ideathon 2025.',
    type: 'competition',
  },
  {
    title: 'Top 25 Finalist — State Level Hackathon, Ooty',
    context: 'State Level Hackathon',
    description: 'Selected as a top 25 finalist at a state-level hackathon held in Ooty.',
    type: 'competition',
  },
  {
    title: 'NPTEL Elite Achiever 2024-2026',
    context: 'NPTEL',
    description: 'Achieved NPTEL Elite status across multiple courses during 2024-2026.',
    type: 'academic',
  },
  {
    title: 'Joint Secretary — RMKCET Technical Events 2026',
    context: 'Leadership',
    description: 'Serving as Joint Secretary for technical events at RMKCET in 2026.',
    type: 'leadership',
  },
  {
    title: 'SIH 2024 — Deepfake Detection',
    context: 'Smart India Hackathon',
    description: 'Inter-college finalist at SIH 2024 for the Deepfake Detection problem statement.',
    type: 'hackathon',
  },
  {
    title: 'SIH 2025 — AI-Powered Smart CCTV Application',
    context: 'Smart India Hackathon',
    description: 'Inter-college finalist at SIH 2025 for the AI-Powered Smart CCTV Application problem statement.',
    type: 'hackathon',
  },
];

export const research = [
  {
    title: 'Deepfake Detection',
    venue: '5th International Conference, Vellore',
    description:
      'Presented research on deepfake detection at the 5th International Conference held in Vellore.',
    link: '',
  },
  {
    title: 'AI-Powered Rural Healthcare Continuity System',
    venue: 'National Conference, Dr. MGR University',
    description:
      'Presented work on an AI-powered rural healthcare continuity system at a national conference at Dr. MGR University.',
    link: '',
  },
];

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Technical Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Education', path: '/education' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Research', path: '/research' },
  { label: 'Contact', path: '/contact' },
];
