export type Book = {
  bookData: {
    author: { authorName: string; birthYear: number; country: string }[];
    genres: { genreName: string }[];
    year: number;
    description: string;
    rating: number;
    coverImage: { url: string } | null;
  };
};
