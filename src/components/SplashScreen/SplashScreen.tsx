import "./SplashScreen.css";

function SplashScreen() {
    const gridSize = 25;
    const squares = Array.from(
        { length: gridSize * gridSize },
        (_, index) => {
            const row = Math.floor(index / gridSize);
            const column = index % gridSize;
            return {
                row,
                column,
                delay: (row + column) * 0.025,
            };
        }
    );

    return (
        <div className="splash-screen">
            <div className="splash-mosaic">
                {squares.map((square, index) => (
                    <span key={index} style={{
                        animationDelay: `${square.delay}s`,
                    }}
                    />
                ))}
            </div>
            <div className="splash-content">
                <div className="splash-logo">
                    &lt;Diego/&gt;
                </div>
                <p className="splash-status">INITIALIZING...</p>
                <div className="splash-line">
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default SplashScreen;