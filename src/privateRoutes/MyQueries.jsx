import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import myAxios from "../../axios.config";
import { authContext } from "../Authentication/AuthProvider";
import { GoAlert } from "react-icons/go";
import CrudCard from "./CrudCard";

const MyQueries = () => {
  const [myQueries, setMyQueries] = useState([]);
  const navigate = useNavigate();

  const { user } = useContext(authContext);

  useEffect(() => {
    myAxios
      .get(`/myQueries?email=${user?.email}`)
      .then((res) => setMyQueries(res.data));
  }, []);
  return (
    <div className=" mx-5 sm:mx-10">
      <div className="max-w-[750px]  text-lightBlue text-center flex flex-col items-center border-4 border-darkBlue my-5 p-4 mx-auto px-8 gap-2 rounded-xl bg-[url('https://i.ibb.co/tXtbCY5/water.jpg')] bg-no-repeat bg-top bg-cover">
        <h1 className="text-3xl font-bold ">Find Alternatives </h1>
        <p className=" text-lg max-w-[500px]">
          Explore a world of alternatives and discover products tailored to your
          needs.
        </p>
        <button
          onClick={() => {
            navigate("/addQueries");
          }}
          className="text-xl  btn button mt-2"
        >
          Add Queries
        </button>
      </div>
      {myQueries.length ? (
        <div>
          <h2 className="text-3xl font-bold text-center my-10">
            My Queries :{" "}
          </h2>
          <div className=" p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
            {myQueries.map((card) => {
              return <CrudCard key={card._id} cardData={card}></CrudCard>;
            })}
          </div>
        </div>
      ) : (
        <div>
          <p className="text-xl font-bold flex items-center gap-2">
            <span className="text-4xl">
              <GoAlert />
            </span>
            No queries found. Please add query to find the best alternative .
          </p>
          <div className="flex items-center justify-center">
          <button
            onClick={() => {
              navigate("/addQueries");
            }}
            className="text-xl btn button mt-2"
          >
            Add Queries
          </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default MyQueries;
