import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SearchFieldSlice {
    searchItem: string;
}
const initialState: SearchFieldSlice = {
    searchItem: "",
}
const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchItem: (state, action: PayloadAction<string>) => {
            state.searchItem = action.payload;
        }
    }
})

export default searchSlice.reducer;
export const {setSearchItem} = searchSlice.actions;