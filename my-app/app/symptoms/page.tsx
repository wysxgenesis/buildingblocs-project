import '../styles/symptoms.css';
export default function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />;
}

//pages/symptoms.js (Next.js page)
import {useState} from "react";
export default function SymptomsPage () {
  const [symptoms, setSymptoms]=useState(" ");
  const [list, setList]=useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    //just add to local list (not real database yet)
    setList([...list, symptom]);
    setSymptom("");
  }

  return (
    <div className="p-6">
      <h1>className="text-xl font-bold">Patient Symptoms</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input type="text" placeholder="Enter symptom..."value={symptom} onChange={(e)=> setSymptom(e.target.value)} className="border p-2 rounded w-full"/>
        <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">Add Symptom</button>
      </form>

      <div className="mt-4">
        <h2 className="font-semibold>Symptoms List:</h2>
        <ul className="list-disc ml-6">
        {list.map((s, i)=> (
          <li key={i}>{s}</li>
          ))}
        </ul>
      </div)
    </div>
  );
