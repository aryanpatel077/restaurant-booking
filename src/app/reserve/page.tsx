import Navbar from "@/components/Navbar";
import React from "react";
import ReservationHeader from "./components/ReservationHeader";
import ReservationForm from "./components/ReservationForm";

export default function page() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar/>
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <ReservationHeader/>
            <ReservationForm/>
          </div>
        </div>
      </main>
    </main>
  );
}
