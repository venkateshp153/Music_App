import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {authReducer,timetableReducer}  from './features/AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistStore from 'redux-persist/es/persistStore';
import {persistReducer} from 'redux-persist';

const reducers = combineReducers({
  auth: authReducer ,
  timetables:timetableReducer
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth','timetables'],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store);
export {store, persistor};
