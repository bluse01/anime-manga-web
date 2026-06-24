import type AnimeObject from "@/types/Anime";

export default function AnimeDisplay({ data, pagination }: AnimeObject) {
  console.log(data);
  console.log(pagination);

  return <h1>test</h1>;
}
