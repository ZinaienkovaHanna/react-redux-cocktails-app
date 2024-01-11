import { configureStore } from '@reduxjs/toolkit';
import cocktailsReducer from './cocktailsReducer';

const store = configureStore({
    reducer: {
        cocktails: cocktailsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
