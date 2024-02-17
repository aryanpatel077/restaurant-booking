import Stars from "@/app/components/Stars";
import calcuateReviewAvarage from "@/utils/calcuateReviewAvarage";
import { Review } from "@prisma/client";

export default function RestaurantRating({ reviews }: { reviews: Review[] }) {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars reviews={reviews} />
        <p className="text-reg ml-3">{calcuateReviewAvarage(reviews)}</p>
      </div>

      <div>
        <p className="text-reg ml-4">
          {reviews.length} Review{reviews.length > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}
