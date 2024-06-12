import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className=" grid relative gap-8 z-50 grid-cols-4 px-20 py-10">
      {Array.from({ length: 24 }).map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <Skeleton className="h-56 w-full  rounded-xl" />
          <div className="space-y-2 text-center">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
