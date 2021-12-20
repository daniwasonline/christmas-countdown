import { useState, useEffect } from "react";

export default function BodyTop() {
    const [countdown, setCountdown] = useState("...");
    const [nextDate, setNextDate] = useState(new Date(`${new Date().getFullYear()}-12-25T00:00:00`));
    const [occasion, setOccasion] = useState("25D");

    useEffect(() => {
        let forceOccasion = "none";
        const interval = setInterval(() => {
            const now = new Date();
            let end = new Date(`${now.getFullYear()}-12-25T00:00:00`);
            if (now.getMonth() === 11 && now.getDate() > 25) {
                setOccasion("1J");
                end = new Date(`${now.getFullYear() + 1}-01-01T00:00:00`);
            } else {
                setOccasion("25D");
            };

            if (forceOccasion === "1J") {
                setOccasion("1J");
                end = new Date(`${now.getFullYear() + 1}-01-01T00:00:00`);
            };

            const diff = end.getTime() - now.getTime();

            setNextDate(end);
            
            if (occasion === "25D") {
                setCountdown(`${Math.floor(diff / (1000 * 60 * 60 * 24))} days, ${Math.floor(diff / (1000 * 60 * 60) % 24)} hours, ${Math.floor(diff / (1000 * 60) % 60)} minutes, and ${Math.floor(diff / 1000 % 60)} seconds`);
            } if (occasion === "1J") {
                setCountdown(`${Math.floor(diff / (1000 * 60 * 60 * 24))} days, ${Math.floor(diff / (1000 * 60 * 60) % 24)} hours, ${Math.floor(diff / (1000 * 60) % 60)} minutes, and ${Math.floor(diff / 1000 % 60)} seconds`);
            };
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function DateRender() 
    {
        if (occasion === "25D") {
            return (
                <h2 className="BodyTop-Subheading">
                    <code>{countdown}</code> <br /> until next Christmas (25 December {nextDate.getFullYear()})!
                </h2>
            );
        } else {
            return (
                <h2 className="BodyTop-Subheading">
                    <code>{countdown}</code> <br /> until next New Year's Day (1 January {nextDate.getFullYear()})!
                </h2>
            );
        }
    };

    return (
        <div className="BodyTop">
            <h1 className="BodyTop-Tagline">
                Happy Holidays!
            </h1>
                {DateRender()}
            <footer>
                <a href="https://danny.works" target="_blank" rel="noopener noreferrer">
                    <h2 className="BodyTop-Watermark">Made with &#10084; by Dannington</h2>
                </a>
            </footer>
        </div>
    );
};