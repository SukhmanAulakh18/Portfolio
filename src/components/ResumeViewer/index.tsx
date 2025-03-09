import React, { useState } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Eye, ExternalLink } from "lucide-react";
import "./ResumeViewer.css";

interface ResumeViewerProps {
  className?: string;
  resumePath: string;
  resumeFilename?: string;
}

export const ResumeViewer: React.FC<ResumeViewerProps> = ({ 
  className, 
  resumePath, 
  resumeFilename = "Resume.pdf" 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Create document object for the doc viewer
  const docs = [{ uri: resumePath, fileName: resumeFilename }];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = resumeFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <button 
        className={`resume-viewer-btn ${className || ""}`}
        onClick={() => setIsOpen(true)}
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
            onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
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
                    onClick={() => window.open(resumePath, "_blank")}
                    title="Open in New Tab"
                  >
                    <ExternalLink size={18} />
                  </button>
                  <button 
                    className="resume-action-btn close"
                    onClick={() => setIsOpen(false)}
                    title="Close"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
              
              <div className="resume-modal-content">
                <DocViewer
                  documents={docs}
                  pluginRenderers={DocViewerRenderers}
                  style={{ height: 600 }}
                  config={{
                    header: {
                      disableHeader: true,
                      disableFileName: true,
                      retainURLParams: false
                    }
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeViewer;
