import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { API } from '../../api';


const initialState = {
  userData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const signin = createAsyncThunk("signin",async (params,thunkApi)=>{
  console.log("file AuthSlice.js - signin params:",params)
  try{
    const response = await API.post('/signin',params);
    return response.data
  }catch(error){
    console.log("file AuthSlice",error)
    return thunkApi.rejectWithValue(error)
  }
})



const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(signin.pending,(state)=>{
      state.isLoading = true;
    });
    builder.addCase(signin.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = true;
      state.userData = action.payload;
    });
    builder.addCase(signin.rejected,(state,action)=>{
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default AuthSlice.reducer;
