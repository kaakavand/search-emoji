import React, { useEffect, useState } from "react";
import { getEmoji } from "../../api/getEmoji.api";
import RowEmojiInfo from "../../components/RowEmojiInfo.component";

function Home() {
    const [emojis, setEmojis] = useState([]);

    useEffect(() => {
        getEmoji().then((res) => setEmojis(res));
    }, []);

    console.log(emojis.length);
    return (
        <>
            {emojis.map((item) => (
                <RowEmojiInfo
                    character={item.character}
                    name={item.unicodeName}
                />
            ))}
        </>
    );
}

export default Home;
