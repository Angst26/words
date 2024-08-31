// import useActions from "../../store/useActions/useActions.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import Word from "./Word/Word.tsx";

const Words = () => {
    // const {doomAction} = useActions();

    const words = useSelector((state: RootState) => state.words.words);
    const wordsList = words.map(w => <Word
        key={w.id}
        id={w.id}
        text={w.text}
        translation={w.translation}
    />);

    return (
        <>
            {wordsList}
        </>
    )
}

export default Words;