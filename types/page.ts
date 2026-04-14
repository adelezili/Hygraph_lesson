import { Book } from "./book";

export interface FeaturedBooksSection {
  __typename: "FeaturedBooks";
  id: string;
  books: (Book & { id: string })[];
}

export interface ContentSection {
  __typename: "Section";
  id: string;
  title: string;
  description: string;
  backgroundImage: { url: string } | null;
}

export type PageSection = FeaturedBooksSection | ContentSection;
