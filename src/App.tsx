import React, {FC, useEffect, useState} from 'react';
import './App.css';

// useEffect - дозволяє зробити щось N кількість разів
// це буде один раз якщо в deps буде пустий масив (масив залежностей)
// або якщо передати в масив залежностей посилання на якийсь об'єкт який буде змінювати свій стан
// тобі useEffect буде спрацьовувати N кількість раз

// в середині useEffect може бути callback function
// ця функція відпрацьовує тоді коли відпрацьовує useEffect

const App: FC = () => {
  const [x, setX] = useState(0)
  useEffect(() => {
    console.log('work')

    return () =>{
      console.log('!!!')
    }
  }, [x]);
  return (
    <div>
        <button onClick={()=>{
          setX(prevState => ++prevState)
        }}>click</button>
    </div>
  );
}

export default App;
