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
            <section className="border-b border-site-border" key={section.id}>
              <ul className="grid grid-cols-2 md:grid-cols-4">
                {section.books.map((book: Book & { id: string }) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </ul>
            </section>
          );
        }

        if (section.__typename === "Section") {
          return (
            <section
              key={section.id}
              className="relative flex border-b bg-site-bg border-site-border min-h-[15rem] md:min-h-[30rem]"
            >
              {section.backgroundImage?.url && (
                <Image
                  src={section.backgroundImage.url}
                  alt=""
                  fill
                  className="object-cover"
                />
              )}
              <div className="relative z-10 w-100 md:w-1/3 flex flex-col justify-end gap-6 bg-site-text text-white p-4 md:p-12 m-4 md:m-10">
                <h2 className="text-5xl font-light leading-tight">
                  {section.title}
                </h2>
                <p className="text-xs font-bold uppercase tracking-widest">
                  {section.description}
                </p>
                {section.button && (
                  <a
                    href={section.button.url}
                    style={{
                      backgroundColor: section.button.backgroundColor.hex,
                    }}
                    className="self-start px-6 py-3 text-xs font-bold uppercase tracking-widest"
                  >
                    {section.button.label}
                  </a>
                )}
              </div>
            </section>
          );
        }

        return null;
      })}
    </main>
  );
}
