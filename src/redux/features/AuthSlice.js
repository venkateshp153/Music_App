// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import {API} from '../../api';

// const initialState = {
//   userData: null,
//   isLoading: false,
//   isSuccess: false,
//   isError: false,
// };

// export const signin = createAsyncThunk('signin', async (params, thunkApi) => {
//   console.log('file AuthSlice.js - signin params:', params);
//   try {
//     const response = await API.post('/signin', params);
//     return response.data;
//   } catch (error) {
//     console.log('file AuthSlice', error);
//     return thunkApi.rejectWithValue(error);
//   }
// });

// export const getTimetable = createAsyncThunk('getTimetable', async (_, thunkApi) => {
//   try {
//     const response = await API.get('/timetable'); 
//     return response.data;
//   } catch (error) {
//     console.log('file AuthSlice', error);
//     return thunkApi.rejectWithValue(error);
//   }
// });

// const AuthSlice = createSlice({
//   name: 'authSlice',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder.addCase(signin.pending, state => {
//       state.isLoading = true;
//     });
//     builder.addCase(signin.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.isSuccess = true;
//       state.userData = action.payload;
//     });
//     builder.addCase(signin.rejected, (state, action) => {
//       state.isLoading = false;
//       state.isError = true;
//     });
//   },
// });

// export default AuthSlice.reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../../api';

// Initial state for authentication slice
const authInitialState = {
  userData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

// Initial state for timetable slice
const timetableInitialState = {
  timetableData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const signin = createAsyncThunk('auth/signin', async (params, thunkApi) => {
  console.log('file AuthSlice.js - signin params:', params);
  try {
    const response = await API.post('/signin', params);
    return response.data;
  } catch (error) {
    console.error('Error in signin:', error);
    throw error;
  }
});

export const getTimetables = createAsyncThunk('timetables/getTimetables', async (_, thunkApi) => {
  try {
    const response = await API.get('/timetables');
    console.log(">>>>>>", response.data.data);
    return response.data.data; // Return the correct data
  } catch (error) {
    console.error('Error in getTimetable:', error);
    throw error;
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
