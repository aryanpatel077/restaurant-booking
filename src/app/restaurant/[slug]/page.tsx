import React from "react";
import Navbar from "@/components/Navbar";
import RestaurantHeader from "./components/RestaurantHeader";
import RestaurantNavbar from "./components/RestaurantNavbar";
import RestaurantTitle from "./components/RestaurantTitle";
import RestaurantRating from "./components/RestaurantRating";
import RestaurantDescription from "./components/RestaurantDescription";
import RestaurantImages from "./components/RestaurantImages";
import RestaurantReviewCard from "./components/RestaurantReviewCard";
import RestaurantReservationCard from "./components/RestaurantReservationCard";

export default function page() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar/>
        <RestaurantHeader/>
         {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavbar/>
            <RestaurantTitle/>
            <RestaurantRating/>
            <RestaurantDescription/>
             <RestaurantImages/>
            {/* REVIEWS */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
                What 100 people are saying
              </h1>
              <div>
               <RestaurantReviewCard/>
              </div>
            </div>
            {/* REVIEWS */}
          </div>
          <RestaurantReservationCard/>
        </div>
      </main>
    </main>
  );
}
