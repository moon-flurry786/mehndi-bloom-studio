import { useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  sizes: string;
};

export function SmartImage({ src, alt, className, eager = false, sizes }: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden bg-muted">
      {!loaded && <Skeleton className="absolute inset-0 z-10 h-full w-full rounded-none" />}
      <img
        src={src}
        alt={alt}
        width={900}
        height={1100}
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        onError={(event) => {
          const target = event.currentTarget;
          if (!target.src.endsWith("/images/image-placeholder.webp")) {
            target.src = "/images/image-placeholder.webp";
          }
          setLoaded(true);
        }}
        className={cn("h-full w-full object-cover transition duration-700", loaded ? "opacity-100" : "opacity-0", className)}
      />
    </div>
  );
}
