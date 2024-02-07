import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SearchHeader from "./components/SearchHeader";
import SearchSidebar from "./components/SearchSidebar";
import SearchCard from "./components/SearchCard";

export default function page() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar/>
        <SearchHeader/>
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SearchSidebar/>
          <div className="w-5/6">
            <SearchCard/>
          </div>
        </div>
      </main>
    </main>
  );
}
