import React, {FC, useReducer} from 'react';
import './App.css';
import {type} from "node:os";

// useReducer - зменшувач
// цей хук дозволяє пакувати купу різноманітних дій в одне місце
// які повинні ставатися над однією змінною
// дозволяє знущатись над станом якоїсь певної змінної
// в залежності що хочете робити
// він заміняє useState і надає своєрідної додаткової логіки
// без використання useState


// передаємо 2 аргумента, 2 - це початковий стан reducer
// 1 - функція яка буде приймати декілька параметрів
// початковий state і дія - action
// тобто поточний стан і що з ним зробити

// state буде змінюватись

const reducerActions = (state:number, action:{type:string, payload:number }) =>{
  switch (action.type){
    case 'add':
      return state + action.payload;
    case 'getBack':
      return state - action.payload;
    case 'reset':
      return action.payload;
  }

return state
}

const App: FC = () => {
  const [number, dispatch] = useReducer(reducerActions,0)
  const add = () =>{
    dispatch({type:'add', payload:10})
  }
  const getBack = () =>{
    dispatch({type:'getBack', payload:5})
  }
  const reset = () =>{
    dispatch({type:'reset', payload:-100})
  }
  return (
    <div>
      <h2>Reducer demo.current value : {number}</h2>
      {/*буде відбуватися інкрементація*/}
      <button onClick={add}>add</button>
      {/*декрементація*/}
      <button onClick={getBack}>getBack</button>
      {/*обнулення стану певної змінної*/}
      <button onClick={reset}>reset</button>
      <hr/>

    </div>
  );
}

export default App;
