import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API, getData, postRequest } from '../../api';

// Initial state for authentication slice
const authInitialState = {
  userData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

// Initial state for timetable slice
const timetableInitialState = {
  timetableData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};


export const signin = createAsyncThunk('/auth/signin', async (params, thunkApi) => {
  try {
    const response = await postRequest('/auth/signin', params);
    console.log("''''''''",response)
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
}); 

export const getTimetables = createAsyncThunk('/timetables', async (_, thunkApi) => {
  try {
    const response = await getData('/timetables');
    console.log(response,"------")
    return response;
  } catch (error) {
    console.log(error)
    // Handling the error using thunkApi.rejectWithValue for consistency
    return thunkApi.rejectWithValue(error.response ? error.response.data : error.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userData = action.payload;
      })
      .addCase(signin.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

const timetableSlice = createSlice({
  name: 'timetables',
  initialState: timetableInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTimetables.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getTimetables.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.timetableData = action.payload;
      })
      .addCase(getTimetables.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const authReducer = authSlice.reducer;
export const timetableReducer = timetableSlice.reducer;
export const authActions = authSlice.actions;
export const timetableActions = timetableSlice.actions;
