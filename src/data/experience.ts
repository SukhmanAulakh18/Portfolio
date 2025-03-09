interface ExperienceItem {
    company: string;
    position: string;
    duration: string;
    logo?: string;
    achievements: string[];
  }

export const experienceData = [
    {
      position: "Full Stack Developer Intern",
      company: "Smakrita Bharati",
      location: "Mississauga, ON",
      duration: "Sep 2024 - Dec 2024",
      logo: "/assets/images/smakrita-bharati-logo.png",
      achievements: [
        "Engineered an interactive learning platform, enhancing user engagement by 30% through improved UI/UX design.",
        "Integrated a MongoDB-based analytics system with optimized queries, improving performance by 25%.",
        "Built an interactive learning module with drag-and-drop features and optimized page load times by 15%.",
        "Managed code reviews and agile practices, reducing bundle size by 18% and enhancing maintainability.",
        "Implemented responsive designs ensuring cross-browser compatibility and accessibility compliance."
      ]
    },
    {
      position: "Software Engineering Resident",
      company: "Headstarter",
      location: "Toronto, ON",
      duration: "Aug 2024 - Nov 2024",
      logo: "/assets/images/headstarter-logo.png",
      achievements: [
        "Developed ML features achieving 85% prediction accuracy through advanced algorithms implementation.",
        "Designed scalable backend architecture with improved error handling and request validation.",
        "Reduced runtime errors by 40% through implementation of type-safe data validation using Zod.",
        "Led code reviews and mentoring sessions to foster collaborative development practices."
      ]
    }
  ];