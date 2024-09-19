"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import "./globals.css";

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

export default function Home() {
  const getJoke = async () => {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    setJoke(response.data);
  };

  const [joke, setJoke] = useState<Joke | null>(null);
  const [showPunchline, setShowPunchline] = useState(false);
  useEffect(() => {
    getJoke();
  }, []);
  return (
    <div className="flex justify-around items-center h-screen">
      <div>
        <p>{joke?.setup}</p>
        <div
          onMouseEnter={() => setShowPunchline(true)}
          onMouseLeave={() => setShowPunchline(false)}
          onClick={() => setShowPunchline(!showPunchline)}
        >
          {showPunchline ? (
            <p className="no-underline">{joke?.punchline}</p>
          ) : (
            <p className="underline">Tap or hover to view</p>
          )}
        </div>
        <button
          type="button"
          onClick={getJoke}
          className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-800 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:bg-green-400 disabled:shadow-none ml-2"
        >
          One More
        </button>
      </div>
    </div>
  );
}
