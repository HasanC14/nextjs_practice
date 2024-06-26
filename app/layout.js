import { Gabarito } from "next/font/google";
import "./globals.css";
import Link from "next/link";

//  swap: initially render text using a system font or fallback font while the custom font is being loaded asynchronously
const inter = Gabarito({ subsets: ["latin"], weight: "400", display: "swap" });

export const metadata = {
  title: "Nextjs Practice",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid place-items-center`}>
        {/* <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link href={"/posts"}>Posts</Link>
            </li>
          </ul>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
