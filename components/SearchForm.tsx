import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function SearchForm() {
  const router = useRouter();
  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    setBrands(["한국타이어", "넥센타이어"]);
    setModels(["소나타", "카니발"]);
  }, []);

  const handleSearch = () => {
    router.push(`/search?brand=${selectedBrand}&model=${selectedModel}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mx-4 -mt-20 z-10 relative">
      <p className="text-center text-gray-700 mb-4">귀하의 차량을 선택해 주세요</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          className="border p-2 rounded"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">브랜드 선택</option>
          {brands.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        <select
          className="border p-2 rounded"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          <option value="">자동차 모델</option>
          {models.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>
      <button
        onClick={handleSearch}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded font-semibold"
      >
        타이어 검색 ➤
      </button>
    </div>
  );
}
