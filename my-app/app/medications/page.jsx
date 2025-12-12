"use client";

import {useState} from 'react';
import "../../styles/medications.css";

export default function Medications() {
    const [medication, setMedication] = useState('');
    const [frequency, setFrequency] = useState('');
    const [list, setList] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setList([...list, { medication, frequency }]);
        setMedication('');
        setFrequency('');
    }
    
    return (
        <div className="p-6 bg-gray-100 medications-container">
            <h1 className="text-2xl font-bold text-green-700 title">Medication Tracker</h1>

            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
                <input type="text" placeholder="Medication name..." value={medication} onChange={(e) => setMedication(e.target.value)} className="border p-2 rounded w-full medication-input"
                />

                <input type="text" placeholder="Dosage frequency..." value={frequency} onChange={(e) => setFrequency(e.target.value)} className="border p-2 rounded w-full frequency-input"
                />

                <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600 medication-button">Add Medication</button>
            </form>

            <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Medications List:</h2>
                <ul className="list-disc ml-6">
                    {list.map((m, i)=> (
                        <li key={i}>{m.medication} - {m.frequency}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
            