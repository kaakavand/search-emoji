import React from "react";
import style from "./component.module.scss";
import { ToastContainer, toast } from "react-toastify";

function RowEmojiInfo(props) {
    const copyEmoji = (e) => {
        navigator.clipboard.writeText(e.currentTarget.children[0].innerText);
        toast.success(
            `ایموجی ${e.currentTarget.children[0].innerText} کپی شد`,
            {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }
        );
    };

    return (
        <div className={style.row} onClick={copyEmoji}>
            <h1>{props.character}</h1>
            <h1>{props.name}</h1>
            <ToastContainer />
        </div>
    );
}

export default RowEmojiInfo;
