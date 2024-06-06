import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import myAxios from "../../axios.config";
import Swal from "sweetalert2";

const CrudCard = ({ cardData }) => {
  const navigate = useNavigate();

  const {
    productImage,
    queryTile,
    productName,
    boycottReason,
    dateTime,
    userImage,
    name,
    brandName,
    _id,
  } = cardData;

  const goToDetails = () => {
    navigate(`/queryDetails/${_id}`);
  };

  const deleteQuery = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        myAxios
          .delete(`/deleteQuery?title=${queryTile}`)
          .then((res) => {
            if (res.data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your query has been deleted.",
                icon: "success",
              });
            }
          })
          .then(() => {
            window.location.reload();
          });
      }
    });
  };

  const updateQuery = () => {
    navigate(`/update/${queryTile}`);
  };

  const currentDate = new Date(dateTime);
  return (
    <div className="w-[300px] border-[1px] border-darkBlue hover:shadow-[0px_0px_10px_rgb(0,0,0,.3)] rounded-xl m-1  text-darkBlue col-span-1 mx-auto">
      <Link>
        <ul className="flex flex-col gap-1  min-h-[600px] justify-between">
          <li className="  py-2 font-bold px-3">{queryTile}</li>
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
          <li className="border-y-[1px] border-darkBlue px-3 py-2 text-center flex justify-between items-center gap-5">
            <div className="flex flex-nowrap justify-center gap-1 items-center ">
              <img src={userImage} className="rounded-full w-[28px]" />
              <span>{name}</span>
            </div>
            <span className="">
              {currentDate.toDateString().split(" ").slice(1, 4).join(" ")}
            </span>
          </li>
          <li className="flex flex-wrap items-center justify-center gap-1 my-1 mb-3">
            <button onClick={goToDetails} className="button btn">
              View Details{" "}
            </button>
            <button onClick={updateQuery} className="button btn">
              Update{" "}
            </button>
            <button onClick={deleteQuery} className="button btn">
              Delete
            </button>
          </li>
        </ul>
      </Link>
    </div>
  );
};

CrudCard.propTypes = {
  cardData: PropTypes.object,
};

export default CrudCard;
