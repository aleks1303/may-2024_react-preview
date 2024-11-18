import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services/api.service";
import {AxiosError} from "axios";

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
export const userSlice = createSlice({
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
