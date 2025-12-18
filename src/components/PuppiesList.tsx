import LikeButton from "./LikeButton";

type PuppiesListProps = {
  puppiesList: {
    id: number;
    name: string;
    bred_for: string;
    image: { url: string };
  }[];
  isLiked: number[];
  setIsLiked: React.Dispatch<React.SetStateAction<number[]>>;
};

function PuppiesList({ puppiesList, isLiked, setIsLiked }: PuppiesListProps) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {puppiesList.map(
        (puppy: {
          id: number;
          name: string;
          bred_for: string;
          image: { url: string };
        }) => (
          <PuppyCard
            key={puppy.id}
            puppy={puppy}
            isLiked={isLiked}
            setIsLiked={setIsLiked}
          />
        ),
      )}
    </ul>
  );
}

export default PuppiesList;

function PuppyCard({
  puppy,
  isLiked,
  setIsLiked,
}: {
  puppy: { id: number; name: string; bred_for: string; image: { url: string } };
  isLiked: number[];
  setIsLiked: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  return (
    <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
      <img
        className="aspect-square object-cover"
        alt={puppy.name}
        src={puppy.image.url}
      />
      <div className="gap flex items-center justify-between p-4 text-sm">
        <div className="flex items-center gap-2">
          <p className="font-semibold">{puppy.name}</p>
          <span className="text-slate-300">·</span>
          <p className="text-slate-500">{puppy.bred_for}</p>
        </div>
        <LikeButton
          puppyId={puppy.id}
          isLiked={isLiked}
          setIsLiked={setIsLiked}
        />
      </div>
    </li>
  );
}
