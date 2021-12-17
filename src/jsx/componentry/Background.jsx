export default function Background() {
    return (
        <div className="FireplaceBackground" style={{ overflow: "hidden" }}>
            <div style={{ overflow: "hidden", position: "absolute", top: 0, left: 0, height: "100vh", width: "100vw" }}>
                <div className="FireplaceBlur" />
                    <iframe title="fp" className="FireplaceBackgroundIF" src="https://www.youtube.com/embed/iGwawktAMRg?loop=1&autoplay=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&fs=0&color=white&controls=0&disablekb=1&mute=1" frameborder="0" width="100%" height="100%" />
            </div>
        </div>
    );
};