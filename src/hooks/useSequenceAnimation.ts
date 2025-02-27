import { useEffect, useState } from 'react';

export const useSequenceAnimation = (index: number, delay: number = 0.5) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, (index * delay * 1000));
    
    return () => clearTimeout(timer);
  }, [index, delay]);
  
  return isVisible;
};
