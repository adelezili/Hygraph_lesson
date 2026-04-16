"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavigationLink } from "@/types/layout";

interface HeaderProps {
  logoUrl: string;
  navigationLinks: NavigationLink[];
}

export default function Header({ logoUrl, navigationLinks }: HeaderProps) {
  const pathname = usePathname();

  function isActive(url: string): boolean {
    if (url === "/") return pathname === "/";
    return pathname.startsWith(url);
  }

  return (
    <header className="w-full border-b border-site-border bg-site-bg">
      <div className="flex items-center justify-between p-2 md:px-6 md:py-4">
        <Image src={logoUrl} alt="Site logo" width={160} height={48} />
        <nav>
          <ul className="flex items-center gap-2 md:gap-6">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  className={`text-xs font-bold uppercase tracking-widest ${
                    isActive(link.url) ? "bg-site-accent px-2 py-1" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
