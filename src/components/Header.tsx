import Link from "next/link";

export const Header = () => (
  <header className="header">
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/blog">Blog</Link>
  </header>
);
