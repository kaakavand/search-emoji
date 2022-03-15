import React, { useEffect, useRef, useState } from "react";
import { getCategory } from "../../api/getCategory.api";
import { getEmoji } from "../../api/getEmoji.api";
import RowEmojiInfo from "../../components/RowEmojiInfo.component";
import { numberOfPage } from "../../utils/nimberOfArr";
import style from "./home.module.scss";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Home() {
    const [emojis, setEmojis] = useState([]);
    const [numberPage, setNumberPage] = useState([]);
    const [all, setAll] = useState([]);
    const [flag, setFlag] = useState(false);
    const [value, setValue] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
        getEmoji().then((res) => setEmojis(res));
    }, []);

    useEffect(() => {
        setAll(emojis);
    }, [emojis]);

    useEffect(() => {
        setNumberPage(numberOfPage(all.length));
        all.length ? setFlag(false) : setFlag(true);
    }, [all]);

    const changeValu = ({ target }) => {
        const ArrNew = emojis.filter((item) =>
            item.unicodeName.includes(target.value)
        );
        setNumberPage(numberOfPage(all.length));
        setAll(ArrNew);
        setValue(target.value);
    };

    return (
        <div className="container">
            <input
                placeholder="enter name emoji ..."
                type="text"
                onChange={changeValu}
            />
            <div>
                {all.slice(page * 5 - 5, page * 5).map((item) => (
                    <RowEmojiInfo
                        character={item.character}
                        name={item.unicodeName}
                    />
                ))}
            </div>
            {flag ? (
                <div className={style.error}>{value} Not Found !</div>
            ) : null}
            <ul>
                {numberPage.map((item, index) => (
                    <li
                        key={index}
                        className={page === item ? style.active : null}
                        onClick={(e) => setPage(Number(e.target.innerText))}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
