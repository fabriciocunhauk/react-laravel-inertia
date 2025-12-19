import { useContext } from 'react';
import { LikedContext } from '../context/LikedContext';

export function useLiked() {
  const context = useContext(LikedContext);
  
  if (!context) {
    throw new Error('useLiked must be used within a LikedContext.Provider');
  }
  return context;
}