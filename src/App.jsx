import "./App.css";
import React, { useEffect, useState } from "react";
import http from "axios";
import { Button } from "@mui/material";

function App() {
  const [joke, setJoke] = useState("");
  const [counter, setCounter] = useState(0);

  const load = async () => {
    const response = await http.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "text/plain",
      },
    });
    setJoke(response.data);
    setCounter((counter) => counter + 1);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="App">
      {joke ? <p>{joke}</p> : "Loading..."}
      <Button onClick={() => load()} variant="outlined">
        {counter > 3 && counter <= 5
          ? "You rly want more?"
          : counter > 5
          ? "You are dead inside"
          : "Click for new joke!"}
      </Button>
    </div>
  );
}

export default App;
