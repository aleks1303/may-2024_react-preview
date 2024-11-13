import React, {FC, useCallback, useMemo, useState} from 'react';
import './App.css';
import Menu from "./components/menu/Menu";
import User from "./components/user/User";


// memo - дозволяє пропустити рірендерінг компонента, коли його пропси не змінюються

const App: FC = () => {
  const [id, setId] = useState<number>(1)
  const incrementId = () =>{
    setId(prevState => ++prevState)
  }

    const [menuItem1, setMenuItem1] = useState<string>('users')
    const [menuItem2, setMenuItem2] = useState<string>('posts')
    const [menuItem3, setMenuItem3] = useState<string>('comments')
    const links = useMemo(() =>{
        return [menuItem1, menuItem2, menuItem3]
    }, [menuItem1, menuItem2, menuItem3])
  return (
    <>
      <Menu links={links}/>
      <User id={id}/>
      <button onClick={incrementId}>increment id</button>
    </>
  );
}

export default App;
