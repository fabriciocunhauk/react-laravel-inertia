import type { Dispatch, SetStateAction } from "react";
import type { PuppiesListTypes } from "../types/puppyTypes";
import { useFormStatus } from "react-dom";

export function NewPuppyForm({
  puppiesList,
  setPuppiesList,
}: {
  puppiesList: PuppiesListTypes[];
  setPuppiesList: Dispatch<SetStateAction<PuppiesListTypes[]>>;
}) {
  const addNewPuppy = (formData: FormData) => {
    const newPuppy: PuppiesListTypes = {
      id: puppiesList.length + 1,
      name: formData.get("name") as string,
      bred_for: formData.get("bred_for") as string,
      image: { url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg" },
    };

    setPuppiesList([...puppiesList, newPuppy]);
  };

  return (
    <div className="mt-12 flex items-center justify-between bg-white p-8 shadow ring ring-black/5">
      <form
        action={(formData) => addNewPuppy(formData)}
        className="mt-4 flex w-full flex-col items-start gap-4"
      >
        <div className="grid w-full gap-6 md:grid-cols-3">
          <fieldset className="flex w-full flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              required
              className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              id="name"
              type="text"
              name="name"
            />
          </fieldset>
          <fieldset className="flex w-full flex-col gap-1">
            <label htmlFor="bred_for">Personality bred for</label>
            <input
              required
              className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              id="bred_for"
              type="text"
              name="bred_for"
            />
          </fieldset>
          <fieldset
            disabled={false}
            className="col-span-2 flex w-full cursor-not-allowed flex-col gap-1 opacity-50"
          >
            <label htmlFor="image">Profile pic</label>
            <input
              required
              className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              id="image"
              type="file"
              name="image"
            />
          </fieldset>
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending, data } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="mt-4 rounded bg-cyan-300 px-4 py-2 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-200"
      type="submit"
    >
      {pending ? `Adding ${data.get("name") || "puppy"}...` : "Add Puppy"}
    </button>
  );
}
