import { Link } from "react-router-dom";
import notfoundsvg from "../../assets/not-found.svg";

export default function NotFound() {
  return (
    <div>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center flex flex-col justify-center items-center ">
          <img src={notfoundsvg} alt="" className="w-96" />
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </h1>
          <p className="my-5 text-gray-500">We can not find that page.</p>

          <Link to="/">
            <button
              type="button"
              className="text-gray-600 hover:text-white border-2 border-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2   tracking-tight"
            >
              Go back to dasboard!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
