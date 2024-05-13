import { FaHeartBroken } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center pt-10 sm:pt-16 lg:pt-20">
      <span className="text-[100px] sm:text-[150px] md:text-[200px]">
        <FaHeartBroken />
      </span>
      <h3 className="font-bold text-xl sm:text-3xl lg:text-5xl sm:my-5">
        Page not found
      </h3>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="btn button text-lg mt-1 sm:mt-5 sm:text-2xl"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
