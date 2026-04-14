interface NavigationLink {
  id: string;
  label: string;
  url: string;
}

interface HeaderProps {
  navigationLinks: NavigationLink[];
}

export default function Header({ navigationLinks }: HeaderProps) {
  const lastIndex = navigationLinks.length - 1;

  return (
    <header className="w-full border-b border-site-border">
      <div className="flex items-center justify-between px-6 py-4">
        <p className="text-2xl font-black uppercase">Library title</p>
        <nav>
          <ul className="flex items-center gap-6">
            {navigationLinks.map((link, i) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  className={`text-xs font-bold uppercase tracking-widest ${
                    i === lastIndex ? "bg-site-accent px-2 py-1" : ""
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
