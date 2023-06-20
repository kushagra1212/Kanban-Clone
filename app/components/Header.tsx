import { memo } from 'react';

const Header = memo(() => {
  return (
    <div className=" sm:flex sm:h-20 sm:pt-5 sm:pb-5 sm:w-full flex-col sm:flex-row  sm:relative sm:justify-between sm:items-center mt-5 sm:mt-0 ">
      <div className="flex  justify-start pl-4  pt-2.5 pb-3 bg-gray-100 border rounded-md sm:w-[417px] sm:h-[44px] ">
        <div className="flex space-x-4  justify-end h-full">
          <div className="w-5 h-full">
            <img className="flex-1 h-full rounded-lg" src="search-normal.svg" />
          </div>
        </div>
        <input
          type="text"
          placeholder=" Search for anything..."
          className="bg-gray-100  text-sm text-gray-500 ml-2 placeholder:text-[#787486]"
        />
      </div>
      <div className="flex flex-row items-center space-x-10 md:space-x-0">
        <div className="inline-flex space-x-6 md:space-x-3 items-center justify-center w-28 h-6">
          <div className="w-1/5 h-full">
            <img className=" rounded-lg" src="calendar-2.svg" />
          </div>
          <div className="w-1/5 h-full">
            <img className="l rounded-lg" src="message-question.svg" />
          </div>
          <div className="w-1/5 h-full">
            <img className=" rounded-lg" src="notification.svg" />
          </div>
        </div>
        <div className="inline-flex sm-mt-0 mt-5  space-x-3 items-center justify-end w-52 h-10 ">
          <div className="inline-flex flex-col sm:space-y-0.5 space-y-0 items-end justify-end sm:w-38 h-full">
            <p className="sm:text-base text-xs  text-right text-gray-900">
              Anima Agrawal
            </p>
            <p className="text-sm text-right text-gray-500">U.P, India</p>
          </div>
          <img
            height={40}
            width={40}
            className="rounded-[100px] object-cover"
            src="images/profile.png"
          />
          <div className="w-4 h-4">
            <img className="flex-1 h-full rounded-lg" src="arrow-down.svg" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Header;
