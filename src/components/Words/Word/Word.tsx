import styles from "./Word.module.css"


interface Word {
    key: string;
    id: string;
    text: string;
    translation: string;
}

const Word = (props: Word) => {
    return (
        <div className={styles.card}>
            <div className={styles.text}> {props.text}</div>
            <div className={styles.translation}> {props.translation}</div>
        </div>
    )
}

export default Word;