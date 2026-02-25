'use client';
import { useState, useEffect } from "react";

export default function Page() {

  // TIMER STATE (25 min default → 1500 seconds)
  const [time, setTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  // MOOD STATE
  const [moodBefore, setMoodBefore] = useState(null);
  const [moodAfter, setMoodAfter] = useState(null);

  // SESSION STORAGE
  const [sessions, setSessions] = useState([]);

  // TIMER EFFECT
  useEffect(() => {
    let interval;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);


  // LOAD FROM LOCAL STORAGE
  useEffect(() => {
    const saved = localStorage.getItem("focusSessions");
    if (saved) {
      setSessions(JSON.parse(saved));
    }
  }, []);

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("focusSessions", JSON.stringify(sessions));
  }, [sessions]);


  // FORMAT TIME
  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
  }


  // SAVE SESSION
  function saveSession() {

    if (!moodBefore || !moodAfter) {
      alert("Select moods before and after");
      return;
    }

    const newSession = {
      date: new Date().toLocaleString(),
      moodBefore,
      moodAfter,
      duration: 25
    };

    setSessions([...sessions, newSession]);

    // reset
    setMoodBefore(null);
    setMoodAfter(null);
    setTime(1500);
    setIsRunning(false);
  }


  const moods = ["😀","😐","😔","😴","🔥"];


  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">

      <h1 className="text-3xl font-bold mb-6">
        Focus & Mood Companion
      </h1>


      {/* TIMER */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">

        <div className="text-5xl font-mono mb-4">
          {formatTime(time)}
        </div>

        <div className="space-x-2">
          <button
            onClick={() => setIsRunning(true)}
            className="bg-green-500 px-4 py-2 rounded"
          >
            Start
          </button>

          <button
            onClick={() => setIsRunning(false)}
            className="bg-yellow-500 px-4 py-2 rounded"
          >
            Pause
          </button>

          <button
            onClick={() => {
              setTime(1500);
              setIsRunning(false);
            }}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Reset
          </button>
        </div>

      </div>


      {/* MOOD BEFORE */}
      <div className="mt-6 bg-gray-800 p-4 rounded-xl">
        <h2 className="mb-2">Mood Before</h2>

        <div className="space-x-2">
          {moods.map(m => (
            <button
              key={m}
              onClick={() => setMoodBefore(m)}
              className={`text-2xl p-2 rounded ${
                moodBefore === m ? "bg-blue-500" : "bg-gray-700"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>


      {/* MOOD AFTER */}
      <div className="mt-4 bg-gray-800 p-4 rounded-xl">
        <h2 className="mb-2">Mood After</h2>

        <div className="space-x-2">
          {moods.map(m => (
            <button
              key={m}
              onClick={() => setMoodAfter(m)}
              className={`text-2xl p-2 rounded ${
                moodAfter === m ? "bg-blue-500" : "bg-gray-700"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>


      {/* SAVE BUTTON */}
      <button
        onClick={saveSession}
        className="mt-6 bg-purple-600 px-6 py-2 rounded text-lg"
      >
        Save Session
      </button>



      {/* SUMMARY */}
      <div className="mt-8 bg-gray-800 p-4 rounded-xl w-full max-w-md">
        <h2 className="text-xl mb-2">
          Total Sessions: {sessions.length}
        </h2>
      </div>



      {/* HISTORY */}
      <div className="mt-4 bg-gray-800 p-4 rounded-xl w-full max-w-md">

        <h2 className="text-xl mb-2">Session History</h2>

        {sessions.length === 0 && (
          <p>No sessions yet</p>
        )}

        {sessions.map((s, index) => (
          <div
            key={index}
            className="bg-gray-700 p-2 rounded mb-2"
          >
            <p>{s.date}</p>
            <p>
              {s.moodBefore} → {s.moodAfter}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}