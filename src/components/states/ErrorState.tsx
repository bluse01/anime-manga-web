import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { TriangleAlert } from "lucide-react";

export function EmptyState() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>
          <TriangleAlert />
        </EmptyTitle>
        <EmptyDescription>
          Something went wrong please try again.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
