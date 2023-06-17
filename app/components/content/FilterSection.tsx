const FilterSection = () => {
  return (
    <div className="flex flex-row bg-white h-16 items-center justify-between">
      <div className="flex flex-row items-center justify-between ml-10">
        <button
          className="flex flex-row justify-around items-center  w-32 border rounded-md border-gray-500"
          style={{ width: 122, height: 40 }}
        >
          <div className="flex flex-row items-center">
            <img className=" w-4 h-4 mr-2" src="filter.svg" />
            <p className="text-base font-medium text-gray-500 capitalize">
              Filter
            </p>
          </div>
          <img src="down-arrow.svg" />
        </button>
        <button
          className="flex flex-row justify-around items-center  w-32 border rounded-md border-gray-500 ml-5"
          style={{ width: 122, height: 40 }}
        >
          <div className="flex flex-row items-center">
            <img className=" w-4 h-4 mr-2" src="calender-1.svg" />
            <p className="text-base font-medium text-gray-500 capitalize">
              Today
            </p>
          </div>
          <img src="down-arrow.svg" />
        </button>
      </div>
      <div className="flex flex-row justify-around w-1/5  ">
        <button className="w-[97px] h-10 border rounded-md border-gray-500 flex flex-row items-center justify-around">
          <img src="share.svg" />
          <p className="text-base font-medium text-left capitalize text-[#787486]">
            Share
          </p>
        </button>
        <div className=" w-[1px] bg-[#787486]  h-8"></div>
        <button>
          <img src="options.svg" />
        </button>
        <button>
          <img src="grid.svg" />
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
