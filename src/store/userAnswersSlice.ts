import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

interface UserAnswersState {
    fortuneWheel: 15 | 65 | null;
    africanCountries: number | null;
}

const initialState: UserAnswersState = {
    fortuneWheel: null,
    africanCountries: null,
};

const userAnswersSlice = createSlice({
    name: 'userAnswers',
    initialState,
    reducers: {
        setFortuneWheel(state, action: PayloadAction<15 | 65>) {
            state.fortuneWheel = action.payload;
        },
        setafricanCountries(state, action: PayloadAction<number>) {
            state.africanCountries = action.payload;
        },
    },
});

export const { setFortuneWheel, setafricanCountries } = userAnswersSlice.actions;

export default userAnswersSlice.reducer;
