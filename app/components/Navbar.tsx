"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("userEmail");

    if (user) {
      setEmail(user);
    }
  }, []);

  return (
    <div className="flex justify-end mb-8">
      {email ? (
        <div className="bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-lg">
          👤 {email}
        </div>
      ) : (
        <Link
          href="/signup"
          className="bg-white text-black px-4 py-2 rounded-lg font-semibold"
        >
          Sign Up
        </Link>
      )}
    </div>
  );
}