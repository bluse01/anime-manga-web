import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { pageContext } from "@/context/pageContext";
import { useContext, useState } from "react";

export function PaginationComp() {
  const { handlePageSwitch, pagination } = useContext(pageContext);
  const [pages, setPages] = useState([1, 2, 3]);
  console.log(pagination);

  const offsetPagLink = (direction: string) => {
    switch (direction) {
      case "f":
        if (pagination?.has_next_page) {
          setPages([pages[1], pages[2], pages[2] + 1]);
          handlePageSwitch(pages[2]);
        }
        return;
      case "b":
        return;
      default:
        return;
    }
  };

  const page = pagination?.current_page || 1;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => handlePageSwitch(page - 1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            isActive={pagination?.current_page === pages[0]}
            onClick={() => offsetPagLink("b")}
          >
            {pages[0]}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive={pagination?.current_page === pages[1]}>
            {pages[1]}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            isActive={pagination?.current_page === pages[2]}
            onClick={() => offsetPagLink("f")}
          >
            {pages[2]}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => handlePageSwitch(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
