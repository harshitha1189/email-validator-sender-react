import React from "react";
import Papa from "papaparse";
import validator from "validator";

const UploadCSV = ({ setValidEmails, setInvalidEmails }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      complete: (result) => {
        const data = result.data.flat();
        const valid = [];
        const invalid = [];

        data.forEach((email) => {
          if (validator.isEmail(email)) valid.push(email);
          else if (email.trim()) invalid.push(email);
        });

        setValidEmails(valid);
        setInvalidEmails(invalid);
      },
    });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
};

export default UploadCSV;
