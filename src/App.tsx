import { Container } from "./app.style";
import AnimeList from "./components/animeList/animeList";
import Footer from "./components/footer/footer";
import { FooterImage } from "./components/footer/footer.style";
import Header from "./components/header/header";
import SearchBar from "./components/searchBar/searchBar";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Container>
        <AnimeList />
      </Container>
      <Footer />
    </>
  );
}

export default App;
