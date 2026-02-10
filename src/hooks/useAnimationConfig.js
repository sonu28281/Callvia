import { useState, useEffect } from 'react';
import getAnimationConfig from '../config/animation_config';

/**
 * Custom hook that returns the current animation configuration
 * and updates when the animation type changes via the settings dropdown
 */
export const useAnimationConfig = () => {
  // Use a counter to force re-render when animation changes
  const [, setUpdateTrigger] = useState(0);

  useEffect(() => {
    const handleAnimationChange = () => {
      // Force re-render by updating the trigger
      setUpdateTrigger(prev => prev + 1);
    };

    // Listen for animation type changes
    window.addEventListener('animationTypeChange', handleAnimationChange);

    return () => {
      window.removeEventListener('animationTypeChange', handleAnimationChange);
    };
  }, []);

  // Return the current animation config (will be recalculated on each render)
  return getAnimationConfig();
};

export default useAnimationConfig;
