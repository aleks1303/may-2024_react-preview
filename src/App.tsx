import React from 'react';
import './App.css';
import OriginalComponent1 from "./components/OriginalComponent1";
import OriginalComponent2 from "./components/OriginalComponent2";

// використовується в формах, якщо форми однакові, а треба замінити тільки деякі частини

function App() {
  return (
    <div>
      <OriginalComponent1/>
      <OriginalComponent2/>
    </div>
  );
}

export default App;
