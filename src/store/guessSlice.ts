import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

interface GuessNumberState {
    fortuneWheel: '15' | '65' | '';
    europeanCountries: number | null;
    plumber: number | null;
    expectedAttack: string;
    intelligenceSource: string;
}

const initialState: GuessNumberState = {
    fortuneWheel: '15',
    europeanCountries: 0,
    plumber: 0,
    expectedAttack: '',
    intelligenceSource: '',
};

const guessNumberSlice = createSlice({
    name: 'guessNumber',
    initialState,
    reducers: {
        setFortuneWheel(state, action: PayloadAction<'15' | '65'>) {
            state.fortuneWheel = action.payload;
        },
        setEuropeanCountries(state, action: PayloadAction<number>) {
            state.europeanCountries = action.payload;
        },
        setPlumber(state, action: PayloadAction<number>) {
            state.plumber = action.payload;
        },
        setExpectedAttack(state, action: PayloadAction<string>) {
            state.expectedAttack = action.payload;
        },
        setIntelligenceSource(state, action: PayloadAction<string>) {
            state.intelligenceSource = action.payload;
        },
    },
});

export const {
    setFortuneWheel,
    setEuropeanCountries,
    setPlumber,
    setExpectedAttack,
    resetGuessState,
    setIntelligenceSource,
} = guessNumberSlice.actions;

export default guessNumberSlice.reducer;
