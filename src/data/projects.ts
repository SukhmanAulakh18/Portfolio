export interface Project {
    id: string;
    name: string;
    description: string;
    image: string;
    technologies: string[];
    github?: string;
    live?: string;
  }
  
  export const projectsData: Project[] = [
    {
      id: "healthcare-system",
      name: "Healthcare Management System",
      description: "A comprehensive healthcare management system with role-based access control and optimized data access.",
      image: "/images/healthcare-system.jpg",
      technologies: ["Spring Boot", "React", "Material-UI", "H2 Database", "OAuth 2.0"],
      github: "https://github.com/SukhmanAulakh18/healthcare-management-system",
      live: "https://healthcare-management-system-demo.com"
    },
    {
      id: "music-platform",
      name: "Music Streaming Platform",
      description: "Feature-rich music streaming platform with offline capabilities and custom audio player.",
      image: "/images/music-platform.jpg",
      technologies: ["MERN Stack", "Firebase", "IndexedDB", "Spotify API", "Redux", "Web Audio API"],
      github: "https://github.com/SukhmanAulakh18/music-streaming-platform",
      live: "https://music-streaming-platform-demo.com"
    },
    {
      id: "ai-news",
      name: "AI News Intelligence Platform",
      description: "ML-powered news platform with fast response times and content relevance optimization.",
      image: "/images/ai-news.jpg",
      technologies: ["Flask", "ML", "BERT", "Redis", "Celery", "Docker", "AWS ECS"],
      github: "https://github.com/SukhmanAulakh18/ai-news-intelligence-platform",
      live: "https://ai-news-intelligence-platform-demo.com"
    }
  ];