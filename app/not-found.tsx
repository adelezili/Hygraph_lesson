import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center gap-6 bg-site-bg px-6">
      <p className="text-xs uppercase tracking-widest">404</p>
      <h1 className="text-4xl font-black uppercase">Page not found</h1>
      <Link
        href="/"
        className="text-xs font-bold uppercase tracking-widest border border-site-border px-4 py-2 hover:bg-site-accent transition-colors"
      >
        Return home
      </Link>
    </main>
  );
}
