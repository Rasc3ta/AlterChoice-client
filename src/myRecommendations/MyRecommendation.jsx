import React from "react";
import PropTypes from "prop-types";
import myAxios from "../../axios.config";
import { settings } from "firebase/analytics";

const MyRecommendation = ({ recommendation }) => {
  const handleDelete = () => {
    myAxios
      .delete(`/delete?recTitle=${recTitle}&queryTitle=${queryTile}`)
      .then((res) => {
        console.log(res.data);
      })
      .then(() => {
        setTimeout(() => {
          location.reload();
        }, 500);
      })
      .catch((e) => console.log(e.message));
    // console.log("hi");
  };

  const { curTimeStamp, recTitle, recProductName, recProductImage, queryTile } =
    recommendation;

  const timeStamp = Date(curTimeStamp).split(" ").slice(0, 4).join(" ");

  return (
    <div className="relative p-1 mr-[100px] border-[2px] border-darkBlue rounded-lg my-1">
      <div className="">
        <img src={recProductImage} className="max-h-[150px]" />
        <h1 className="text-lg font-bold py-1 border-b-[2px] border-darkBlue ">
          Query Title : {queryTile}
        </h1>
        <h1 className="text-lg font-bold  mb-1">
          Recommendation Title : {recTitle}
        </h1>
        <h1 className="text-lg font-bold  ">
          Recommendation Product : {recProductName}
        </h1>
        <div className="">
          <h1>Recommendation Date : {timeStamp}</h1>
        </div>
      </div>
      <button
        onClick={handleDelete}
        className="button btn absolute top-[calc(50%-24px)] right-[-75px]"
      >
        X
      </button>
    </div>
  );
};

MyRecommendation.propTypes = {
  recommendation: PropTypes.object,
};

export default MyRecommendation;
