import { useEffect, useState } from "react";
import { fetchPuppies } from "../api/FetchPuppies";
import LikeButton from "./LikeButton";

function PuppiesList() {
  const [puppiesList, setPuppiesList] = useState([]);

  useEffect(() => {
    async function getPuppies() {
      const puppies = await fetchPuppies();
      setPuppiesList(puppies);
    }

    getPuppies();
  }, []);

  console.log(puppiesList);

  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {puppiesList.map(
        (puppy: {
          id: number;
          name: string;
          bred_for: string;
          image: { url: string };
        }) => (
          <PuppyCard key={puppy.id} puppy={puppy} />
        ),
      )}
    </ul>
  );
}

export default PuppiesList;

function PuppyCard({
  puppy,
}: {
  puppy: { id: number; name: string; bred_for: string; image: { url: string } };
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
        <LikeButton />
      </div>
    </li>
  );
}
