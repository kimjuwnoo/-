import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import SearchForm from "@/components/SearchForm";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">
      {/* ✅ 배경 이미지 적용 영역 */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        {/* ✅ 어두운 오버레이 추가 (선택적) */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <Header />
        </div>
      </div>

      <SearchForm />

      <div className="text-center text-sm text-gray-500 mt-4">
        금일 조회수 37건 | 누적 조회수 <strong>4,784,377건</strong>
      </div>

      <BottomNav />
    </div>
  );
}
