import React, { useState } from "react";
import UploadCSV from "./components/UploadCSV";
import EmailForm from "./components/EmailForm";
import "./App.css";

function App() {
  const [validEmails, setValidEmails] = useState([]);
  const [invalidEmails, setInvalidEmails] = useState([]);

  return (
    <div className="App">
      <h1>📧 Mass Mailer App</h1>

      {/* Upload CSV Component */}
      <UploadCSV setValidEmails={setValidEmails} setInvalidEmails={setInvalidEmails} />

      {/* Email Lists */}
      <div className="email-list">
        <div className="email-box valid">
          <h2>✅ Valid Emails ({validEmails.length})</h2>
          {validEmails.map((email, idx) => (
            <div key={idx} className="email-item">{email}</div>
          ))}
        </div>

        <div className="email-box invalid">
          <h2>❌ Invalid Emails ({invalidEmails.length})</h2>
          {invalidEmails.map((email, idx) => (
            <div key={idx} className="email-item">{email}</div>
          ))}
        </div>
      </div>

      {/* Email Form */}
      {validEmails.length > 0 && <EmailForm validEmails={validEmails} />}
    </div>
  );
}

export default App;
