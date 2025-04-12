import React, { useState, useEffect } from 'react';
import './EmergencyButton.css'; // We'll create this CSS file separately

const EmergencyButton = ({ onClick }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleClick = (e) => {
    // Set animating state to true
    setIsAnimating(true);
    
    // Call the onClick prop if provided
    if (onClick) {
      onClick(e);
    }
  };
  
  
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 1000); 
      
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <button 
      id="Emergency" 
      className={isAnimating ? 'clicked' : ''} 
      onClick={handleClick}
      aria-label="Emergency"
    >
      {}
    </button>
  );
};

export default EmergencyButton;