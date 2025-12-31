import fs from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import type { BlogMetadata } from "@/types";

const MD_EXTENSION_REGEX = /\.md$/;
const POSTS_DIRECTORY = join(process.cwd(), "markdown");

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(MD_EXTENSION_REGEX, "");
  const fullPath = join(POSTS_DIRECTORY, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { metadata: data as BlogMetadata, content, slug: realSlug };
}

export function getPosts() {
  const slugs = fs.readdirSync(POSTS_DIRECTORY);
  const posts = slugs.map((slug) => getPostBySlug(slug));

  posts.sort((post1, post2) =>
    post1.metadata.date > post2.metadata.date ? -1 : 1
  );

  return posts.map((post) => {
    const { metadata, content, slug } = post;
    return {
      ...metadata,
      content,
      slug,
    };
  });
}
