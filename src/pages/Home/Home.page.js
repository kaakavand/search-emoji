import React, { useEffect, useState } from "react";
import { getEmoji } from "../../api/getEmoji.api";
import RowEmojiInfo from "../../components/RowEmojiInfo.component";

function Home() {
    const [emojis, setEmojis] = useState([]);
    const [all, setAll] = useState([]);
    const [value, setfirst] = useState("");

    useEffect(() => {
        getEmoji().then((res) => setEmojis(res));
    }, []);

    useEffect(() => {
        setAll(emojis)
    }, [emojis]);

    const changeValu = ({ target }) => {
        const ArrNew = emojis.filter((item) =>
            item.unicodeName.includes(target.value)
        );
        console.log(ArrNew);
        setAll(ArrNew);
    };

    console.log(emojis.length);
    return (
        <>
            <input type="text" onChange={changeValu} />
            {all.map((item) => (
                <RowEmojiInfo
                    character={item.character}
                    name={item.unicodeName}
                />
            ))}
        </>
    );
}

export default Home;
