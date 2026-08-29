"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LINKS = [
  { id: "claims", label: "Services" },
  { id: "field", label: "Who we serve" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

const PAGE_LINKS = [{ href: "/blog", label: "Blog" }];

export default function Nav() {
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    if (!onHome || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  return (
    <nav>
      <a className="wordmark" href="/">
        PATENT<span>IO</span>
      </a>
      <div className="nav-links">
        {LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={onHome ? `#${id}` : `/#${id}`}
            className={active === id ? "active" : ""}
          >
            {label}
          </a>
        ))}
        {PAGE_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={pathname.startsWith(href) ? "active" : ""}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
