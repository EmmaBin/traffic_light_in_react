
import './App.css';
import React, { useState, useEffect } from 'react';
import Light from "./Component/Light"


function App() {
  const [light, setLight] = useState("red")

  useEffect(() => {
    setTimeout(() => {
      setLight("Yellow")
      setTimeout(() => {
        setLight("Green")
      }, 2000)
    }, 4000)

  }, [light])
  
  return (
    <body className="w-screen h-screen bg-blue-100">
      <Light light={light} />

    </body>
  );
}

export default App;
