import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import "../styles/content-switch.css";

interface navProps {
  value: string;
  contentSwitch: (contentTarget: string) => void;
}

export default function Nav({ value, contentSwitch }: navProps) {
  const [status, setStatus] = useState(false);
  const divStyle = "border border-border shadow-sm rounded-(--radius)";

  // fetching tenrai anime endpoint to check the status of the api
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("https://api.tenrai.org/v1/anime");
        console.log(response);

        if (response.ok) {
          setStatus(true);
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

      <div className="flex justify-center items-center p-1">
        <ToggleGroup
          onValueChange={(v) => {
            if (v) contentSwitch(v);
          }}
          type="single"
          variant="outline"
          value={value}
          spacing={1}
        >
          <ToggleGroupItem
            className="content-anime"
            value="anime"
            aria-label="Toggle Anime"
          >
            Anime
          </ToggleGroupItem>
          <ToggleGroupItem
            className="content-manga"
            value="manga"
            aria-label="Toggle Manga"
          >
            Manga
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className={divStyle}>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" size="lg" asChild>
              <a
                href="https://tenrai.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="align-middle"
              >
                <img
                  src="/src/assets/logo-white.png"
                  alt="Tenrai Logo"
                  className="w-7 h-7"
                />
                <span className="text-gray-400 text-xs">Tenrai API</span>
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
            This site is powered by Tenrai API. If u see that API is down don't
            worry, Tenrai itself is working, you might get outdated cached data
            if you try to search specific anime/manga details right now, simply
            because Tenrai cannot reach the source.
          </HoverCardContent>
        </HoverCard>
      </div>
    </nav>
  );
}
