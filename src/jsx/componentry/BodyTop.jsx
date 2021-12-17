import { useState, useEffect } from "react";

export default function BodyTop() {
    const [countdown, setCountdown] = useState("...");
    const [nextDate, setNextDate] = useState(new Date(`${new Date().getFullYear()}-12-25T23:59:59`));

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const end = new Date(`${now.getFullYear()}-12-25T23:59:59`);
            const diff = end.getTime() - now.getTime();

            setNextDate(end);
            
            setCountdown(`${Math.floor(diff / (1000 * 60 * 60 * 24))} days, ${Math.floor(diff / (1000 * 60 * 60) % 24)} hours, ${Math.floor(diff / (1000 * 60) % 60)} minutes, and ${Math.floor(diff / 1000 % 60)} seconds`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="BodyTop">
            <h1 className="BodyTop-Tagline">
                Happy Holidays!
            </h1>
            <h2 className="BodyTop-Subheading">
                <code>{countdown}</code> <br /> until next Christmas (25 December {nextDate.getFullYear()})!
            </h2>

            <footer>
                <a href="https://danny.works" target="_blank" rel="noopener noreferrer">
                    <h2 className="BodyTop-Watermark">Made with &#10084; by Dannington</h2>
                </a>
            </footer>
        </div>
    );
};