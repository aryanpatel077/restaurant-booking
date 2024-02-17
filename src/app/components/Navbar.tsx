"use client";

import Link from "next/link";
import AuthModal from "./AuthModal";
import useAuthContext from "@/hooks/useAuthContext";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const { data, isFetchingUser } = useAuthContext();
  const { logout } = useAuth();
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href={"/"} className="font-bold text-gray-700 text-2xl">
        OpenTable
      </Link>
      <div>
        {isFetchingUser ? null : (
          <div className="flex">
            {data ? (
              <button
                className="bg-white text-red-600 border border-red-600 p-1 px-4 rounded-2xl mr-3"
                onClick={logout}
              >
                logout
              </button>
            ) : (
              <>
                <AuthModal isSignIn={true} />
                <AuthModal isSignIn={false} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
