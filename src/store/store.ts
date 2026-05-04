import { configureStore } from '@reduxjs/toolkit';

import { createPersistMiddleware } from './persistMiddleware';
import userAnswersReducer from './userAnswersSlice';

export const createStore = (userId: string) =>
    configureStore({
        reducer: {
            userAnswers: userAnswersReducer,
        },
        middleware: (getDefault) => getDefault().concat(createPersistMiddleware(userId)),
    });

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
