import Header from "@/app/components/Header";

export default function Loading() {
  return (
    <main>
      <Header />
      <div className="gap-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center  ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
          <div
            className="animate-pulse bg-slate-200 w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
            key={num}
          />
        ))}
      </div>
    </main>
  );
}
