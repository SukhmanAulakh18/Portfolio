export interface Project {
    title: string;
    duration: string;
    technologies: string[];
    description: string;
    github: string;
    demo?: string;
  }
  
  export interface Experience {
    position: string;
    company: string;
    duration: string;
    achievements: string[];
  }
  
  export interface Skill {
    category: string;
    skills: string[];
  }
  
  export interface ContactInfo {
    email: string;
    phone: string;
    location: string;
  }
  
  export interface Education {
    institution: string;
    program: string;
    duration: string;
    cgpa: string;
    relevantCoursework?: string[];
    certificates?: string[];
  }
  
  export interface Activity {
    title: string;
    description: string;
    year: string;
  }