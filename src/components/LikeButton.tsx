import { Heart } from "lucide-react";
import { useState } from "react";

type LikeButtonProps = {
  puppyId: number;
  isLiked: number[];
  setIsLiked: React.Dispatch<React.SetStateAction<number[]>>;
};

function LikeButton({ puppyId, isLiked, setIsLiked }: LikeButtonProps) {
  const [count, setCount] = useState(0);
  const currentlyLiked = isLiked.includes(puppyId);

  const handleClick = () => {
    if (currentlyLiked) {
      // 2. Remove ID from array (Unlike)
      setIsLiked(isLiked.filter((id) => id !== puppyId));
      setCount((prev) => prev - 1);
    } else {
      // 3. Add ID to array using spread (Like)
      // This creates a NEW array reference so React triggers a re-render
      setIsLiked([...isLiked, puppyId]);
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <button className="group" onClick={handleClick}>
        <Heart
          className={
            currentlyLiked
              ? "fill-pink-500 stroke-pink-500"
              : "stroke-slate-400 group-hover:stroke-slate-600"
          }
          size={20}
        />
      </button>
      <span className={currentlyLiked ? "text-pink-600" : "text-slate-600"}>
        {count}
      </span>
    </div>
  );
}

export default LikeButton;
