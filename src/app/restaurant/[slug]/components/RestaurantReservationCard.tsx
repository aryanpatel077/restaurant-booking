"use client";

import { partySize, times } from "@/data";
import { time } from "console";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function RestaurantReservationCard({
  openTime,
  closeTime,
}: {
  openTime: string;
  closeTime: string;
}) {
  const [selectedDate, setselectedDate] = useState<Date | null>(new Date());
  const handleDateChange = (date: Date | null) => {
    if (date) {
      return setselectedDate(date);
    }
    setselectedDate(null);
  };

  const filterTimeWithRestaurant = () => {
    //12:30:00.000Z open
    // 22:00:00.000Z close
    const timeRange: typeof times = [];
    let isInTimeRange = false;

    times.forEach((time) => {
      if (time.time === openTime) {
        isInTimeRange = true;
      }
      if (isInTimeRange) {
        timeRange.push(time);
      }
      if (time.time === closeTime) {
        isInTimeRange = false;
      }
    });

    return timeRange;
  };

  return (
    <div className="w-[60%] relative text-reg">
      <div className="bg-white rounded p-3 shadow">
        <div className="text-center border-b pb-2 font-bold">
          <h4 className="mr-7 text-lg">Make a Reservation</h4>
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="">Party size</label>
          <select name="" className="py-3 border-b font-light" id="">
            {partySize.map((party) => (
              <option value={party.value} key={party.value}>
                {party.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between ">
          <div className="flex flex-col w-[59%]">
            <label htmlFor="">Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              className="py-3 w-24 border-b font-light text-reg"
              dateFormat="MMM dd,YYYY"
            />
          </div>
          <div className="flex flex-col w-[39%]">
            <label htmlFor="">Time</label>
            <select name="" id="" className="py-3  border-b font-light">
              {filterTimeWithRestaurant().map((time) => (
                <option value={time.time} key={time.time}>
                  {time.displayTime}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-5">
          <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
            Find a Time
          </button>
        </div>
      </div>
    </div>
  );
}
