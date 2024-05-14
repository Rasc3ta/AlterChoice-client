import { useNavigate } from "react-router-dom";

const MyQueries = () => {
  
    const navigate = useNavigate();

  return (
    <div className=" mx-5 sm:mx-10">
      <div className="max-w-[750px]  text-lightBlue text-center flex flex-col items-center border-4 border-darkBlue my-5 p-4 mx-auto px-8 gap-2 rounded-xl bg-[url('https://i.ibb.co/tXtbCY5/water.jpg')] bg-no-repeat bg-top bg-cover">
        <h1 className="text-3xl font-bold ">Find Your Alternatives Here</h1>
        <p className=" text-lg max-w-[500px]">
          Explore a world of alternatives and discover products tailored to your
          needs.
        </p>
        <button onClick={()=>{
            navigate('/addQueries')
        }} className="text-xl  btn button mt-2">Add Queries</button>
      </div>
      <div className="border-4 rounded-xl border-superDarkBlue p-3"></div>
    </div>
  );
};

export default MyQueries;
