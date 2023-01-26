import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

function Navbar() {
  const { data: session, status } = useSession();
  console.log(session);

  const handleLogout = async () => {
    await signOut();
    // redirect to login page or home page
    Router.push("/");
  };

  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <img src="/static/image/imglogo.png" alt="No img" />
          Tsensa
        </Link>

        {status === "authenticated" ? (
          <div className="flex items-center gap-6">
            <button
              className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <Link
              className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
              href="/signup"
            >
              Sign up
            </Link>
            <Link className="hover:text-violet-900 transition" href="#">
              Log in
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
