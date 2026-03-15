import { configureStore } from '@reduxjs/toolkit';

import answersSlice from './answersSlice';
import guessNumberReducer from './guessSlice';

export const store = configureStore({
    reducer: {
        answers: answersSlice,
        guessNumber: guessNumberReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
