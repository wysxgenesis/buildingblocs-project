//pages/symptoms.js 
import '../styles/symptoms.css';
export default function Symptoms() {
  return (
    <div className="p-6 bg-gray-100 symptoms-container">
        <h1 className="text-2xl font-bold text-blue-700 title">Patient Symptoms</h1>

        <form className="mt-4 flex flex-col gap-2">
            <input type="text" placeholder="Enter symptom..." className="border p-2 rounded w-full symptom-input"/>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 symptom-button">Add Symptom</button>
        </form>
    </div>
  );
}