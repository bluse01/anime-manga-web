import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { pageContext } from "@/context/pageContext";
import { useContext } from "react";

export function PaginationComp() {
  const { handlePageSwitch, pagination } = useContext(pageContext);
  console.log(handlePageSwitch);
  console.log(pagination);

  const page = pagination?.current_page || 1;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => handlePageSwitch(page - 1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => handlePageSwitch(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
