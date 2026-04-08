import Image from "next/image";
import { Book } from "@/types/book";
import { formatEnumLabel } from "@/lib/formatEnumLabel";

export default function BookCard({ book }: { book: Book }) {
  const data = book.bookData;

  return (
    <li>
      {data.coverImage?.url && (
        <Image
          src={data.coverImage.url}
          width={100}
          height={100}
          alt=""
        />
      )}
      {data.author.map((a, j) => (
        <p key={j}>
          {a.authorName} ({a.birthYear}, {formatEnumLabel(a.country)})
        </p>
      ))}
      <p>Genres: {data.genres.map((g) => g.genreName).join(", ")}</p>
      <p>Year: {data.year}</p>
      <p>Rating: {data.rating}</p>
      <p>{data.description}</p>
    </li>
  );
}
