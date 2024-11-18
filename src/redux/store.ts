import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

type CounterStateType = {
    value:number
}
const initialState:CounterStateType = {
    value:0
}
const initialState2:CounterStateType = {
    value:0
}

// це один із слайсів, їх може бути багато, це частина сховища
const counter1Slice =
    createSlice({
        name:"counter1SliceName",
        initialState:initialState,
        reducers:{
            increment:(state) =>{
                state.value = state.value + 1
            },
            decrement:(state)=>{
                state.value = state.value - 1

            },
            // тут повинно бути два аргументи для зміни чисел
            incrementByAmount:(state,
                               action:PayloadAction<number>)=>{
                state.value = state.value + action.payload

            }
        }
    });

// витягуємо actions з reducers
// беремо slice, потім доступаємось до actions
export const { decrement,
        increment,
        incrementByAmount} =
    counter1Slice.actions;





// це другий slice (шматок)
const counter2Slice =
    createSlice({
        name:"counter2SliceName",
        initialState:initialState2,
        reducers:{
            increment2:(state) =>{
                state.value = state.value + 1
            },
            decrement2:(state)=>{
                state.value = state.value - 1

            },
            // тут повинно бути два аргументи для зміни чисел
            incrementByAmount2:(state,
                               action:PayloadAction<number>)=>{
                state.value = state.value + action.payload

            }
        }
    });

// із slices складається store
// його можна сконфігурувати за допомогою функції configureStore

const store = configureStore({
    reducer:{
        counter1SliceState:counter1Slice.reducer,
        counter2SliceState:counter2Slice.reducer
    }
});

// це використовується для типізації useDispatch
export type AppDispatch = typeof store.dispatch;
// робимо типізацію тут, робимо обгортку для і впроваджуємо дженерік для dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// типізація useSelector
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<RootState>();

export default store


