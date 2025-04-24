import Link from "next/link";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>About us</h1>
      <Link href="/about/team">Team</Link>
      <Link href="/about/contacts">Contacts</Link>
      {children}
    </div>
  );
}
