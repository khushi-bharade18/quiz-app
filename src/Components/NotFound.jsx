import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center h-[60vh] text-center px-4 bg-gradient-to-br from-indigo-400 via-purple-200 to-pink-200">
      <h1 className="text-5xl font-bold text-indigo-600">404</h1>
      <p className="text-lg text-gray-700 mt-2">Page not found</p>
      <p className="text-sm text-gray-500 mt-1">
        The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-5 py-2 bg-indigo-500 text-white rounded-lg"
      >
        Go To The Home Page
      </button>
    </div>
  );
}
