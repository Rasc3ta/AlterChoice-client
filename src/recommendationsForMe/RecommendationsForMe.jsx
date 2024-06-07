import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import myAxios from "../../axios.config";
import { authContext } from "../Authentication/AuthProvider";
import "./recForMe.css"

const RecommendationsForMe = (props) => {
  const { user } = useContext(authContext);
  const [recsForMe, setRecsForMe] = useState([]);

  useEffect(() => {
    myAxios.get(`/recsForMe/${user.email}`).then((res) => {
      const data = res.data;
      setRecsForMe(data);
    });
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center my-10 ">
        Recommendations For Me:{" "}
      </h1>
      <ul className="recList p-2 m-2 rounded-xl border-[2px] border-darkBlue flex flex-col gap-3">
        <li className="flex justify-between font-bold text-lg border-b-[2px]  border-darkBlue ">
          <span className="flex-1">Title</span>
          <span className="flex-1">Product</span>
          <span className="flex-1">Recommender</span>
        </li>
        {recsForMe.map((rec) => {
          return (
            <li className="text-xl flex gap-4 justify-between border-b-[2px] border-darkBlue" key={rec._id}>
              <span className="flex-1">{rec.recTitle}</span>
              <span className="flex-1">{rec.recProductName}</span>
              <span className="flex-1">{rec.recommender.recName}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

RecommendationsForMe.propTypes = {};

export default RecommendationsForMe;
