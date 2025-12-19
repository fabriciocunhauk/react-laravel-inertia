import { Heart, X } from "lucide-react";
import { useLiked } from "../hooks/useLiked";
import type { PuppiesListTypes } from "../types/puppyTypes";

type ShortlistProps = {
  puppyIds: number[];
  puppiesList: PuppiesListTypes[];
};

export function Shortlist({ puppyIds, puppiesList }: ShortlistProps) {
  const { isLiked, setIsLiked } = useLiked();
  return (
    <div className="h-44 overflow-scroll">
      <h2 className="flex items-center gap-2 font-medium">
        <span>Your shortlist</span>
        <Heart className="lucide lucide-heart inline-block size-6 fill-pink-500 stroke-pink-500" />
      </h2>

      <ul className="mt-4 flex flex-wrap gap-4">
        {puppiesList.map((puppy) => {
          return (
            puppyIds.includes(puppy.id) && (
              <li
                key={puppy.id}
                className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0"
              >
                <img
                  height={32}
                  width={32}
                  alt="Chase"
                  className="aspect-square w-8 object-cover"
                  src={puppy.image.url}
                />
                <p className="px-3 text-sm text-slate-800">{puppy.name}</p>
                <button
                  className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100"
                  onClick={() => {
                    setIsLiked(isLiked.filter((id) => id !== puppy.id));
                  }}
                >
                  <X />
                </button>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}
