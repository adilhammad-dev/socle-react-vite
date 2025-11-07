import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {api} from 'services/apis';
import globalReducer from 'services/slices/global';

const store = configureStore({
    reducer: combineReducers({
        global: globalReducer,
        [api.reducerPath]: api.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
