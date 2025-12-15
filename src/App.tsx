import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { PageWrapper } from "./components/PageWrapper";
import PuppiesList from "./components/PuppiesList";

function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <PuppiesList />
      </Container>
    </PageWrapper>
  );
}

export default App;
