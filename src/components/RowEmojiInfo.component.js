import React from "react";
import style from './component.module.scss'

function RowEmojiInfo(props) {
    return (
        <div className={style.row}>
            <h1>{props.character}</h1>
            <h1>{props.name}</h1>
        </div>
    );
}

export default RowEmojiInfo;
