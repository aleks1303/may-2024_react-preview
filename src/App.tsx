import React, {FC, useState} from 'react';
import './App.css';
import Menu from "./components/menu/Menu";
import User from "./components/user/User";


// memo - дозволяє пропустити рірендерінг компонента, коли його пропси не змінюються

const App: FC = () => {
  const [id, setId] = useState<number>(1)
  const incrementId = () =>{
    setId(prevState => ++prevState)
  }
  return (
    <>
      <Menu/>
      <User id={id}/>
      <button onClick={incrementId}>increment id</button>
    </>
  );
}

export default App;
