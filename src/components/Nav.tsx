import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [status, setStatus] = useState(false);
  const divStyle = "border border-border shadow-sm rounded-(--radius)";

  // fetching jikan api status to display in the header
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch("https://api.jikan.moe/v4");

      const data = await response.json();
      setStatus(!data.myanimelist_heartbeat.down);
    };

    fetchApi();
  }, []);

  return (
    <nav className="mt-2 mb-7 flex flex-row justify-between">
      <div className={divStyle}>
        <Button variant={"link"} size={"lg"}>
          <p className="text-lg font-medium">
            Anime <span className="text-white">List</span>
          </p>
        </Button>
      </div>

      <div className={divStyle}>
        <HoverCard>
          <HoverCardTrigger>
            {" "}
            <a href="https://jikan.moe/" target="_blank">
              <Button variant={"link"} size={"lg"}>
                <p className="text-gray-400 text-xs">Jikan API</p>
                <span
                  className={cn(
                    "w-1 h-1 rounded-full",
                    status ? "bg-green-400" : "bg-red-400",
                  )}
                ></span>
              </Button>
            </a>
          </HoverCardTrigger>

          <HoverCardContent>
            This site is powered by Jikan API. If u see that API is down don't
            worry, Jikan itself is working, you might get outdated cached data
            if you try to serch specific anime/manga details right now, simply
            because Jikan cannot reach the source.
          </HoverCardContent>
        </HoverCard>
      </div>
    </nav>
  );
}
