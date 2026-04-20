import React, { useState } from 'react';

function Slider() {
    const images = [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1000",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000"
    ];

    const [curr, set] = useState(0);

    const next = () => {
        set((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prev = () => {
        set((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <img src={images[curr]} alt="slider" width="600" height="300" />

            <div>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
}

export default Slider;
