import React, {FC} from 'react';
import './App.css';
import {useFetch} from "./hooks/CustomHooks";
import {IUser} from "./models/IUser";


// можна створити свій власний hook
// власний hook відрізняється від бібліотечного тим,
// що в середині custom hook можна використовувати бібліотечні hooks
// або будь-які інші
// в середині звичайної функції цього зробити не можна
// hook від function відрізняється тим, що починається зі слова use
// якщо function починається на слово use - це custom hook


const App :FC = () => {

  const users = useFetch<IUser[]>('/users', []);
  return  (
    <>
      {
      users.map(user => (<div>{user.name}</div>))
      }
    </>
  );
}

export default App;
