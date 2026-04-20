import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

interface UserAnswersState {
    fortuneWheel: 15 | 65 | null;
    africanCountries: number | null;
    plumberProbability: number | null;
    availabilityListShown: 0 | 1 | null;
    availabilityAnswer: 'male' | 'female' | null;
    elephantAnswer: boolean | null;
    elephantAnswerTime: number | null;
    cigarAnswer: boolean | null;
    cigarAnswerTime: number | null;
    formalLogicAnswer: string[] | null;
}

const initialState: UserAnswersState = {
    fortuneWheel: null,
    africanCountries: null,
    plumberProbability: null,
    availabilityListShown: null,
    availabilityAnswer: null,
    elephantAnswer: null,
    elephantAnswerTime: null,
    cigarAnswer: null,
    cigarAnswerTime: null,
    formalLogicAnswer: null,
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
        setPlumberProbability(state, action: PayloadAction<number>) {
            state.plumberProbability = action.payload;
        },
        setAvailabilityListShown(state, action: PayloadAction<0 | 1>) {
            state.availabilityListShown = action.payload;
        },
        setAvailabilityAnswer(state, action: PayloadAction<'male' | 'female'>) {
            state.availabilityAnswer = action.payload;
        },
        setElephantAnswer(state, action: PayloadAction<boolean>) {
            state.elephantAnswer = action.payload;
        },
        setElephantAnswerTime(state, action: PayloadAction<number>) {
            state.elephantAnswerTime = action.payload;
        },
        setCigarAnswer(state, action: PayloadAction<boolean>) {
            state.cigarAnswer = action.payload;
        },
        setCigarAnswerTime(state, action: PayloadAction<number>) {
            state.cigarAnswerTime = action.payload;
        },
        setFormalLogicAnswer(state, action: PayloadAction<string[]>) {
            state.formalLogicAnswer = action.payload;
        },
    },
});

export const {
    setFortuneWheel,
    setafricanCountries,
    setPlumberProbability,
    setAvailabilityListShown,
    setAvailabilityAnswer,
    setElephantAnswer,
    setElephantAnswerTime,
    setCigarAnswer,
    setCigarAnswerTime,
    setFormalLogicAnswer,
} = userAnswersSlice.actions;

export default userAnswersSlice.reducer;
