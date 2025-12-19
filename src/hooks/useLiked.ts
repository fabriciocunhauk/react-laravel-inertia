import { use } from 'react';
import { LikedContext } from '../context/LikedContext';

export function useLiked() {
  const context = use(LikedContext);
  
  if (!context) {
    throw new Error('useLiked must be used within a LikedContext.Provider');
  }
  return context;
}