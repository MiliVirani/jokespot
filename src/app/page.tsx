"use client";

import axios from "axios";
import { useState } from "react";

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

  return (
    <>
      <p>{joke?.setup}</p>
      <p>{joke?.punchline}</p>
      <button onClick={getJoke}>One More</button>
    </>
  );
}
