import ReservationHeader from "./components/ReservationHeader";
import ReservationForm from "./components/ReservationForm";

export default function page() {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <ReservationHeader />
        <ReservationForm />
      </div>
    </div>
  );
}
