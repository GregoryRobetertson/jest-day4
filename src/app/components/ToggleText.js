// components/ToggleText.js
import React, { useState } from 'react';

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Text</button>
      {isVisible && <p data-testid="text">This text is now visible!</p>}
    </div>
  );
};

export default ToggleText;
