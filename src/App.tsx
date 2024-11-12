import React, {FC, useState} from 'react';
import './App.css';

// що робить useState
// useState - це спеціальний hook, який дозволяє при зміні стану якогось об'єкту:
// (числа, user, масиву) запустити процес переріндинінгу,
// якщо так не працювати ніякий рірендерів не буде відбуватись
// тобто при натисанні на кнопку в розмітці нічого не буде змінюватись
const App:FC = () => {
  let [number, setNumber] = useState<number>(0);
  const increment = () =>{
    setNumber(prevState => prevState + 1)
  }

  return (
    <div>
        <h2>{number}</h2>
        <button onClick={increment}>increment</button>
    </div>
  );
}
export default App;
