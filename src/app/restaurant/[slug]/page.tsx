import RestaurantTitle from "./components/RestaurantTitle";
import RestaurantRating from "./components/RestaurantRating";
import RestaurantDescription from "./components/RestaurantDescription";
import RestaurantImages from "./components/RestaurantImages";
import RestaurantReviewCard from "./components/RestaurantReviewCard";
import RestaurantReservationCard from "./components/RestaurantReservationCard";
import { PrismaClient, Review } from "@prisma/client";
import RestaurantNavbar from "./components/RestaurantNavbar";
import { notFound } from "next/navigation";

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
  slug: string;
  reviews: Review[];
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
      slug: true,
      reviews: true,
    },
  });

  if (!restaurant) {
    notFound();
  }

  return restaurant;
};

export default async function page({ params }: Props) {
  const restaurant = await fetchRestaurant(params.slug);
  // console.log(restaurant);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavbar slug={restaurant.slug} />
        <RestaurantTitle title={restaurant.name} />
        <RestaurantRating reviews={restaurant.reviews} />
        <RestaurantDescription description={restaurant.description} />
        <RestaurantImages images={restaurant.images} />
        <div>
          <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
            What {restaurant.reviews.length}{" "}
            {restaurant.reviews.length === 1 ? "person" : "people"} are saying
          </h1>
          <div>
            {restaurant.reviews.map((review) => (
              <RestaurantReviewCard review={review} key={review.id} />
            ))}
          </div>
        </div>
      </div>
      <RestaurantReservationCard />
    </>
  );
}
