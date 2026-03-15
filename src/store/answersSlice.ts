import { createSlice } from '@reduxjs/toolkit';

import type { PlanVotes } from '../types/vote';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AnswersState {
    allAnswers: Array<string>;
    elephant: string;
    cigar: string;
    planVotes: PlanVotes;
    evenPunctuation: Array<string>;
    movieInCinema: Array<string>;
}

const initialState: AnswersState = {
    allAnswers: [],
    elephant: '',
    cigar: '',
    planVotes: [],
    evenPunctuation: [],
    movieInCinema: [],
};

const allAnswersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        setAllAnswers(state, action: PayloadAction<Array<string>>) {
            state.allAnswers = action.payload;
        },
        setElephant(state, action: PayloadAction<string>) {
            state.elephant = action.payload;
        },
        setCigar(state, action: PayloadAction<string>) {
            state.cigar = action.payload;
        },
        setPlanVotes(state, action: PayloadAction<PlanVotes>) {
            state.planVotes = action.payload;
        },
        setEvenPunctuation(state, action: PayloadAction<Array<string>>) {
            state.evenPunctuation = action.payload;
        },
        setMovieInCinema(state, action: PayloadAction<Array<string>>) {
            state.movieInCinema = action.payload;
        },
    },
});

export const {
    setAllAnswers,
    setElephant,
    setCigar,
    setPlanVotes,
    setEvenPunctuation,
    setMovieInCinema,
} = allAnswersSlice.actions;
export default allAnswersSlice.reducer;
