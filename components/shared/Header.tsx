import Link from "next/link";
import Container from "./Container";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

import logo from "./assets/logo.png";

const links: { href: string; label: string }[] = [
  { href: "/how-we-work", label: "How We Work" },
  { href: "/people", label: "People" },
  { href: "/research-areas", label: "Research Areas" },
  { href: "/publications", label: "Publications" },
  { href: "/join-us", label: "Join Us" },
];

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-grey text-white">
      <Container className="flex max-w-6xl items-center justify-between gap-6 py-2 md:justify-start">
        <div className="relative left-0 top-0 block h-full w-full md:w-3/12">
          <Link href="/">
            <Image src={logo} alt="Delta Lab Logo" />
          </Link>
        </div>

        <button
          className="rounded border border-opacity-50 px-4 py-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>

        <div className="hidden md:block">
          <Nav />
        </div>
      </Container>

      {isMenuOpen && (
        <div className="px-4 py-8">
          <Nav />
        </div>
      )}
    </header>
  );
}

function Nav(): JSX.Element {
  const router = useRouter();

  return (
    <nav className={`flex flex-col md:flex-row md:items-center md:space-x-4`}>
      {links.map(({ href, label }) => (
        <Link
          href={href}
          key={label}
          className={`px-3 py-3 transition-colors hover:bg-dark-orange hover:text-black ${
            router.pathname === href ? "bg-dark-orange text-black" : ""
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
