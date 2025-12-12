"use client";

import { useState } from "react";
import "../../styles/symptoms.css";

export default function Symptoms() {
  const [symptom, setSymptom] = useState(""); // tracks user input
  const [symptomsList, setSymptomsList] = useState([]); // stores list of symptoms
  const [severity, setSeverity] = useState(""); // tracks severity level

  function userInput(e) {
    e.preventDefault();

    // adds symptom to list
    const newList = [...symptomsList, symptom];
    setSymptomsList(newList);
    setSymptom("");

    // determines severity based on no. of symptoms
    if (newList.length >= 5) {
      setSeverity("high");
    } else if (newList.length >= 3) {
      setSeverity("medium");
    } else {
      setSeverity("low");
    }
  }

    function handleInputChange(e) {
      setSymptom(e.target.value);
    }

  return (
    <div className={`symptomsPage ${severity}`}>
      <h1>Patient Symptoms</h1>

      <form onSubmit={userInput}>
        <input
          placeholder="Enter symptom..."
          type="text"
          value={symptom}
          onChange={handleInputChange}
        />
        <button type="submit">Add Symptom</button>
      </form>

      <div className="symptomsList">
        <h2>Symptoms Recorded:</h2>
        <ul>
          {symptomsList[0] && <li>{symptomsList[0]}</li>}
          {symptomsList[1] && <li>{symptomsList[1]}</li>}
          {symptomsList[2] && <li>{symptomsList[2]}</li>}
          {symptomsList[3] && <li>{symptomsList[3]}</li>}
          {symptomsList[4] && <li>{symptomsList[4]}</li>}
          {symptomsList[5] && <li>{symptomsList[5]}</li>}
        </ul>
      </div>

      {severity !== "" && (
        <p className="severityMessage">
          {severity === "low" && "Mild symptoms, monitor yourself at home."}
          {severity === "medium" && "Moderate symptoms, consider seeing a doctor."}
          {severity === "high" && "Severe symptoms, see a doctor immediately!"}
        </p>
      )}
    </div>
  );
}
