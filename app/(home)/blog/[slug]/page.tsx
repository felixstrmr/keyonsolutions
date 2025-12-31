import Markdown from "@/components/markdown";
import PostFooter from "@/components/post-footer";
import PostHeader from "@/components/post-header";
import { getPostBySlug } from "@/queries/blog";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata, content } = getPostBySlug(slug);

  return (
    <div className="py-32">
      <div className="mx-auto max-w-3xl px-3">
        <PostHeader metadata={metadata} />
        <Markdown content={content} />
        <PostFooter />
      </div>
    </div>
  );
}
