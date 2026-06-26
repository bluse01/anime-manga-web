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
        <Card key={anime.mal_id} className="max-w-70 h-70">
          <div className="w-full aspect-2/3">
            <img
              src={anime.images.webp.large_image_url}
              loading="lazy"
              alt="anime-img"
              className="w-full h-full object-cover block"
            />
          </div>
        </Card>
      ))}
    </>
  );
};

export default function AnimeDisplay({ data, pagination }: AnimeDisplayProps) {
  console.log(data);
  console.log(pagination);

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 justify-center">
      <RenderCard data={data} />
    </div>
  );
}
