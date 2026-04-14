import Image from "next/image";
import { notFound } from "next/navigation";
import { getBook, getBooks } from "@/lib/hygraph";

export async function generateStaticParams() {
  const books = await getBooks();
  return books.map((book) => ({ slug: book.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = await getBook(slug);

  if (!book) notFound();

  return (
    <main className="flex flex-col flex-1">
      <div className="grid grid-cols-2">
        {book.coverImage?.url && (
          <div className="relative w-full aspect-[3/4] bg-site-bg">
            <Image
              src={book.coverImage.url}
              alt={book.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex flex-col gap-6 p-12 bg-site-bg border-l border-site-border">
          <div>
            <p className="text-xs uppercase tracking-widest">
              {book.genre?.genreName}
            </p>
            <h1 className="text-4xl font-black uppercase mt-1">{book.title}</h1>
          </div>
          <div className="flex flex-col gap-1">
            <p>{book.author?.authorName}</p>
          </div>
          <p>{book.description}</p>
          <div className="flex gap-6 text-sm">
            <p>
              <strong>{book.year}</strong>{" "}
              <span className="uppercase tracking-widest text-xs">Year</span>
            </p>
            <p>
              <strong>{book.rating}</strong>{" "}
              <span className="uppercase tracking-widest text-xs">Rating</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
