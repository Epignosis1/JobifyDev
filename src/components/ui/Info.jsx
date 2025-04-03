import { FaEdit } from "react-icons/fa";

export function Info({ keys, values }) {
  return (
    <div>
      <div className="flex justify-between border-b pb-1 mb-2">
        <h2 className="font-semibold text-[15px]">{keys}</h2>
      </div>
      <p className="text-gray-700">{values}</p>
    </div>
  );
}
