import Image from "next/image";
import { getHomepage } from "@/lib/hygraph";
import { PageSection } from "@/types/page";
import { Book } from "@/types/book";
import BookCard from "@/components/BookCard";

export default async function Home() {
  const page = await getHomepage();

  return (
    <main>
      {page.pageSections.map((section: PageSection) => {
        if (section.__typename === "FeaturedBooks") {
          return (
            <section key={section.id}>
              <ul className="grid grid-cols-4 gap-6">
                {section.books.map((book: Book & { id: string }) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </ul>
            </section>
          );
        }

        if (section.__typename === "Section") {
          return (
            <section key={section.id} className="relative min-h-[500px] flex">
              {section.backgroundImage?.url && (
                <Image
                  src={section.backgroundImage.url}
                  alt=""
                  fill
                  className="object-cover"
                />
              )}
              <div className="relative z-10 w-1/3 flex flex-col justify-end gap-6 bg-site-text text-white p-12 m-10">
                <h2 className="text-5xl font-light leading-tight">
                  {section.title}
                </h2>
                <p className="text-xs font-bold uppercase tracking-widest">
                  {section.description}
                </p>
              </div>
            </section>
          );
        }

        return null;
      })}
    </main>
  );
}
