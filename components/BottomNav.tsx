import { Home, CalendarCheck, User } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2">
      <div className="flex flex-col items-center text-blue-500">
        <Home size={20} />
        <span className="text-xs">홈</span>
      </div>
      <div className="flex flex-col items-center text-gray-500">
        <CalendarCheck size={20} />
        <span className="text-xs">예약</span>
      </div>
      <div className="flex flex-col items-center text-gray-500">
        <User size={20} />
        <span className="text-xs">내정보</span>
      </div>
    </div>
  );
}
