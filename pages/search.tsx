import { useRouter } from "next/router";

export default function SearchResults() {
  const router = useRouter();
  const { brand, model } = router.query;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">타이어 검색 결과</h2>
      <p>선택한 브랜드: {brand}</p>
      <p>선택한 모델: {model}</p>
      <p className="mt-4 text-gray-500">※ 여기에 검색된 타이어 리스트가 표시됩니다.</p>
    </div>
  );
}
