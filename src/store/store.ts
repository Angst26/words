import {configureStore} from "@reduxjs/toolkit";
import WordsReducer from './WordsSlice/words.slice.ts'
import SearchReducer from "./SearchFieldSlice/search.slice.ts"

const store = configureStore({
    reducer: {
        words: WordsReducer,
        search: SearchReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

