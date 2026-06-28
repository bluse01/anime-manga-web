import type { AnimeData } from "@/types/Anime";
import { Card, CardTitle, CardHeader, CardDescription } from "./card";
import { PaginationComp } from "./PageSwitcher";

interface AnimeDisplayProps {
  data: AnimeData[];
}

const RenderCard = ({ data }: { data: AnimeData[] }) => {
  return (
    <>
      {data.map((anime) => (
        <Card key={anime.mal_id} className="group cursor-pointer">
          <div className="w-full aspect-2/3 shadow-(--shadow-poster) isolate overflow-hidden rounded-(--radius) transition-transform duration-200 ease-out group-hover:-translate-y-1">
            <img
              src={anime.images.webp.large_image_url}
              loading="lazy"
              alt="anime-img"
              className="w-full h-full object-cover block"
            />
          </div>

          <CardHeader>
            <CardDescription className="flex items-center justify-between pb-1">
              <p>
                {anime.episodes ? anime.episodes : 0}
                <span className="text-gray-400 text-xs pl-1">ep</span>
              </p>
              <p className="text-primary">#{anime.rank}</p>
            </CardDescription>

            <CardTitle className="text-center line-clamp-2 px-3">
              <p className="transition-colors duration-200 group-hover:text-primary">
                {anime.title_english ? anime.title_english : anime.title}
              </p>
            </CardTitle>
          </CardHeader>
        </Card>
      ))}
    </>
  );
};

export default function AnimeDisplay({ data }: AnimeDisplayProps) {
  console.log(data);

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 justify-center">
        <RenderCard data={data} />
      </div>
      <PaginationComp />
    </>
  );
}
