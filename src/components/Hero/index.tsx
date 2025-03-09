import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Eye, ExternalLink } from 'lucide-react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import './ResumeViewer.css';

// Use a direct path to the file in public folder
const resumePath = process.env.PUBLIC_URL + '/resume/Resume.pdf';

interface ResumeViewerProps {
  className?: string;
}

export const ResumeViewer: React.FC<ResumeViewerProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const openViewer = () => setIsOpen(true);
  const closeViewer = () => setIsOpen(false);
  
  const handleDocumentLoad = () => {
    setIsLoading(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = "Sukhmanpreet_Singh_Aulakh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openInNewTab = () => {
    window.open(resumePath, '_blank');
  };

  // Define the documents array for DocViewer
  const docs = [
    { 
      uri: resumePath,
      // You can also specify a fileName if needed
      fileName: "Resume.pdf"
    }
  ];

  return (
    <>
      <button 
        className={`resume-viewer-btn ${className || ''}`}
        onClick={openViewer}
        aria-label="View Resume"
      >
        <Eye size={16} className="icon-left" />
        <span>Resume</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="resume-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeViewer();
            }}
          >
            <motion.div
              className="resume-modal"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="resume-modal-header">
                <h3>Resume Preview</h3>
                <div className="resume-modal-actions">
                  <button 
                    className="resume-action-btn download"
                    onClick={handleDownload}
                    title="Download Resume"
                  >
                    <Download size={18} />
                    <span>Download</span>
                  </button>
                  <button 
                    className="resume-action-btn external"
                    onClick={openInNewTab}
                    title="Open in New Tab"
                  >
                    <ExternalLink size={18} />
                  </button>
                  <button 
                    className="resume-action-btn close"
                    onClick={closeViewer}
                    title="Close"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
              
              <div className="resume-modal-content">
                {isLoading && (
                  <div className="resume-loading">
                    <div className="loading-spinner"></div>
                    <span>Loading resume...</span>
                  </div>
                )}
                
                <div className="doc-viewer-container">
                  <DocViewer
                    documents={docs}
                    pluginRenderers={DocViewerRenderers}
                    config={{
                      header: {
                        disableHeader: true,
                        disableFileName: true,
                        retainURLParams: false
                      },
                      loadingRenderer: {
                        overrideComponent: () => null // We're handling loading state ourselves
                      },
                      pdfZoom: {
                        defaultZoom: 1.2,
                        zoomJump: 0.2
                      }
                    }}
                    theme={{
                      primary: "#2563eb",
                      secondary: "#00d4ff",
                      tertiary: "#0f172a",
                      textPrimary: "white",
                      textSecondary: "#cbd5e1",
                      textTertiary: "#94a3b8",
                      disableThemeScrollbar: false
                    }}
                    style={{ 
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#f8fafc'
                    }}
                    onDocumentLoad={handleDocumentLoad}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeViewer;