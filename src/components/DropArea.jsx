import React, { useState } from "react";

import "./DropArea.css";

const DropArea = () => {
    const [showDROP, setShowDrop] = useState(false);
        return <section 
        onDragEnter={() => setShowDrop(true)}
        onDragLeave={() => setShowDrop(false)}
        className={showDROP ? "drop_area" : "hide_drop"}
        >
        
        Drop Here
        </section>;
};

export default DropArea;