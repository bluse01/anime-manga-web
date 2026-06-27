export interface AnimeData {
  title: string;
  title_english: string | null;
  status: string;
  score: number;
  scored_by: number;
  rank: number;
  mal_id: number;
  episodes: number | null;
  images: {
    webp: {
      image_url: string;
      large_image_url: string;
    };
  };
}

export interface AnimePagination {
  current_page: number;
}

export default interface AnimeObject {
  data: AnimeData[];
  pagination: AnimePagination;
}
