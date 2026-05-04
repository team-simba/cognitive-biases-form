import type { UserAnswersState } from '../store/userAnswersSlice';

const BASE_URL = 'https://demo-server';
const USER_ID_KEY = 'cb_user_id';

export const getOrCreateUserId = (): string => {
    let id = localStorage.getItem(USER_ID_KEY);
    if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem(USER_ID_KEY, id);
    }
    return id;
};

export const fetchEntry = async (userId: string): Promise<UserAnswersState | null> => {
    try {
        const res = await fetch(`${BASE_URL}/entries/${userId}`);
        if (res.status === 404) return null;
        if (!res.ok) throw new Error(`fetchEntry: ${res.status}`);
        const data = await res.json();
        return (data?.answers ?? null) as UserAnswersState | null;
    } catch (err) {
        console.warn('demoServer.fetchEntry failed', err);
        return null;
    }
};

export const createEntry = async (
    userId: string,
    answers: UserAnswersState
): Promise<void> => {
    try {
        await fetch(`${BASE_URL}/entries`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, answers }),
        });
    } catch (err) {
        console.warn('demoServer.createEntry failed', err);
    }
};

export const updateEntry = async (
    userId: string,
    answers: UserAnswersState
): Promise<void> => {
    try {
        await fetch(`${BASE_URL}/entries/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ answers }),
        });
    } catch (err) {
        console.warn('demoServer.updateEntry failed', err);
    }
};
