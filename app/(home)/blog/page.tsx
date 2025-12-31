import { format } from "date-fns";
import { de } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getPosts } from "@/queries/blog";

export default function Page() {
  const posts = getPosts();
  const featuredPosts = posts.filter((post) => post.isFeatured);
  const regularPosts = posts.filter((post) => !post.isFeatured);

  return (
    <div className="flex size-full flex-col items-center pt-12">
      <div className="w-full max-w-3xl px-3">
        <h1 className="text-2xl tracking-tight">Blog</h1>
        <div className="mt-6 border-border border-b border-dashed pb-3" />
        <div className="mt-9">
          {featuredPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="mb-4 text-lg tracking-tight">
                Empfohlene Beiträge
              </h2>
              <ul className="grid w-full grid-cols-1 gap-4">
                {featuredPosts.map((post) => (
                  <Link
                    className="block rounded-xl"
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                  >
                    <Image
                      alt={post.title}
                      className="aspect-video w-full rounded-lg object-cover"
                      height={1080}
                      src={post.cover}
                      width={1920}
                    />
                    <div className="space-y-1.5 pt-3">
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <p>{format(post.date, "PP", { locale: de })}</p>
                        <p>•</p>
                        <p>{post.minRead} Minuten Lesezeit</p>
                      </div>
                      <p className="font-semibold tracking-tight">
                        {post.title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground text-sm">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          )}
          {regularPosts.length > 0 && (
            <div>
              <h2 className="mb-4 text-lg tracking-tight">Alle Beiträge</h2>
              <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
                {regularPosts.map((post) => (
                  <Link
                    className="block rounded-xl"
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                  >
                    <Image
                      alt={post.title}
                      className="aspect-video w-full rounded-lg object-cover"
                      height={1080}
                      src={post.cover}
                      width={1920}
                    />
                    <div className="space-y-1.5 pt-3">
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <p>{format(post.date, "PP", { locale: de })}</p>
                        <p>•</p>
                        <p>{post.minRead} Minuten Lesezeit</p>
                      </div>
                      <p className="tracking-tight">{post.title}</p>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
