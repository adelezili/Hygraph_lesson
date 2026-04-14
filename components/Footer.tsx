import { NavigationLink } from "@/types/layout";

interface FooterProps {
  title: string;
  navigationLinks: NavigationLink[];
}

export default function Footer({ title, navigationLinks }: FooterProps) {
  return (
    <footer className="w-full bg-site-bg text-site-text border-l border-site-border">
      <nav className="px-8 py-16 flex flex-col gap-6">
        <p className="text-7xl font-bold">{title}</p>
        <ul className="flex flex-col gap-4">
          {navigationLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                className="text-sm font-bold uppercase tracking-widest"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
