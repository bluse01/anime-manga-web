export interface AnimeData {
  title: string;
  title_english: string;
  status: string;
  score: number;
  scored_by: number;
  rank: number;
  mal_id: number;
  images: {
    webp: {
      image_url: string;
      large_image_url: string;
    };
  };
}

export interface AnimePagination {
  pagination: {
    current_page: number;
  };
}

export default interface AnimeObject {
  data: AnimeData[];
  pagination: AnimePagination;
}
