// --- pages/index.tsx ---

import Header from "@/components/Header";
import SearchForm from "@/components/SearchForm";
import BottomNav from "@/components/BottomNav";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">
      <div className="bg-[url('/bg.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center">
        <Header />
      </div>
      <SearchForm />
      <div className="text-center text-sm text-gray-500 mt-4">
        금일 조회수 37건 | 누적 조회수 <strong>4,784,377건</strong>
      </div>
      <BottomNav />
    </div>
  );
}
