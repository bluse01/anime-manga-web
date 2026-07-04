import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import AnimeDisplay from "./components/AnimeDisplay";
import type AnimeObject from "./types/Anime";
import { pageContext } from "./context/pageContext";
import Search from "./components/Search";
import { EmptyState } from "./components/states/EmptyState";
import { LoadingSpinner } from "./components/states/LoadingState";

function App() {
  const [animeObject, setAnimeObject] = useState<AnimeObject | null>(null);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handlePageSwitch = (page: number) => setPage(page);

  const handleSetTitle = (title: string) => {
    setTitle(title);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const test_url = "https://api.jikan.moe/v4/anime";

      const params = new URLSearchParams();
      params.append("page", String(page));
      params.append("q", title);

      try {
        const response = await fetch(`${test_url}?${params.toString()}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setAnimeObject(data);
      } catch (err) {
        console.error("error while fetching: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, title]);

  return (
    <main>
      <pageContext.Provider
        value={{
          handlePageSwitch,
          pagination: animeObject?.pagination ?? null,
        }}
      >
        <Nav />
        <Search onSetTitle={handleSetTitle} />
        {loading && <LoadingSpinner />}
        {!loading &&
        animeObject &&
        animeObject.data &&
        animeObject.data.length ? (
          <AnimeDisplay data={animeObject.data} />
        ) : null}

        {!loading && animeObject && animeObject.data.length === 0 && (
          <EmptyState />
        )}
      </pageContext.Provider>
    </main>
  );
}

export default App;
