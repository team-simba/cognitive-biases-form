import { configureStore } from '@reduxjs/toolkit';

import userAnswersReducer from './userAnswersSlice';

export const store = configureStore({
    reducer: {
        userAnswers: userAnswersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
