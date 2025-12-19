import { Delete } from "lucide-react";
import { useRef, type Dispatch, type SetStateAction } from "react";

export function Search({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}) {
  const inputRef = useRef(null);

  return (
    <div>
      <label htmlFor="search" className="font-medium">
        Search for a character trait
      </label>
      <div className="mt-2 flex items-center gap-4">
        <input
          ref={inputRef}
          placeholder="playful..."
          name="search"
          id="search"
          type="text"
          value={searchQuery}
          className="w-full max-w-80 bg-white px-4 py-2 ring ring-black/5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button
          className="inline-block rounded bg-cyan-300 px-4 py-2 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          onClick={() => {
            setSearchQuery("");
            (inputRef.current as HTMLInputElement | null)?.focus();
          }}
        >
          <Delete />
        </button>
      </div>
    </div>
  );
}
