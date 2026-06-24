interface AnimeData {
  title: string;
}
export default interface AnimeObject {
  data: AnimeData[];
  pagination: {
    current_page: number;
  };
}
