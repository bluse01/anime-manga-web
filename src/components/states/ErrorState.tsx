import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { TriangleAlert } from "lucide-react";

export function ErrorState() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>
          <TriangleAlert color="red" />
        </EmptyTitle>
        <EmptyDescription>
          Something went wrong please try again later.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
