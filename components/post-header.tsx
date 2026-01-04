import { format } from "date-fns";
import { de } from "date-fns/locale";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { BlogMetadata } from "@/types";

export default function PostHeader({ metadata }: { metadata: BlogMetadata }) {
  const { title, date, description, author, minRead, cover } = metadata;

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <Link
          className="flex items-center gap-2 text-muted-foreground hover:underline"
          href="/blog"
        >
          <ArrowLeftIcon className="size-4" />
          <span className="text-sm">Zurück</span>
        </Link>
        <div className="flex items-center gap-1.5">
          {metadata.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <h1 className="mt-6 mb-3 text-3xl tracking-tight">{title}</h1>
      <p className="text-neutral-300/75">{description}</p>
      <div className="mt-6 mb-6 flex items-center gap-3 text-muted-foreground text-sm">
        <Tooltip>
          <TooltipTrigger>
            <Image
              alt={author.name}
              className="aspect-square rounded-full"
              height={28}
              src={author.avatar}
              width={28}
            />
          </TooltipTrigger>
          <TooltipContent className="w-fit" side="bottom">
            <p>{author.name}</p>
          </TooltipContent>
        </Tooltip>
        <p>{format(date, "PP", { locale: de })}</p>
        <p>•</p>
        <p>{minRead} Minuten Lesezeit</p>
      </div>
      <Image
        alt={title}
        className="mb-16 aspect-video rounded-lg"
        height={1080}
        src={cover}
        width={1920}
      />
    </div>
  );
}
