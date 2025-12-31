export type BlogMetadata = {
  title: string;
  description: string;
  date: string;
  cover: string;
  minRead: number;
  tags: string[];
  isFeatured: boolean;
  author: {
    name: string;
    avatar: string;
    title: string;
  };
};
