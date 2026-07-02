import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

export function EmptyState() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The Anime/Manga you&apos;re looking for doesn&apos;t exist. Try
          searching for it again.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
