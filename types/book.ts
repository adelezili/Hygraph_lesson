export type Book = {
  bookData: {
    title: string;
    author: { authorName: string; birthYear: number; country: string }[];
    genres: { genreName: string }[];
    year: number;
    description: string;
    rating: number;
    coverImage: { url: string } | null;
  };
};
