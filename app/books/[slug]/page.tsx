import Image from "next/image";
import { notFound } from "next/navigation";
import { getBook, getBooks } from "@/lib/hygraph";
import { formatEnumLabel } from "@/lib/formatEnumLabel";
import { Edition } from "@/types/book";

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
        {book.editions[0]?.coverImage?.url && (
          <div className="relative w-full aspect-[3/4] bg-site-bg">
            <Image
              src={book.editions[0].coverImage.url}
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

      {book.editions.length > 0 && (
        <div className="p-12 border-t border-site-border bg-mauve-50">
          <h2 className="text-xs uppercase tracking-widest mb-6">
            Available Editions
          </h2>
          <div className="flex flex-col divide-y divide-site-border">
            {book.editions.map((edition: Edition, i: number) => (
              <div key={i} className="flex items-center gap-6 py-4">
                {edition.coverImage?.url && (
                  <div className="relative w-10 aspect-[3/4] shrink-0">
                    <Image
                      src={edition.coverImage.url}
                      alt={`${book.title} — ${edition.format}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-sm font-semibold">
                    {formatEnumLabel(edition.format)}
                  </span>
                  <span className="text-xs text-gray-500">
                    {edition.pageCount != null && `${edition.pageCount} pages`}
                    {edition.duration && `${edition.duration}`}
                  </span>
                </div>
                <span
                  className={`text-xs uppercase tracking-widest ${
                    edition.availability ? "text-green-600" : "text-red-400"
                  }`}
                >
                  {edition.availability ? "Available" : "Unavailable"}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
