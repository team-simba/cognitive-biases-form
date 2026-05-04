import type { Middleware } from '@reduxjs/toolkit';

import { updateEntry } from '../api/demoServer';
import { hydrate } from './userAnswersSlice';

import type { RootState } from './store';

const DEBOUNCE_MS = 300;

export const createPersistMiddleware = (userId: string): Middleware => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    return (store) => (next) => (action) => {
        const result = next(action);

        const type = (action as { type?: string }).type;
        if (type && type.startsWith('userAnswers/') && type !== hydrate.type) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                const state = store.getState() as RootState;
                updateEntry(userId, state.userAnswers);
            }, DEBOUNCE_MS);
        }

        return result;
    };
};
