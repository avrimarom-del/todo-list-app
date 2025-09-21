import React, { useState } from "react";

import "./DropArea.css";

const DropArea = ({onDrop}) => {
    const [showDROP, setShowDrop] = useState(false);
        return <section 
        onDragEnter={() => setShowDrop(true)}
        onDragLeave={() => setShowDrop(false)}
        onDrop={() => {
            onDrop();
            setShowDrop(false);
        }}
        onDragOver={(e) => e.preventDefault()}
        className={showDROP ? "drop_area" : "hide_drop"}
        >
        
        Drop Here
        </section>;
};

export default DropArea;