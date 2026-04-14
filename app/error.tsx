"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

export default function Error({ error, unstable_retry }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col flex-1 items-center justify-center gap-6 bg-site-bg px-6">
      <p className="text-xs uppercase tracking-widest">Error</p>
      <h1 className="text-4xl font-black uppercase">Something went wrong</h1>
      <button
        onClick={unstable_retry}
        className="text-xs font-bold uppercase tracking-widest border border-site-border px-4 py-2 hover:bg-site-accent transition-colors"
      >
        Try again
      </button>
    </main>
  );
}
