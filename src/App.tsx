import { useState, useMemo, Suspense, use } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { NewPuppyForm } from "./components/NewPuppyForm";
import { PageWrapper } from "./components/PageWrapper";
import PuppiesList from "./components/PuppiesList";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { fetchPuppies } from "./api/FetchPuppies";
import { LikedContext } from "./context/LikedContext";
import type { PuppiesListTypes } from "./types/puppyTypes";
import { LoaderCircleIcon } from "lucide-react";
import { ErrorBoundary } from "react-error-boundary";

const App = () => (
  <PageWrapper>
    <Container>
      <Header />
      <ErrorBoundary
        fallbackRender={({ error }) => (
          <div className="bg-red-100 p-4 text-red-500">
            <p>Error: {error.message}</p>
          </div>
        )}
      >
        <Suspense
          fallback={
            <LoaderCircleIcon className="mx-auto mt-20 animate-spin stroke-cyan-400" />
          }
        >
          <Main />
        </Suspense>
      </ErrorBoundary>
    </Container>
  </PageWrapper>
);

export default App;

const puppyPromise = fetchPuppies();

const Main = () => {
  const puppiesList: PuppiesListTypes[] = use(puppyPromise);
  const [isLiked, setIsLiked] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [puppy, setPoppy] = useState<PuppiesListTypes[]>(puppiesList);

  const filteredPuppies = useMemo(
    () =>
      puppy.filter((puppy) =>
        searchQuery
          ? puppy.name?.toLowerCase().includes(searchQuery.toLowerCase())
          : true,
      ),
    [puppy, searchQuery],
  );

  return (
    <main>
      <LikedContext value={{ isLiked, setIsLiked }}>
        <div className="mt-24 grid gap-8 sm:grid-cols-2">
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Shortlist puppiesList={puppiesList} puppyIds={isLiked} />
        </div>

        <PuppiesList puppiesList={filteredPuppies} />
      </LikedContext>
      <NewPuppyForm puppiesList={puppiesList} setPuppiesList={setPoppy} />
    </main>
  );
};
