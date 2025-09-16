import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <p className="text-2xl flex justify-center">
      <span className="animate-spin">
        <FaSpinner />
      </span>
    </p>
  );
}
