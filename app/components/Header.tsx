const Header = () => {
  return (
    <div className="fixed z-30 flex justify-between items-center w-5/6 mr-0 pt-5 pl-10 pr-10 h-16 top-0 right-0">
      <div
        className="flex  justify-start pl-4 pr-56 pt-2.5 pb-3 bg-gray-100 border rounded-md  "
        style={{ width: 417, height: 44 }}
      >
        <div className="flex space-x-4  justify-end h-full">
          <div className="w-5 h-full">
            <img className="flex-1 h-full rounded-lg" src="search-normal.svg" />
          </div>
        </div>
        <input
          type="text"
          placeholder=" Search for anything..."
          className="bg-gray-100  text-sm text-gray-500 ml-2"
        />
      </div>
      <div className="flex ">
        <div className="inline-flex space-x-6 items-center justify-end w-28 h-6">
          <div className="w-1/5 h-full">
            <img className="flex-1 h-full rounded-lg" src="calendar-2.svg" />
          </div>
          <div className="w-1/5 h-full">
            <img
              className="flex-1 h-full rounded-lg"
              src="message-question.svg"
            />
          </div>
          <div className="w-1/5 h-full">
            <img className="flex-1 h-full rounded-lg" src="notification.svg" />
          </div>
        </div>
        <div className="inline-flex  items-center justify-end w-52 h-10 ">
          <div className="inline-flex flex-col space-y-0.5 items-end justify-end w-38 h-full">
            <p className="text-base text-right text-gray-900">Anima Agrawal</p>
            <p className="text-sm text-right text-gray-500">U.P, India</p>
          </div>
          <img className="w-12 h-16" src="https://via.placeholder.com/47x71" />
          <div className="w-4 h-4">
            <img className="flex-1 h-full rounded-lg" src="arrow-down.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
