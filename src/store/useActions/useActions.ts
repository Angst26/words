import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {doomReducer} from "../WordsSlice/words.slice.ts";

const actions = {
    doomAction: doomReducer
}

const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => {
        return bindActionCreators(actions, dispatch)
    }, [dispatch])
}

export default useActions;