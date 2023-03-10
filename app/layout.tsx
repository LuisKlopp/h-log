import "./globals.css";

import Link from "next/link";

// eslint-disable-next-line prettier/prettier
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md ">
        <Link href="/">
          <h1 className="text-2xl font-bold text-white">Hyeon's Blog</h1>
        </Link>
        <p className="text-slate-300">Welcome to my tech blog</p>
      </div>
    </header>
  );
  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-6 py-6 text-center text-slate-400">
        <h1>Developed by Ryu Hyeon</h1>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      {/* <head /> */}
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
