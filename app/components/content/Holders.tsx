import { DotSVG } from '../SideBar';

import { useDrop, useDragLayer } from 'react-dnd';
type Props = {
  renderCard: React.ReactNode;
  type: 'To Do' | 'On Progress' | 'Done';
  numberOfItems: number;
  color: '#5030E5' | '#76A5EA' | '#FFA500';
};
export const ItemTypes = {
  CARD: 'card',
};
export const CardHolder: React.FC<Props> = ({
  renderCard,
  numberOfItems,
  type,
  color,
}) => {
  return (
    <div className=" rounded-tr-2xl sm:h-full   rounded-tl-2xl bg-neutral-100 w-full ">
      <div className="flex flex-row justify-between ml-5 mt-5">
        <div className="flex flex-row items-center justify-between space-x-5">
          <DotSVG color={color} />
          <p className="text-base font-medium text-left text-[#0d062d]">
            {type}
          </p>
          <div className="w-5 h-5 rounded-[10px] bg-[#e0e0e0] flex flex-row items-center justify-center">
            <p className="text-xs font-medium text-left text-[#625f6d]">
              {numberOfItems}
            </p>
          </div>
        </div>
        {type === 'To Do' ? (
          <img className="mr-5" src="/svgs/todo-list/add.svg" />
        ) : null}
      </div>
      <div className={`m-5 h-1 bg-[${color}]`}></div>
      <div className="overflow-scroll space-y-5 h-full sm:pb-20 flex sm:pb:20 flex-col  items-center ">
        {renderCard}
      </div>
    </div>
  );
};
