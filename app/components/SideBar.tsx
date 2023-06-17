export const DotSVG = ({ color }: { color: string }) => {
  return (
    <svg
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle cx={4} cy={4} r={4} fill={color} />
    </svg>
  );
};
const Sidebar = () => {
  return (
    <div
      className="w-1/6 h-full flex  bg-white shadow-xl  
    flex-col border-r-2 "
    >
      <div className="flex flex-row p-5 h-16  w-full">
        <div className="flex justify-between w-full h-6 items-center ">
          <div className="flex justify-center ml-0">
            <img className="h-full mr-5" src="sidebar-1.svg" />

            <p className="text-xl font-semibold text-gray-900">Project M.</p>
          </div>
          <img className="h-full mr-0" src="sidebar-2.svg" />
        </div>
      </div>
      <div className="flex flex-col  h-1/3 w-full">
        <div className="flex flex-row m-5 mt-0 mb-0 hover:cursor-pointer">
          <div>
            <img src="category.svg" />
          </div>
          <p className="ml-5 text-base font-medium text-gray-500">Home</p>
        </div>
        <div className="flex flex-row m-5 mb-0 hover:cursor-pointer">
          <div>
            <img src="message.svg" />
          </div>
          <p className="ml-5 text-base font-medium text-gray-500">Messages</p>
        </div>
        <div className="flex flex-row m-5 mb-0 hover:cursor-pointer">
          <div>
            <img src="task-square.svg" />
          </div>
          <p className="ml-5 text-base font-medium text-gray-500">Tasks</p>
        </div>

        <div className="flex flex-row m-5 mb-0 hover:cursor-pointer">
          <div>
            <img src="profile-2user.svg" />
          </div>
          <p className="ml-5 text-base font-medium text-gray-500">Members</p>
        </div>
        <div className="flex flex-row m-5 mb-0 hover:cursor-pointer">
          <div>
            <img src="setting-2.svg" />
          </div>
          <p className="ml-5 text-base font-medium text-gray-500">Settings</p>
        </div>
      </div>
      <div className="h-px ml-5 mr-5 bg-gray-300" />
      <div className="flex flex-col items-center h-1/3 w-full">
        <div className="h-4 w-full flex flex-row p-5 pt-2 justify-between ">
          <p className="text-xs font-bold text-gray-500 uppercase">
            my projects
          </p>
          <div>
            <img src="add-square.svg" />
          </div>
        </div>
        <div className=" w-11/12 mt-2.5   h-[39px] pl-3 pr-3 flex flex-row justify-between rounded-md bg-[#5030e5]/[0.08]">
          <div className="flex flex-row items-center ">
            <DotSVG color="#7AC555" />
            <p className="text-base font-semibold text-left ml-2 text-[#0d062d]">
              Mobile App
            </p>
          </div>
          <p className="text-base font-extrabold self-center mb-2 text-center text-[#0d062d]">
            ...
          </p>
        </div>
        <div className=" w-11/12 mt-2.5   h-[39px] pl-3 pr-3 flex flex-row items-center ">
          <DotSVG color="#FFA500" />
          <p className="text-base font-medium text-gray-500 ml-2">
            Website Redesign
          </p>
        </div>
        <div className=" w-11/12 mt-2.5   h-[39px] pl-3 pr-3 flex flex-row items-center ">
          <DotSVG color="#E4CCFD" />
          <p className="text-base font-medium text-gray-500 ml-2">
            Design System
          </p>
        </div>
        <div className=" w-11/12 mt-2.5   h-[39px] pl-3 pr-3 flex flex-row items-center ">
          <DotSVG color="#76A5EA" />
          <p className="text-base font-medium text-gray-500 ml-2">Wireframes</p>
        </div>
      </div>
      <div className="flex flex-row  h-1/4 w-full justify-center">
        <img src="thought-time.svg" />
        <img src="bulb.svg" className="absolute m-3" />
        <div className="absolute flex flex-col m-10 items-center justify-center  ">
          <p className=" text-xs font-medium text-left text-black">
            Thoughts Time
          </p>
          <p className="w-[166px] text-xs text-center text-[#787486]">
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
          </p>
          <div className="w-[140px] flex flex-row mt-2 items-center justify-center  h-10 rounded bg-white">
            <p className="text-xs font-medium text-left text-black">
              Write a message
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
