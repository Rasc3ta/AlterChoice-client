import PropTypes from "prop-types";
import myAxios from "../../axios.config";
import Swal from "sweetalert2";
import { useContext } from "react";
import { authContext } from "../Authentication/AuthProvider";
import { useParams } from "react-router-dom";

const UpdateQuery = () => {
  const { user } = useContext(authContext);
  const { title } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const productImage = form.productImage.value;
    const queryTile = form.queryTile.value;
    const boycottReason = form.boycottReason.value;

    const dateTime = Date.now();
    const recommendationCount = 0;

    const query = {
      productName,
      brandName,
      productImage,
      queryTile,
      boycottReason,

      dateTime,
      recommendationCount,
    };

    // console.log(query);

    myAxios
      .patch("/updateQuery", { query, oldTitle: title })
      .then(res=>{
        if (res.data.modifiedCount === 1) {
          Swal.fire({
            title: "Updated!",
            text: "Your query has been updated.",
            icon: "success",
          });
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="flex flex-col items-center my-5 sm:my-10">
      {console.log(title)}
      <form
        onSubmit={handleSubmit}
        className=" my-4 bg-veryLightBlue p-2 rounded-xl sm:p-10"
      >
        <h1 className="text-2xl font-bold mb-4">Add Query : </h1>
        <label className="py-3 flex flex-row items-center gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold ">
          Product Name :
          <input
            className="bg-transparent  placeholder:text-darkBlue focus:outline-none flex-1 border-b-2 border-superDarkBlue "
            type="text"
            name="productName"
          />
        </label>
        <label className="py-3 flex flex-row items-center gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold ">
          Brand Name :
          <input
            className="bg-transparent  placeholder:text-darkBlue focus:outline-none flex-1 border-b-2 border-superDarkBlue "
            type="text"
            name="brandName"
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
        <label className="py-3 flex flex-row items-center gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold ">
          Query Title :
          <input
            className="bg-transparent  placeholder:text-darkBlue focus:outline-none flex-1 border-b-2 border-superDarkBlue "
            type="text"
            name="queryTile"
          />
        </label>
        <label className="py-3 px-4 flex flex-col items-start gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold">
          Boycotting Reason :
          <textarea
            className="resize-none bg-transparent  placeholder:text-darkBlue focus:outline-none  p-3 rounded-xl border-2 border-superDarkBlue w-full h-36"
            type="text"
            name="boycottReason"
          />
        </label>
        <div className="w-full flex justify-center">
          <button
            // onClick={(e) => e.preventDefault()}
            className="button btn w-[200px] "
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

UpdateQuery.propTypes = {};

export default UpdateQuery;
