import type { AnimeData, AnimePagination } from "@/types/Anime";
import { Card } from "./card";

interface AnimeDisplayProps {
  data: AnimeData[];
  pagination: AnimePagination;
}

const RenderCard = ({ data }: { data: AnimeData[] }) => {
  return (
    <>
      {data.map((anime) => (
        <Card key={anime.mal_id} className="w-xs">
          <img
            src={anime.images.webp.large_image_url}
            alt="anime-img"
            className="h-3/4"
          />
        </Card>
      ))}
    </>
  );
};

export default function AnimeDisplay({ data, pagination }: AnimeDisplayProps) {
  console.log(data);
  console.log(pagination);

  return (
    <div className="grid grid-cols-3 gap-4 justify-center">
      <RenderCard data={data} />
    </div>
  );
}
