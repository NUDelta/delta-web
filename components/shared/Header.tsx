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
      <Container className="flex justify-between md:justify-start py-2 gap-6 items-center max-w-6xl">
        <div className="relative top-0 left-0 block h-full w-full md:w-3/12">
          <Link href="/">
            <a>
              <Image
                src={logo}
                alt="Screenshot of Zoom call with all lab members."
              />
            </a>
          </Link>
        </div>

        <button
          className="border rounded px-4 py-2 border-opacity-50 md:hidden"
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
    <nav className={`flex flex-col md:flex-row md:space-x-4 md:items-center`}>
      {links.map(({ href, label }) => (
        <Link href={href} key={label}>
          <a
            className={`py-3 px-3 hover:bg-dark-orange hover:text-black transition-colors ${
              router.pathname === href ? "bg-dark-orange text-black" : ""
            }`}
          >
            {label}
          </a>
        </Link>
      ))}
    </nav>
  );
}
