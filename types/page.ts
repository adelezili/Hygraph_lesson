import { Book } from "./book";

export interface FeaturedBooksSection {
  __typename: "FeaturedBooks";
  id: string;
  books: (Book & { id: string })[];
}

export interface Button {
  label: string;
  url: string;
  backgroundColor: { hex: string };
}

export interface ContentSection {
  __typename: "Section";
  id: string;
  title: string;
  description: string;
  backgroundImage: { url: string } | null;
  button: Button | null;
  variant: { variantName: "hero" | "cta" } | null;
}

export type PageSection = FeaturedBooksSection | ContentSection;
