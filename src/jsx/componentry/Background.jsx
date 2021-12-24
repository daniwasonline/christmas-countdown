import { useState, useEffect } from "react";

export default function Background() {
    const [backgroundStyle, setBackgroundStyle] = useState({});
    useEffect(() => {
        const now = new Date();
        if (now.getMonth() === 11 && now.getDate() > 25) {
            setBackgroundStyle({ backgroundImage: "url(\"/img/newyear.jpg\")" });
        } else {
            setBackgroundStyle({ backgroundImage: "url(\"/img/fireplace.gif\")"  });
        };
    }, []);

    return (
        <div className="FireplaceBackground" style={{ overflow: "hidden" }}>
            <div style={{ overflow: "hidden", position: "absolute", top: 0, left: 0, height: "100vh", width: "100vw" }}>
                <div className="FireplaceBlur" style={backgroundStyle} />
            </div>
        </div>
    );
};