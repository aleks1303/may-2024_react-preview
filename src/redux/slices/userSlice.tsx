import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {userService} from "../../services/api.service";
import {AxiosError} from "axios";

type UsersSliceType ={
    users:IUser[],
    // це синхронна дія для reducers
    isLoaded:boolean,
    user:IUser | null
}

const userInitState:UsersSliceType ={
    users:[],
    isLoaded:false,
    user:null


}


const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (arg, thunkAPI) => {
        try{
            const users = await userService.getAll();
            // тут викликаємо цю функцію через thunkAPI
            // поміняти на true
            // це показує що сторінка завантажується
            // цю функуцію можна дублювати в різні такі функції
            // цю функцію також можна використовувати іншим шляхом у extraReducer - addMatcher
            // thunkAPI.dispatch(userActions.changeLoadState(true))
            return thunkAPI.fulfillWithValue(users);
        } catch (e){
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }

    }
);

const loadUserById = createAsyncThunk(
    'userSlice/loadById',
    async (_:string | undefined, thunkAPI) => {
   try {
       const user = await userService.getById(_);
       return thunkAPI.fulfillWithValue(user)
   } catch (e) {
       const error = e as AxiosError;
       return thunkAPI.rejectWithValue(error.response?.data)
   }
    }
)


export const userSlice = createSlice({
    name:"userSlice",
    initialState:userInitState,
    reducers:{
        changeLoadState:(state, action:PayloadAction<boolean>) => {
            state.isLoaded = action.payload
        }
    },

    extraReducers: builder =>

        builder
            .addCase(loadUserById.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(loadUsers.fulfilled,
                (state,action) =>{
                    state.users = action.payload;
                })
            .addCase(loadUsers.rejected,
                (state, action) => {

                })
            // використання isloaded
            // відповідність до статусу вашої асинхронної функції
            // isFulfilled - виконує як наглядач і зараз він наглядає за функцією loadUsers
            // в цей метод також можна одночасно додавати різні функції,
            // щоб в них спрацьовувала ця функція - а саме isloaded
            // треба щось зробити з state and action

            .addMatcher(isFulfilled(loadUsers), (state, action) =>{
                // передаємо значення true
                state.isLoaded = true
            })

});

//дістаємо actions
// це для асинхронних дій
export const userActions = {
    ...userSlice.actions,
    loadUsers,
    loadUserById
}
