import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <div>
      <nav className="flex">
        <Link href={"/about/mission"}>Mission</Link>
        <Link href={"/about/vision"}>Mission</Link>
      </nav>
      {children}
    </div>
  );
}
