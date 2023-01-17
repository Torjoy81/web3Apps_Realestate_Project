import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <img src="/static/image/logo.svg" alt="No img" />
        </Link>
        <div className="flex items-center gap-6">
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            href="#"
          >
            Sign up
          </Link>
          <Link className="hover:text-violet-900 transition" href="#">
            Log in
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
