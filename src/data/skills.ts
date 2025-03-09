import React, { JSX } from 'react';
import { Code, Cloud, Palette, Wrench, Monitor } from 'lucide-react';

export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  category: string;
  icon: JSX.Element; // Change from React.ReactNode to JSX.Element
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    icon: React.createElement(Code), // Use createElement instead of JSX
    skills: [
      { name: 'C/C++', proficiency: 80 },
      { name: 'C#', proficiency: 75 },
      { name: 'Java', proficiency: 70 },
      { name: 'Python', proficiency: 85 },
      { name: 'JavaScript/TypeScript', proficiency: 90 },
      { name: 'SQL', proficiency: 80 }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: React.createElement(Cloud),
    skills: [
      { name: 'AWS (EC2, DynamoDB, S3, SQS, Lambda)', proficiency: 80 },
      { name: 'Kubernetes', proficiency: 70 },
      { name: 'Docker', proficiency: 75 },
      { name: 'CI/CD', proficiency: 75 }
    ]
  },
  {
    category: 'Web Technologies',
    icon: React.createElement(Palette),
    skills: [
      { name: 'Spring', proficiency: 70 },
      { name: 'Angular', proficiency: 65 },
      { name: 'React.js', proficiency: 90 },
      { name: 'Node.js', proficiency: 80 },
      { name: 'MongoDB', proficiency: 75 },
      { name: 'REST APIs', proficiency: 85 }
    ]
  },
  {
    category: 'Development Tools',
    icon: React.createElement(Wrench),
    skills: [
      { name: 'Git', proficiency: 85 },
      { name: 'VS Code', proficiency: 90 },
      { name: 'IntelliJ IDEA', proficiency: 70 },
      { name: 'Postman', proficiency: 80 },
      { name: 'Figma', proficiency: 75 }
    ]
  },
  {
    category: 'OS & Networking',
    icon: React.createElement(Monitor),
    skills: [
      { name: 'Linux', proficiency: 80 },
      { name: 'Windows', proficiency: 85 },
      { name: 'macOS', proficiency: 75 },
      { name: 'TCP/IP', proficiency: 80 },
      { name: 'DNS', proficiency: 75 },
      { name: 'DHCP', proficiency: 75 },
      { name: 'VPN', proficiency: 70 }
    ]
  }
];

export default skillsData;