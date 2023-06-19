export const DotSVG = ({
  color,
  ...rest
}: {
  color: string;
  [key: string]: any;
}) => {
  return (
    <svg
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      {...rest}
    >
      <circle cx={4} cy={4} r={4} fill={color} />
    </svg>
  );
};
const Sidebar = () => {
  return (
    <div
      className=" md:fixed w-1/5 md:w-1/5  bg-white   h-full
    flex-col border-r-2 md:border-r-1 overflow-y-scroll "
    >
      <div className="flex flex-row p-5 h-16 md:p-0 md:pt-2 md:pl-0.5 md:pr-0.5  w-full">
        <div className="flex justify-between w-full h-6  items-center ">
          <div className="flex justify-center ml-0">
            <img
              className="h-full mr-5 md:mr-2 md:h-5 md:w-5"
              src="sidebar-1.svg"
            />

            <p className="text-xl lg:text-small  font-semibold md:text-xs  text-gray-900">
              Project M.
            </p>
          </div>
          <img className="h-full mr-0 md:w-5 md:h-5" src="sidebar-2.svg" />
        </div>
      </div>
      <div className="flex flex-col  h-1/3 w-full">
        <div className="flex flex-row md:items-center m-5 mt-10 lg:mt-0 md:ml-2 md:mr-2 mb-0 md:mt-1 hover:cursor-pointer">
          <div>
            <img className="lg:w-5 lg:h-5 md:w-4 md:h-4" src="category.svg" />
          </div>
          <p className="ml-5 md:ml-2 md:text-xs text-base font-medium  lg:text-sm text-gray-500">
            Home
          </p>
        </div>
        <div className="flex flex-row m-5 mb-0 hover:cursor-pointer md:ml-2 md:mr-2">
          <div>
            <img className="lg:w-5 lg:h-5 md:w-4 md:h-4" src="message.svg" />
          </div>
          <p className="ml-5 text-base font-medium md:ml-2 md:text-xs lg:text-sm text-gray-500">
            Messages
          </p>
        </div>
        <div className="flex flex-row m-5 mb-0 hover:cursor-pointer md:ml-2 md:mr-2">
          <div>
            <img
              className="lg:w-5 lg:h-5 md:w-4 md:h-4"
              src="task-square.svg"
            />
          </div>
          <p className="ml-5 text-base md:text-xs  font-medium md:ml-2 lg:text-sm text-gray-500">
            Tasks
          </p>
        </div>

        <div className="flex flex-row m-5 mb-0 hover:cursor-pointer md:ml-2 md:mr-2">
          <div>
            <img
              className="lg:w-5 lg:h-5 md:w-4  md:h-4"
              src="profile-2user.svg"
            />
          </div>
          <p className="ml-5 text-base font-medium md:text-xs md:ml-2 lg:text-sm text-gray-500">
            Members
          </p>
        </div>
        <div className="flex flex-row m-5 mb-0 hover:cursor-pointer md:ml-2 md:mr-2">
          <div>
            <img className="lg:w-5 lg:h-5 md:w-4 md:h-4" src="setting-2.svg" />
          </div>
          <p className="ml-5 text-base font-medium md:ml-2 md:text-xs lg:text-sm text-gray-500">
            Settings
          </p>
        </div>
      </div>
      <div className="h-px ml-5 mr-5 bg-[#DBDBDB] lg:-mt-3 lg:mb-3 mb-5 md:mb-3 md:-mt-5" />
      <div className="flex flex-col items-center h-1/3 w-full lg:space-y-0 lg:mb-2">
        <div className="h-4 w-full md:p-0 md:pl-2 md:pr-2 flex flex-row p-5 pt-2 justify-between lg:mb-2">
          <p className="text-xs  font-bold text-gray-500 uppercase ">
            my projects
          </p>
          <div>
            <img className="lg:w-3 lg:h-3" src="add-square.svg" />
          </div>
        </div>
        <div className=" w-11/12 mt-2.5 md:mt-1   h-[39px] pl-3 pr-3 flex flex-row justify-between rounded-md bg-[#5030e5]/[0.08] ">
          <div className="flex flex-row items-center ">
            <DotSVG className="md:h-1 md:w-1" color="#7AC555" />
            <p className="text-base md:text-xs font-semibold text-left ml-2 text-[#0d062d] lg:text-sm">
              Mobile App
            </p>
          </div>
          <p className="text-base font-extrabold self-center mb-2 text-center text-[#0d062d]">
            ...
          </p>
        </div>
        <div className=" w-11/12 mt-2.5 md:mt-1 md:text-xs h-[39px] pl-3 pr-3 md:pr-1 flex flex-row items-center ">
          <DotSVG color="#FFA500" className="md:h-1 md:w-1" />
          <p className="text-base font-medium md:text-xs text-gray-500 ml-2 lg:text-sm">
            Website Redesign
          </p>
        </div>
        <div className=" w-11/12 mt-2.5 md:mt-1  h-[39px] pl-3 pr-3 flex flex-row items-center ">
          <DotSVG color="#E4CCFD" className="md:h-1 md:w-1" />
          <p className="text-base font-medium md:text-xs text-gray-500 ml-2 lg:text-sm">
            Design System
          </p>
        </div>
        <div className=" w-11/12 mt-2.5 md:mt-1  h-[39px] pl-3 pr-3 flex flex-row items-center ">
          <DotSVG color="#76A5EA" className="md:h-1 md:w-1" />
          <p className="text-base font-medium md:text-xs text-gray-500 ml-2 lg:text-sm">
            Wireframes
          </p>
        </div>
      </div>
      <div className="flex flex-row w-full relative lg:-mt-10  mb-5 justify-center">
        <img
          className="lg:w-44 lg:h-44 md:w-32 md:h-32"
          src="thought-time.svg"
        />
        <img src="bulb.svg" className="absolute m-3 md:m-2" />
        <div className="absolute flex flex-col m-10 mt-14 lg:mt-5  items-center justify-center  ">
          <p className=" text-xs font-medium text-left md:-mt-6  text-black lg:mt-5">
            Thoughts Time
          </p>
          <p className="w-[166px] text-xs text-center md:text-[8px]/[9px] md:w-28 mt-2 md:mt-1 text-[#787486]">
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
          </p>
          <div className="w-[163px] flex flex-row mt-5 lg:mt-2 md:mt-1 md:w-full items-center justify-center  h-10 rounded lg:h-8 md:h-6 bg-white">
            <p className="text-xs font-medium text-left md:text-[8px] text-black">
              Write a message
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
