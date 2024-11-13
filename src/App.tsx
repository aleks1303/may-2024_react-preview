import React, {FC, useCallback, useState} from 'react';
import './App.css';
import Menu from "./components/menu/Menu";
import User from "./components/user/User";


// memo - дозволяє пропустити рірендерінг компонента, коли його пропси не змінюються

const App: FC = () => {
  const [id, setId] = useState<number>(1)
  const incrementId = () =>{
    setId(prevState => ++prevState)
  }
  const someFunction = useCallback(() =>{
      console.log('asd')
  }, [id])
  // в середину Menu прокидуємо якусь функцію
  // з-за цього menu заново відпрацьовує
  return (
    <>
      <Menu someFunction={someFunction}/>
      <User id={id}/>
      <button onClick={incrementId}>increment id</button>
    </>
  );
}

export default App;
