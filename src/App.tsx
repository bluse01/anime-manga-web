import { useEffect } from "react";
import Nav from "./components/ui/Nav";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.jikan.moe/v4/top/anime");
      const data = await response.json();
      console.log("test", data);
    };

    fetchData();
  }, []);

  return <Nav />;
}

export default App;
