export interface Edition {
  format: string;
  pageCount: number | null;
  duration: string | null;
  coverImage: { url: string } | null;
  availability: boolean;
}

export interface Book {
  id: string;
  title: string;
  slug: string;
  author: { authorName: string };
  genre: { genreName: string } | null;
  year: number;
  description: string;
  rating: number;
  editions: Edition[];
  reviews: { id: number; userId: number; title: string; body: string } | null;
}
