import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {doomReducer} from "../WordsSlice/words.slice.ts";
import {setSearchItem} from "../SearchFieldSlice/search.slice.ts"

const actions = {
    doomAction: doomReducer,
    setSearchItem: setSearchItem,
}

const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => {
        return bindActionCreators(actions, dispatch)
    }, [dispatch])
}

export default useActions;