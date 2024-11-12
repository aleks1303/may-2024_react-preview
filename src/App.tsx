import React, {FC, useEffect, useRef, useState} from 'react';
import './App.css';

// useRef - використовується для того, щоб змінна y не перереджувалась, а залишалась не змінною
// без useRef змінна y буде знову ставати в свій початковий стан
// а так вона продовжує працювати далі

// якщо необхідно мати зміну, яка не приймає участі в відмальовці interface, а потрібно зберігати її стан
// то useRef використовується
// часто використовують в forms
// для того, щоб отримати посилання на якусь певну форму
// і щоб вона не змінювалась в процесі того, як необхідно в цю форму щось записувати
// але з формами є додаткові hooks


const App: FC = () => {
  const [x, setX] = useState(0)
    let y = useRef(0)
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
        }}>change x</button>

          <button onClick={() =>{
              y.current++
              console.log(y)
          }}>change y</button>
      </div>
  );
}

export default App;
