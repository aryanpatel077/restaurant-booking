import Card from "@/components/Card";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { PrismaClient, Location, Region, PRICE, Review } from "@prisma/client";

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  location: Location;
  region: Region;
  price: PRICE;
  slug: string;
  reviews: Review[];
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  let restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      location: true,
      region: true,
      price: true,
      slug: true,
      reviews: true,
    },
  });
  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  console.log({ restaurants });

  return (
    <main>
      <Header />
      {/* CARDS */}
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <Card restaurant={restaurant} />
        ))}
      </div>
      {/* CARDS */}
    </main>
  );
}
