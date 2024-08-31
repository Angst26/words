import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store.ts";

export interface Word{
    id: string;
    text: string;
    translation: string;
}

export interface Words {
    words: Word[];
}

const initialState: Words = { words: [
        { id: "1", text: "application", translation: "приложение" },
    ] };

const wordsSlice = createSlice({
    name: "words",
    initialState,
    reducers: {
        doomReducer: (state: RootState, action) => {
            state.words.push(action.payload);
        }
    }
})

export default wordsSlice.reducer;
export const {doomReducer} = wordsSlice.actions;