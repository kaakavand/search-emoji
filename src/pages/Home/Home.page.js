import React, { useEffect, useState } from "react";
import { getCategory } from "../../api/getCategory.api";
import { getEmoji } from "../../api/getEmoji.api";
import RowEmojiInfo from "../../components/RowEmojiInfo.component";
import { numberOfPage } from "../../utils/nimberOfArr";
import style from "./home.module.scss";

function Home() {
    const [emojis, setEmojis] = useState([]);
    const [category, setCategory] = useState([]);
    const [numberPage, setNumberPage] = useState([]);
    const [all, setAll] = useState([]);
    const [value, setfirst] = useState("");
    const [page, setPage] = useState(1)

    useEffect(() => {
        getEmoji().then((res) => setEmojis(res));
        getCategory().then((res) => setCategory(res));
        // setNumberPage(numberOfPage(all.length));
    }, []);

    useEffect(() => {
        setAll(emojis);
    }, [emojis]);
    
    useEffect(() => {
        setNumberPage(numberOfPage(all.length));
    }, [all]);
    

    const changeValu = ({ target }) => {
        const ArrNew = emojis.filter((item) =>
            item.unicodeName.includes(target.value)
        );
        setNumberPage(numberOfPage(all.length));
        setAll(ArrNew);
    };

    return (
        <div className="container">
            <input type="text" onChange={changeValu} />
            {all.slice(page - 1 , page + 4).map((item) => (
                <RowEmojiInfo
                    character={item.character}
                    name={item.unicodeName}
                />
            ))}
            <ul>
                {numberPage.map((item) => (
                    <li className={page === item ? style.active : null} onClick={(e) => setPage(Number(e.target.innerText))}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
