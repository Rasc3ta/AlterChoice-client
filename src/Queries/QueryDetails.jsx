import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import myAxios from "../../axios.config";
import { authContext } from "../Authentication/AuthProvider";
import Recommendation from "./Recommendation";

const QueryDetails = () => {
  const { user } = useContext(authContext);

  const [queryData, setQueryData] = useState({});
  const [allRecommendation, setAllRecommendation] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    myAxios.get(`/query/${id}`).then((res) => {
      const query = res.data;
      setQueryData(query);
    });

    myAxios.get(`/allRec/${id}`).then((res) => {
      setAllRecommendation(res.data);
    });
  }, []);

  const {
    productImage,
    queryTile,
    productName,
    boycottReason,
    dateTime,
    name,
    email,
    brandName,
    recommendationCount,
    _id,
  } = queryData;

  const today = new Date(dateTime);

  const addRec = (e) => {
    e.preventDefault();

    const form = e.target;
    console.log(form);
    const recTitle = form.recTitle.value;
    const recProductName = form.productName.value;
    const recProductImage = form.productImage.value;
    const recReason = form.recommendationReason.value;

    const recommendation = {
      queryId: _id,
      recTitle,
      recProductName,
      recProductImage,
      recReason,
      queryTile,
      productName,
      queryAuthor: {
        email,
        name,
      },
      recommender: {
        recEmail: user.email,
        recName: user.displayName,
        curTimeStamp: Date.now(),
      },
    };

    myAxios.post("/postRec", recommendation).then((res) => {
      console.log(res.data);
    });
    // console.log(recommendation);

    setTimeout(() => {
      location.reload();
    }, 500);
  };

  return (
    <div className=" px-2 sm:px-10">
      <h1 className="text-3xl font-bold my-5 sm:mt-10 ">{queryTile}</h1>
      <img
        src={productImage}
        className="max-w-[300px] sm:max-w-full max-h-[300px] sm:max-h-[500px] "
      />
      <h1 className="text-3xl font-bold my-2 ">Name : {productName}</h1>
      <h1 className="text-3xl font-bold my-2 ">Brand : {brandName}</h1>
      <h1 className="my-3 text-xl">
        <span className="text-3xl font-bold ">Reason for alternative : </span>
        <br /> {boycottReason}
      </h1>
      <h1 className="text-3xl font-bold my-2 ">
        Date : {today.toDateString()}
      </h1>
      <h1 className="text-3xl font-bold my-2 ">
        Recommendation count : {recommendationCount}
      </h1>

      <div>
        <h1 className="text-3xl font-bold my-2 ">Author of the query :</h1>
        <h1 className="text-xl font-bold my-2 ">Name : {name}</h1>
        <h1 className="text-xl font-bold my-2 ">Email : {email}</h1>
      </div>

      <div>
        <form
          onSubmit={addRec}
          className="max-w-[600px] my-4 bg-veryLightBlue p-2 rounded-xl sm:p-10"
        >
          <h1 className="text-3xl font-bold my-2 ">Add a recommendation :</h1>
          <label className="py-3 flex flex-row items-center gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold ">
            Recommendation Title :
            <input
              className="bg-transparent  placeholder:text-darkBlue focus:outline-none flex-1 border-b-2 border-superDarkBlue "
              type="text"
              name="recTitle"
            />
          </label>
          <label className="py-3 flex flex-row items-center gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold ">
            Product Name :
            <input
              className="bg-transparent  placeholder:text-darkBlue focus:outline-none flex-1 border-b-2 border-superDarkBlue "
              type="text"
              name="productName"
            />
          </label>
          <label className="py-3 flex flex-row items-center gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold ">
            Product Image :
            <input
              className="bg-transparent  placeholder:text-darkBlue focus:outline-none flex-1 border-b-2 border-superDarkBlue "
              type="text"
              name="productImage"
            />
          </label>
          <label className="py-3 px-4 flex flex-col items-start gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold">
            Recommendation Reason :
            <textarea
              className="resize-none bg-transparent  placeholder:text-darkBlue focus:outline-none  p-3 rounded-xl border-2 border-superDarkBlue w-full h-36"
              type="text"
              name="recommendationReason"
            />
          </label>
          <div className="w-full flex justify-center">
            <button type="submit" className="button btn w-[200px] ">
              Add Recommendation
            </button>
          </div>
        </form>
      </div>

      <div>
        <h1 className="text-3xl font-bold my-2 ">All recommendations :</h1>

        <div>
          {allRecommendation.map((rec) => (
            <Recommendation key={rec._id} recommendation={rec}></Recommendation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;
