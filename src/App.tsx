import { useEffect, useState } from "react";
import Nav from "./components/ui/Nav";
import AnimeDisplay from "./components/ui/AnimeDisplay";
import type AnimeObject from "./types/Anime";

function App() {
  const [animeObject, setAnimeObject] = useState<AnimeObject | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.jikan.moe/v4/top/anime");
      const data = await response.json();
      setAnimeObject(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Nav />
      {animeObject ? (
        <AnimeDisplay
          data={animeObject.data}
          pagination={animeObject.pagination}
        />
      ) : (
        <p>empty states</p>
      )}
    </>
  );
}

export default App;
