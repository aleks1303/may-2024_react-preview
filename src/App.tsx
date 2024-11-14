import React, {FC} from 'react';
import './App.css';
import SomeComponent from "./components/SomeComponent";

const App:FC = () => {
  return (
    <div>
        <SomeComponent message={'hello Okten'}/>
    </div>
  );
}

export default App;
