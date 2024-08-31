import {useState} from "react";
import useActions from "../../store/useActions/useActions.ts";

const SearchField = () => {
    const [searchTerm, setTerm] = useState("")
    const { setSearchItem} = useActions();


    function handleSubmit() {
        console.log(searchTerm)
        setSearchItem(searchTerm);
        setTerm('')
    }
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTerm(e.target.value)
    }

    return(
        <div>
            <input type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Введите слово для поиска..."/>

            <button onClick={handleSubmit}>Найти</button>
        </div>
    )
}

export default SearchField;