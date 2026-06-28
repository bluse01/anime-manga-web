import { createContext } from "react";

export const pageContext = createContext<(page: number) => void>(() => {});
