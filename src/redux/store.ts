import {IUser} from "../models/IUser";
import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService, userService} from "../services/api.service";
import {AxiosError} from "axios";
import { IPost } from "../models/IPost";
import {useDispatch, useSelector} from "react-redux";

type UsersSliceType ={
    users:IUser[]
}

const userInitState:UsersSliceType ={
  users:[]
}

// створюємо функцію
// createAsyncThunk() - асинхронний перетворювач
// він визначає асинхронну поведінку
const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (arg, thunkAPI) => {
        try{
            const users = await userService.getAll();
            console.log(users)
            return thunkAPI.fulfillWithValue(users);
        } catch (e){
           const error = e as AxiosError;
           return thunkAPI.rejectWithValue(error.response?.data)
        }

    }
)
const userSlice = createSlice({
    name:"userSlice",
    initialState:userInitState,
    // reducers приймає синхронні операції
    reducers:{},
    // extraReducers - приймає асинхронні операції
    extraReducers: builder =>
        // addCase дозволяє сказати, що функція може працювати по різному
        // якщо вона наповнина нормально - один принцип - fulfilled
        // якщо з помилкою - інший принцип - try-catch, а також
        builder
            .addCase(loadUsers.fulfilled,
            (state,action) =>{
            state.users = action.payload;
            })
            .addCase(loadUsers.rejected,
                (state, action) => {
                // якщо трапляється якась помилка
                })

});

//дістаємо actions
// це для асинхронних дій
export const userActions = {
    ...userSlice.actions,
    loadUsers
}


// ======================================
// Slice for posts


type PostSliceType ={
    posts:IPost[];
}

const postsInitState:PostSliceType = {
    posts:[]
}


const loadPosts = createAsyncThunk(
    'postSlice',
    async (arg, thunkAPI) => {
        try{
            const posts = await postService.getAll();
            return posts
        }catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const postSlice = createSlice({
    name:'postSlice',
    initialState:postsInitState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(loadPosts.fulfilled, (state,action) =>{
                state.posts = action.payload
            })
            .addCase(loadPosts.rejected, (state, action) =>{
            //     ------
            })

});
export const postActions = {
    ...postSlice.actions,
    loadPosts
}


//===========================


// якщо в назвах хуків та функцій є проміжний префікс App - це завжди кастомні
// тобто обгортка для якихось хуків або функцій

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();


//створюємо store

export const store = configureStore({
    reducer:{
        userSlice:userSlice.reducer,
        postSlice:postSlice.reducer
    }
});
