import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

interface UserAnswersState {
    fortuneWheel: '15' | '65' | '';
    europeanCountries: number | null;
}

const initialState: UserAnswersState = {
    fortuneWheel: '15',
    europeanCountries: null,
};

const userAnswersSlice = createSlice({
    name: 'userAnswers',
    initialState,
    reducers: {
        setFortuneWheel(state, action: PayloadAction<'15' | '65'>) {
            state.fortuneWheel = action.payload;
        },
        setEuropeanCountries(state, action: PayloadAction<number>) {
            state.europeanCountries = action.payload;
        },
    },
});

export const { setFortuneWheel, setEuropeanCountries } = userAnswersSlice.actions;

export default userAnswersSlice.reducer;
