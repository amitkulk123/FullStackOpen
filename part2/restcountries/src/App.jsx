import { useState } from "react";
import "./App.css";

const App = () => {
  const [country, handleCountry] = useState([]);

  return (
    <>
      Find Countries
      <input value={country} onChange={handleCountry} />
    </>
  );
};

export default App;
