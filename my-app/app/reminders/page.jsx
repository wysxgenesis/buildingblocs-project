"use client";

import { useState, useEffect } from "react";
import "../../styles/reminders.css";

export default function Reminders() {
  const [medName, setMedName] = useState("");
  const [dosage, setDosage] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("Reminder not set");
  const [alerted, setAlerted] = useState(false);

  function addIt() {
    if(medName && dosage && time){
      setStatus("Reminder set!")
      setAlerted(false)
    } else {
      setStatus("Reminder not set")
    }
  }

  useEffect(function() {
    var x = setInterval(function() {
      if(!time) return
      var parts = time.split(":")
      var h = Number(parts[0])
      var m = Number(parts[1])
      var now = new Date()
      if(!alerted && now.getHours() === h && now.getMinutes() === m){
        setAlerted(true)
        alert("Take"+" "+medName+" "+dosage)
      }
    },1000)
    return function() {
      clearInterval(x)
    }
  })

  return (
    <div className="remindersBox">
      <h1>Medication name:</h1>
      <input type="text" placeholder="medication name.." value={medName} onChange={function(e){setMedName(e.target.value)}} />

      <h1>Dosage:</h1>
      <input type="text" placeholder="dosage.." value={dosage} onChange={function(e){setDosage(e.target.value)}} />

      <h1>Time:</h1>
      <input type="time" placeholder="time.." value={time} onChange={function(e){setTime(e.target.value)}} />

      <div className="buttonStuff">
        <button onClick={addIt}>Add Reminder</button>
        <p>{status}</p>
      </div>

      <div className="buttonStuff">
        <button onClick={function(){window.history.go(-2)}}>Back home</button>
      </div>
    </div>
  );
}
