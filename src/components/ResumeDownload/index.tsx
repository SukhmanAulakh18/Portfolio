import React from 'react';

interface ResumeDownloadProps {
  className?: string;
}

export const ResumeDownload: React.FC<ResumeDownloadProps> = ({ className }) => {
  return (
    <a 
      href="/resume.pdf" 
      className={`resume-download-btn ${className || ''}`}
      target="_blank" 
      rel="noopener noreferrer"
      download
    >
      Download Resume
    </a>
  );
};