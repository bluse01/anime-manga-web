import { useEffect, useState } from "react";
import Nav from "./components/ui/Nav";
import AnimeDisplay from "./components/ui/AnimeDisplay";
import type AnimeObject from "./types/Anime";

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
      <Nav />
      {animeObject ? (
        <AnimeDisplay
          data={animeObject.data}
          pagination={animeObject.pagination}
        />
      ) : (
        <p>empty states</p>
      )}
    </main>
  );
}

export default App;
