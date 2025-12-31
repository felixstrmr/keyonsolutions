import Link from "next/link";

export default function HomeNavbarNavigation() {
  const items = [
    {
      name: "Prozess",
      href: "#how-we-work",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Preise",
      href: "#pricing",
    },
    {
      name: "Kontakt",
      href: "/contact",
    },
  ];

  return (
    <nav className="flex items-center gap-3">
      {items.map((item) => (
        <Link
          className="text-muted-foreground text-sm transition-colors hover:text-foreground"
          href={item.href}
          key={item.href}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
