import React, {FC} from 'react';
import './App.css';
import {decrement, increment, incrementByAmount, useAppDispatch, useAppSelector} from "./redux/store";

const App: FC = () => {

    // це точка через яку можна дістати щось (наприклад: як state(useState))
    // це доступ до поточного стану
    // за допомогою цього витягаємо інформацію
    const counter1ValueState = useAppSelector(state => state.counter1SliceState.value);


    // впроваджуємо якусь певну інформацію
    // це точка впливання на поточний стан і їх треба створити
    // це важиль керування (setState: (useState))

    // типізація відбувається в store.ts
    const dispatch = useAppDispatch();



  return (
    <div>
        <h2>{counter1ValueState}</h2>

        <button onClick={() => {dispatch(increment())}}>do increment</button>
        <button onClick={() => {dispatch(decrement())}}>do decrement</button>
        <button onClick={() => {dispatch(incrementByAmount(10))}}>inc by amount of 10</button>


    </div>
  );
}

export default App;
