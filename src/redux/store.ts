import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {userSlice} from "./slices/userSlice";
import {postSlice} from "./slices/postSlice";


//створюємо store

export const store = configureStore({
    reducer:{
        userSlice:userSlice.reducer,
        postSlice:postSlice.reducer
    }
});

// якщо в назвах хуків та функцій є проміжний префікс App - це завжди кастомні
// тобто обгортка для якихось хуків або функцій

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

