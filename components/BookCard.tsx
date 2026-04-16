import Image from "next/image";
import Link from "next/link";
import { Book } from "@/types/book";

export default function BookCard({ book }: { book: Book }) {
  const genre = book.genre?.genreName ?? "";

  return (
    <li className="flex flex-col border-r border-site-border last:border-r-0 cursor-pointer bg-site-bg">
      <Link href={`/books/${book.slug}`} className="flex flex-col flex-1">
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
        <div className="relative flex flex-col gap-1 p-4 border-t border-site-border">
          <button className="absolute top-0 right-0 w-10 h-10 border-l border-b border-site-border flex items-center justify-center text-xl font-light">
            ➜
          </button>
          <p className="text-sm">{book.author?.authorName}</p>
          <p className="text-sm font-black uppercase pr-10">
            {book.title}{" "}
            <span className="font-normal tracking-widest">
              {genre.toUpperCase()}
            </span>
          </p>
          <p className="text-sm line-clamp-2 pt-3">{book.description}</p>
          <p className="text-sm">
            <strong>{book.rating}</strong>{" "}
            <span className="uppercase tracking-widest text-xs">Rating</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
