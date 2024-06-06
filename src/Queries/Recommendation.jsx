import PropTypes from "prop-types";

const Recommendation = ({ recommendation }) => {
  const {
    queryId,
    recTitle,
    recProductName,
    recProductImage,
    recReason,
    queryTile,
    productName,
    queryAuthor,
    recommender,
  } = recommendation;

  const curTimeStamp =new Date(recommender.curTimeStamp);

  return (
    <div className="p-1 border-[2px] border-darkBlue rounded-lg my-1">
      <div>
        <h1 className="text-lg font-bold py-1 border-b-[2px] border-darkBlue ">
          {recTitle}
        </h1>
        <img src={recProductImage} className="max-h-[100px]" />
        <h1 className="text-lg font-bold  mb-1">
          Recommendation Product : {recProductName}
        </h1>
        <h1 className="text-lg font-bold ">Recommendation Reason :</h1>
        <p className="pl-2 text-lg border-b-[2px] border-darkBlue pb-2">
          {recReason}
        </p>
        <div>
            <h1>Recommender : {recommender.recName}</h1>
            <h1>Date : {(curTimeStamp.toDateString())}</h1>
        </div>
      </div>
    </div>
  );
};

Recommendation.propTypes = {
  recommendation: PropTypes.object,
};

export default Recommendation;
