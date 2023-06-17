import FilterSection from './FilterSection';

const ContentHeader = () => {
  return (
    <div className="bg-white pt-10 mr-14">
      <div className="flex flex-row items-center justify-between ">
        <div className="flex flex-row items-center justify-between ml-10">
          <p className=" left-[-417px] top-[-337px] text-[46px] font-semibold text-left capitalize text-[#0d062d]">
            Mobile App
          </p>
          <div className="flex flex-row h-full ml-5 w-16 justify-between">
            <img src="edit.svg" />
            <img src="link.svg" />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex space-x-1.5 items-center justify-end w-16 h-1/2">
            <button className="w-4 h-4">
              <img className="flex-1 h-full rounded-lg" src="add.svg" />
            </button>
            <p className="text-base font-medium text-[#5030e5] capitalize">
              Invite
            </p>
          </div>
          <div className="relative" style={{ width: 158, height: 38 }}>
            <img
              className="w-9 h-9 absolute right-28 z-0 top-0 border rounded-full border-white"
              src="images/Ellipse-1.png"
            />
            <img
              className="w-9 h-9 absolute right-20 z-1 top-0 border rounded-full border-white"
              src="images/Ellipse-2.png"
            />
            <img
              className="w-9 h-9 absolute right-14 z-20 top-0 border rounded-full border-white"
              src="images/Ellipse-4.png"
            />
            <img
              className="w-9 h-9 absolute right-7 z-30 top-0 border rounded-full border-white"
              src="images/Ellipse-3.png"
            />
            <div className="w-9 z-40 h-9 flex flex-row justify-center items-center  absolute right-0 top-0 bg-[#F4D7DA] border rounded-full border-white">
              <p className="  text-base font-medium text-[#d25b68] capitalize  ">
                +2
              </p>
            </div>
          </div>
        </div>
      </div>
      <FilterSection />
    </div>
  );
};

export default ContentHeader;
