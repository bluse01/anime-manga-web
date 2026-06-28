import { useEffect, useState } from "react";
import Nav from "./components/ui/Nav";
import AnimeDisplay from "./components/ui/AnimeDisplay";
import type AnimeObject from "./types/Anime";
import { pageContext } from "./context/pageContext";

function App() {
  const [animeObject, setAnimeObject] = useState<AnimeObject | null>(null);
  const [page, setPage] = useState(1);

  const handlePageSwitch = (page: number) => setPage(page);

  useEffect(() => {
    const fetchData = async () => {
      const test_url = "https://api.jikan.moe/v4/top/anime";

      const params = new URLSearchParams();
      params.append("page", String(page));

      try {
        const response = await fetch(`${test_url}?${params.toString()}`);
        const data = await response.json();
        setAnimeObject(data);
      } catch (err) {
        console.error("error while fetching: ", err);
      }
    };

    fetchData();
  }, [page]);

  return (
    <main>
      <pageContext.Provider
        value={{
          handlePageSwitch,
          pagination: animeObject?.pagination ?? null,
        }}
      >
        <Nav />
        {animeObject ? (
          <AnimeDisplay data={animeObject.data} />
        ) : (
          <p>empty states</p>
        )}
      </pageContext.Provider>
    </main>
  );
}

export default App;
