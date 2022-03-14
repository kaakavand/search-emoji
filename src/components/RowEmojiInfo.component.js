import React from "react";
import style from './component.module.scss'

function RowEmojiInfo(props) {

    const copyEmoji = (e) => {
        navigator.clipboard.writeText(e.currentTarget.children[0].innerText)
        alert(`ایموجی ${e.currentTarget.children[0].innerText} کپی شد`)
    }

    return (
        <div className={style.row} onClick={copyEmoji}>
            <h1>{props.character}</h1>
            <h1>{props.name}</h1>
        </div>
    );
}

export default RowEmojiInfo;
