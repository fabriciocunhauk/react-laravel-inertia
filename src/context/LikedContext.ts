import { createContext } from "react";

type LikedContextType = {
  isLiked: number[];
  setIsLiked: React.Dispatch<React.SetStateAction<number[]>>;
} | null;

export const LikedContext = createContext<LikedContextType>(null)