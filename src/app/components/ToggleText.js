'use client';
import React, { useState } from "react";
const ToggleText = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div>
          <button onClick={() => setIsVisible(!isVisible)}>Toggle Text</button>
          {isVisible && <p>This text is now visible!</p>}
        </div>
      );
    };
    
    export default ToggleText;
