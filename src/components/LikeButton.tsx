import { Heart } from "lucide-react";
import { useState } from "react";

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setIsLiked(!isLiked);

    if (isLiked) return;

    setCount(count + 1);
  };

  return (
    <button className="flex items-center gap-1" onClick={handleClick}>
      <Heart
        className={
          isLiked
            ? "fill-pink-500 stroke-none"
            : "stroke-slate-200 group-hover:stroke-slate-300"
        }
      />
      <span>{count}</span>
    </button>
  );
}

export default LikeButton;
