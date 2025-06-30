
import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "./EmailForm.css";

const EmailForm = ({ validEmails }) => {
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    emailjs.init("NnLN3f3mDOvPLpDLk");
  }, []);

  const sendEmails = () => {
    if (!from || !subject || !body) {
      alert("Please fill all fields.");
      return;
    }

    validEmails.forEach((email) => {
      emailjs.send(
        "service_td02rv2",
        "template_22mqhe6",
        {
          to_email: email,
          from_email: from,
          subject,
          message: body,
        },
        "NnLN3f3mDOvPLpDLk"
      );
    });

    alert("Emails sent!");
    setFrom("");
    setSubject("");
    setBody("");
  };

  return (
    <div className="email-form">
    <input
  type="email"
  className="from-email"
  placeholder="From Email"
  value={from}
  onChange={(e) => setFrom(e.target.value)}
/>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Email Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={sendEmails}>SEND EMAILS</button>
    </div>
  );
};

export default EmailForm;
