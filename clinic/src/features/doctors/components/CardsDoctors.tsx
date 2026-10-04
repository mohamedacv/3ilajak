import { Button } from "@/components/ui/button";
import { BookOpen, Clock3, Pen, Star, Trash2, UserCheck } from "lucide-react";

function CardsDoctors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-white p-4 shadow rounded-xl">
          <div className="flex gap-3 items-start">
            <div className="bg-red-600 p-3 rounded-full text-white">ZH</div>

            <div className="flex flex-col">
              <p className="text-xl font-semibold">Dr. Tariq Al-Mansouri</p>

              <span className="text-blue-500">Cardiology</span>

              <div className="flex items-center gap-1">
                <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                <span>4.6</span>
              </div>
            </div>
          </div>

          <div className="border border-dashed w-full my-6" />

          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <div className="flex text-gray-600 items-center gap-1">
                <UserCheck className="w-4 h-4" />
                <span>12 today</span>
              </div>

              <div className="flex text-gray-600 items-center gap-1">
                <Clock3 className="w-4 h-4" />
                <span>08:00 - 16:00</span>
              </div>
            </div>

            <div className="flex text-gray-600 items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>18 yrs exp</span>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <Button variant="outline" className="flex-1 h-11 cursor-pointer">
              <Pen className="w-4 h-4" />
              Edit
            </Button>

            <Button variant="outline" className="flex-1 h-11 cursor-pointer">
              <Trash2 className="w-4 h-4" />
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsDoctors;
