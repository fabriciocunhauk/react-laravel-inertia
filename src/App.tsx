import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { NewPuppyForm } from "./components/NewPuppyForm";
import { PageWrapper } from "./components/PageWrapper";
import PuppiesList from "./components/PuppiesList";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { fetchPuppies } from "./api/FetchPuppies";

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

  useEffect(() => {
    async function getPuppies() {
      const puppies = await fetchPuppies();
      setPuppiesList(puppies);
    }

    getPuppies();
  }, []);

  return (
    <main>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search />
        <Shortlist
          puppiesList={puppiesList}
          puppyIds={isLiked}
          isLiked={isLiked}
          setIsLiked={setIsLiked}
        />
      </div>
      <PuppiesList
        puppiesList={puppiesList}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
      />
      <NewPuppyForm />
    </main>
  );
}
