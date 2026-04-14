export interface Book {
  id: string;
  title: string;
  slug: string;
  author: { authorName: string };
  genre: { genreName: string } | null;
  year: number;
  description: string;
  rating: number;
  coverImage: { url: string } | null;
}
