import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllQueriesCard = ({ cardData }) => {
  const {
    productImage,
    queryTile,
    productName,
    boycottReason,
    dateTime,
    userImage,
    name,
    brandName,
    recommendationCount,_id
  } = cardData;

  return (
    <div className="w-[300px] border-[1px] border-darkBlue hover:shadow-[0px_0px_10px_rgb(0,0,0,.3)] rounded-xl m-1  text-darkBlue col-span-1 mx-auto">
      <ul className="flex flex-col gap-1  min-h-[500px] justify-between">
        <li className=" text-xl py-2 font-bold px-3">{queryTile }</li>
        <li className="border-y border-darkBlue">
          <img
            src={productImage}
            className="max-h-[250px] w-full object-cover"
          />
        </li>
        <li className="text-xl font-bold px-3">Name : {productName}</li>
        <li className="text-xl font-bold px-3">Brand : {brandName}</li>
        <li className=" font-bold px-3">
          <span className="text-xl">Reason for alternative :</span>
          <br />
          <p className="text-lg font-normal">
            {boycottReason.split(" ").slice(0, 21).join(" ")}
          </p>
        </li>
        <li className="text-xl font-bold px-3">
          Recommendations : {recommendationCount}
        </li>
        <li className="border-y-[1px] border-darkBlue px-3 py-2 text-center flex justify-between items-center gap-5">
          <div className="flex flex-nowrap justify-center gap-1 items-center ">
            <img src={userImage} className="rounded-full w-[28px]" />
            <span>{name}</span>
          </div>
          <span className="">
            {(new Date(dateTime)).toDateString().split(" ").slice(1, 4).join(" ")}
          </span>
        </li>
        <li className='flex justify-center p-2 items-center'>
            <Link to={`/queryDetails/${_id}`}>
             <button className="btn button ">Recommended</button>
            </Link>
        </li>
      </ul>
    </div>
  );
};

AllQueriesCard.propTypes = {
    cardData: PropTypes.object,
};

export default AllQueriesCard;