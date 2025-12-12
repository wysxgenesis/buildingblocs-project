"use client";

import {useState} from 'react';
import '../../styles/diagnosis.css'
export default function Diagnosis() {
    const [diagnosis, setDiagnosis] = useState('');
    const [list, setList] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setList([...list, diagnosis]);
        setDiagnosis('');
    }
    
    return (
        <div className="p-6 bg-gray-100 diagnosis-container">
            <h1 className="text-2xl font-bold text-purple-700 title">Doctor Diagnosis</h1>

            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
                <input 
                    type="text" placeholder="Enter diagnosis..." value= {diagnosis} 
                    onChange={(e) => setDiagnosis(e.target.value)} 
                    className="border p-2 rounded w-full diagnosis-input"
                />
                <button type="submit" className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600 diagnosis-button">Add Diagnosis</button>
            </form>

            <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Diagnosis List:</h2>
                <ul className="list-disc ml-6">
                    {list.map((d, i) => (
                        <li key={i}>{d}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
                    