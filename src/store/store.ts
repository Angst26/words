import {configureStore} from "@reduxjs/toolkit";
import WordsReducer from './WordsSlice/words.slice.ts'

const store = configureStore({
    reducer: {
        words: WordsReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

