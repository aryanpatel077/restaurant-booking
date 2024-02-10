import React from "react";
import RestaurantTitle from "./components/RestaurantTitle";
import RestaurantRating from "./components/RestaurantRating";
import RestaurantDescription from "./components/RestaurantDescription";
import RestaurantImages from "./components/RestaurantImages";
import RestaurantReviewCard from "./components/RestaurantReviewCard";
import RestaurantReservationCard from "./components/RestaurantReservationCard";
import { PrismaClient } from "@prisma/client";
import RestaurantNavbar from "./components/RestaurantNavbar";

const prisma = new PrismaClient();

interface Props {
  params: {
    slug: string;
  };
}

interface RestaurantType {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string
}

const fetchRestaurant = async (slug: string): Promise<RestaurantType> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      slug: true
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant;
};

export default async function page({ params }: Props) {
  // console.log(params.slug);

  const restaurant = await fetchRestaurant(params.slug);
  console.log(restaurant);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavbar slug={restaurant.slug} />
        <RestaurantTitle title={restaurant.name} />
        <RestaurantRating />
        <RestaurantDescription description={restaurant.description} />
        <RestaurantImages images={restaurant.images} />
        <div>
          <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
            What 100 people are saying
          </h1>
          <div>
            <RestaurantReviewCard />
          </div>
        </div>
      </div>
      <RestaurantReservationCard />
    </>
  );
}
