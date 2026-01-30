import React from 'react';
import './ProcessWorkflowSection.css';

const ProcessWorkflowSection = () => {
  return (
    <section className="process-workflow">
      <div className="process-workflow-content">
        <h2 className="section-heading">PROCESS & WORKFLOW</h2>
        
        <div className="faq-item">
          <h3>WHAT IS A DISCOVERY CALL?</h3>
          <p>
            A quick call (Zoom or phone) to  understand your needs. After this, we work via email, WhatsApp, or  monthly Zoom check-ins. We also send a questionnaire to refine the  project direction.
How does your design process work?
          </p>
          <p><strong>How the design process works:</strong></p>
          <ol>
            <li><strong>Discovery & Quote</strong> – We discuss your project, quote, and start after the deposit is paid.</li>
            <li><strong>Concept Development</strong> – We sketch ideas before moving to digital design.</li>
            <li><strong>Refinement & Revisions</strong> – Up to 3 rough concepts, with 1–3 revision rounds.</li>
            <li><strong>Final Delivery</strong> – After approval and final payment, we send the completed files.</li>
          </ol>
        </div>

        <div className="faq-item">
          <h3>WHEN DOES A PROJECT BEGIN?</h3>
          <p>
            Once payment is received, your project enters our production queue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessWorkflowSection;
