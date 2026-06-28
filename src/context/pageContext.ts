import { createContext } from "react";
import type { AnimePagination } from "@/types/Anime";

interface PageContextType {
  pagination: AnimePagination | null;
  handlePageSwitch: (page: number) => void;
}

export const pageContext = createContext<PageContextType>({
  pagination: null,
  handlePageSwitch: () => {},
});
