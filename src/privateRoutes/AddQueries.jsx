const AddQueries = () => {
  return (
    <div className="flex flex-col items-center my-5 sm:my-10">
      <form className=" my-4 bg-veryLightBlue p-2 rounded-xl sm:p-10">
        <h1 className="text-2xl font-bold mb-4">Add Query : </h1>
        <label className="py-3 flex flex-row items-center gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold ">
          Product Name :
          <input
            className="bg-transparent  placeholder:text-darkBlue focus:outline-none flex-1 border-b-2 border-superDarkBlue "
            type="text"
            placeholder="example name"
            name="productName"
          />
        </label>
        <label className="py-3 flex flex-row items-center gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold ">
          Brand Name :
          <input
            className="bg-transparent  placeholder:text-darkBlue focus:outline-none flex-1 border-b-2 border-superDarkBlue "
            type="text"
            placeholder="example name"
            name="productName"
          />
        </label>
        <label className="py-3 flex flex-row items-center gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold ">
          Product Image :
          <input
            className="bg-transparent  placeholder:text-darkBlue focus:outline-none flex-1 border-b-2 border-superDarkBlue "
            type="text"
            placeholder="example name"
            name="productName"
          />
        </label>
        <label className="py-3 flex flex-row items-center gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold ">
          Query Title :
          <input
            className="bg-transparent  placeholder:text-darkBlue focus:outline-none flex-1 border-b-2 border-superDarkBlue "
            type="text"
            placeholder="example name"
            name="productName"
          />
        </label>
        <label className="py-3 px-4 flex flex-col items-start gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold">
          Boycotting Reason :
          <textarea
            className="resize-none bg-transparent  placeholder:text-darkBlue focus:outline-none  p-3 rounded-xl border-2 border-superDarkBlue w-full h-36"
            type="text"
            placeholder="example name"
            name="productName"
          />
        </label>
        <div className="w-full flex justify-center">
          <button onClick={(e)=>e.preventDefault()} className="button btn w-[200px] ">Add Query</button>
        </div>
      </form>
    </div>
  );
};

export default AddQueries;
