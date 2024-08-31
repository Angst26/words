import {useState} from "react";

const SearchField = () => {
    const [searchTerm, setTerm] = useState("")
    function handleSubmit() {
        console.log(searchTerm)
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