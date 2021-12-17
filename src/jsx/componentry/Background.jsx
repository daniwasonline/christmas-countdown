import campfire from "../../audio/campfire.mp3";

export default function Background() {
    return (
        <div className="FireplaceBackground" style={{ overflow: "hidden" }}>
            <audio src={campfire} autoPlay loop volu />
            <div style={{ overflow: "hidden", position: "absolute", top: 0, left: 0, height: "100vh", width: "100vw" }}>
                <div className="FireplaceBlur" />
            </div>
        </div>
    );
};