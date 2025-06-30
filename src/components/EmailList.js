import React from "react";

const EmailList = ({ validEmails, invalidEmails }) => {
  return (
    <div>
      <h3>✅ Valid Emails ({validEmails.length})</h3>
      <ul>{validEmails.map((email, i) => <li key={i}>{email}</li>)}</ul>

      <h3>❌ Invalid Emails ({invalidEmails.length})</h3>
      <ul>{invalidEmails.map((email, i) => <li key={i}>{email}</li>)}</ul>
    </div>
  );
};

export default EmailList;
