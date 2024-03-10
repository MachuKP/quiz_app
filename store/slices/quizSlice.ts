import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type quizType = {
  dataLeaderboard: number[];
  validateSubmit: boolean;
};

const initialState = {
  dataLeaderboard: [],
  validateSubmit: false,
} as quizType;

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addScore: (state, action: PayloadAction<number>) => {
      state.dataLeaderboard.push(action.payload);
    },
    setValidate: (state, action: PayloadAction<boolean>) => {
      state.validateSubmit = action.payload;
    },
  },
});

export const {addScore, setValidate} = quizSlice.actions;

export default quizSlice.reducer;
