import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import myAxios from "../../axios.config";
import { authContext } from "../Authentication/AuthProvider";
import MyRecommendation from "./MyRecommendation";

const MyRecommendations = () => {
  const { user } = useContext(authContext);

  const [myRecs, setMyRecs] = useState([]);

  useEffect(() => {
    myAxios.get(`/myRecs/${user.email}`).then((res) => {
      const data = res.data;
      setMyRecs(data);
      // console.log(data);
    });
  }, []);

  return (
    <div>
      {" "}
      <h1 className="text-center my-10 text-3xl font-bold">
        My Recommendations :{" "}
      </h1>
      <div className="flex flex-col gap-1 ">
        {
            myRecs.map(rec=>{
                // console.log(rec.recTitle)
                return <MyRecommendation key={rec._id} recommendation={rec}></MyRecommendation>
            })
        }
      </div>
    </div>
  );
};

MyRecommendations.propTypes = {};

export default MyRecommendations;
