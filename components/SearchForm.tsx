// --- components/SearchForm.tsx ---

export default function SearchForm() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mx-4 -mt-20 z-10 relative">
      <p className="text-center text-gray-700 mb-4">귀하의 차량을 선택해 주세요</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select className="border p-2 rounded">
          <option>브랜드 선택</option>
          <option>한국타이어</option>
          <option>넥센타이어</option>
        </select>
        <select className="border p-2 rounded">
          <option>자동차 모델</option>
          <option>소나타</option>
          <option>카니발</option>
        </select>
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded font-semibold">
        타이어 검색 ➤
      </button>
    </div>
  );
}
