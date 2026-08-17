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
      try {
        const response = await fetch("https://api.jikan.moe/v4");

        if (!response.ok) {
          const data = await response.json();
          if (!data.myanimelist_heartbeat) {
            setStatus(!data.myanimelist_heartbeat.down);
          }
        }
      } catch {
        console.error("nav status update error");
      }
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
          <HoverCardTrigger asChild>
            <Button variant="link" size="lg" asChild>
              <a
                href="https://jikan.moe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-400 text-xs">Jikan API</span>
                <span
                  className={cn(
                    "w-1 h-1 rounded-full",
                    status ? "bg-green-400" : "bg-red-400",
                  )}
                />
              </a>
            </Button>
          </HoverCardTrigger>

          <HoverCardContent>
            This site is powered by Jikan API. If u see that API is down don't
            worry, Jikan itself is working, you might get outdated cached data
            if you try to search specific anime/manga details right now, simply
            because Jikan cannot reach the source.
          </HoverCardContent>
        </HoverCard>
      </div>
    </nav>
  );
}
