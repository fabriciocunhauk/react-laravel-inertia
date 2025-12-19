import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { NewPuppyForm } from "./components/NewPuppyForm";
import { PageWrapper } from "./components/PageWrapper";
import PuppiesList from "./components/PuppiesList";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { fetchPuppies } from "./api/FetchPuppies";
import { LikedContext } from "./context/LikedContext";

function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </PageWrapper>
  );
}

export default App;

function Main() {
  const [isLiked, setIsLiked] = useState<number[]>([]);
  const [puppiesList, setPuppiesList] = useState([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    async function getPuppies() {
      const puppies = await fetchPuppies();
      setPuppiesList(puppies);
    }

    getPuppies();
  }, []);

  const filteredPuppies = puppiesList.filter(
    (puppy: { id: number; name: string }) => {
      if (!searchQuery) return true;
      return (
        puppy.name &&
        puppy.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
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
      <NewPuppyForm />
    </main>
  );
}
