import { ICard } from '@/app/types';
import { DotSVG } from '../SideBar';
import { Seprarator } from '../jsx-svgs/Seprator';

type Props = {
  children: React.ReactNode;
  cards?: Array<ICard>;
};

export const ToDoCardHolder: React.FC<Props> = ({ children, cards }) => {
  return (
    <div className="w-[354px] h-full   rounded-tr-2xl rounded-tl-2xl bg-neutral-100">
      <div className="flex flex-row justify-between m-5">
        <div className="flex flex-row items-center justify-between w-24">
          <DotSVG color="#5030E5" />
          <p className="text-base font-medium text-left text-[#0d062d]">
            To Do
          </p>
          <div className="w-5 h-5 rounded-[10px] bg-[#e0e0e0] flex flex-row items-center justify-center">
            <p className="text-xs font-medium text-left text-[#625f6d]">
              {cards?.length}
            </p>
          </div>
        </div>
        <img src="svgs/todo-list/add.svg" />
      </div>
      <div className="m-5">
        <Seprarator color="#5030E5" />
      </div>
      <div
        suppressHydrationWarning
        className="max-h-[355px] overflow-hidden hover:overflow-y-scroll flex flex-col justify-between items-center "
      >
        {children}
      </div>
    </div>
  );
};
export const OnProgressCardHolder: React.FC<Props> = ({ children, cards }) => {
  return (
    <div className="w-[354px] h-full   rounded-tr-2xl rounded-tl-2xl bg-neutral-100">
      <div className="flex flex-row justify-between ml-5 mt-5">
        <div className="flex flex-row items-center justify-between w-36">
          <DotSVG color="#FFA500" />
          <p className="text-base font-medium text-left text-[#0d062d]">
            On Progress
          </p>
          <div className="w-5 h-5 rounded-[10px] bg-[#e0e0e0] flex flex-row items-center justify-center">
            <p className="text-xs font-medium text-left text-[#625f6d]">
              {cards?.length}
            </p>
          </div>
        </div>
      </div>
      <div className="m-5">
        <Seprarator color="#FFA500" />
      </div>
      <div
        suppressHydrationWarning
        className="h-[355px] overflow-hidden hover:overflow-y-scroll flex flex-col justify-between items-center  "
      >
        {children}
      </div>
    </div>
  );
};
export const DoneCardHolder: React.FC<Props> = ({ children, cards }) => {
  return (
    <div className="w-[354px] h-full   rounded-tr-2xl rounded-tl-2xl bg-neutral-100">
      <div className="flex flex-row justify-between m-5">
        <div className="flex flex-row items-center justify-between w-24">
          <DotSVG color="#76A5EA" />
          <p className="text-base font-medium text-left text-[#0d062d]">Done</p>
          <div className="w-5 h-5 rounded-[10px] bg-[#e0e0e0] flex flex-row items-center justify-center">
            <p className="text-xs font-medium text-left text-[#625f6d]">
              {' '}
              {cards?.length}
            </p>
          </div>
        </div>
      </div>
      <div className="m-5">
        <Seprarator color="#76A5EA" />
      </div>
      <div
        suppressHydrationWarning
        className="h-[355px] overflow-hidden hover:overflow-y-scroll flex flex-col justify-between items-center "
      >
        {children}
      </div>
    </div>
  );
};
