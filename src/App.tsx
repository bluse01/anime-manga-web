import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import AnimeDisplay from "./components/AnimeDisplay";
import type AnimeObject from "./types/Anime";
import { pageContext } from "./context/pageContext";
import Search from "./components/Search";
import { EmptyState } from "./components/states/EmptyState";
import { LoadingSpinner } from "./components/states/LoadingState";
import { ErrorState } from "./components/states/ErrorState";

function App() {
  const [animeObjectCache, setAnimeObjectCache] = useState<{
    [page: number]: AnimeObject;
  }>({});
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handlePageSwitch = (page: number) => setPage(page);

  const handleSetTitle = (title: string) => {
    setError(false);
    setTitle(title);
    setPage(1);
    setAnimeObjectCache({});
  };

  const cacheData = animeObjectCache[page];

  useEffect(() => {
    if (animeObjectCache[page]) return;

    const fetchData = async () => {
      setLoading(true);
      const url = "https://api.tenrai.org/v1/anime";

      const params = new URLSearchParams();
      params.append("page", String(page));
      if (title.trim()) {
        params.append("q", title);
      }

      try {
        const response = await fetch(`${url}?${params.toString()}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setAnimeObjectCache((prev) => ({
          ...prev,
          [page]: data,
        }));
      } catch (err) {
        setError(true);
        console.error("error while fetching: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, title, animeObjectCache]);
  console.log("cache", animeObjectCache);

  return (
    <main>
      <pageContext.Provider
        value={{
          handlePageSwitch,
          pagination: cacheData?.pagination ?? null,
        }}
      >
        <Nav />
        <Search onSetTitle={handleSetTitle} />
        {loading && <LoadingSpinner />}

        {error && <ErrorState />}

        {!loading && cacheData && cacheData.data && cacheData.data.length ? (
          <AnimeDisplay data={cacheData.data} />
        ) : null}

        {!loading && cacheData && cacheData.data.length === 0 && <EmptyState />}
      </pageContext.Provider>
    </main>
  );
}

export default App;
