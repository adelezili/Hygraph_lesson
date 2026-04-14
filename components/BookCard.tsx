import Image from "next/image";
import { Book } from "@/types/book";

export default function BookCard({ book }: { book: Book }) {
  const data = book.bookData;
  const genre = data.genres[0]?.genreName ?? "";

  return (
    <li className="flex flex-col border border-site-border">
      {data.coverImage?.url && (
        <div className="relative w-full aspect-[3/4] bg-site-bg">
          <Image
            src={data.coverImage.url}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="relative flex flex-col gap-1 bg-site-bg p-4 border-t border-site-border">
        <button className="absolute top-0 right-0 w-10 h-10 border-l border-b border-site-border flex items-center justify-center text-xl font-light">
          ➜
        </button>
        <p className="text-sm">{data.author[0].authorName}</p>
        <p className="text-sm font-black uppercase pr-10">
          {data.title}{" "}
          <span className="font-normal tracking-widest">
            {genre.toUpperCase()}
          </span>
        </p>
        <p className="text-sm line-clamp-2 pt-3">{data.description}</p>
        <p className="text-sm">
          <strong>{data.rating}</strong>{" "}
          <span className="uppercase tracking-widest text-xs">Rating</span>
        </p>
      </div>
    </li>
  );
}
