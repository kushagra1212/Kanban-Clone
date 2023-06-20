'use client';
import { ICard } from '@/app/types';
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  useDrag,
  useDragLayer,
  DragPreviewImage,
  useDrop,
  DropTargetMonitor,
  XYCoord,
} from 'react-dnd';
import { ItemTypes } from '../Holders';
import MainContext from '../../context/MainContext';
const Priority = ({
  priority,
  ...props
}: {
  priority: 'Low' | 'High' | 'Completed';
  [key: string]: any;
}) => {
  let bgColor = '';
  let textColor = '';

  switch (priority) {
    case 'Low':
      bgColor = 'bg-[#dfa874]/20';
      textColor = 'text-[#d58d49]';
      break;
    case 'High':
      bgColor = 'bg-[#d8727d]/10';
      textColor = 'text-[#d8727d]';
      break;
    case 'Completed':
      bgColor = 'bg-[#83c29d]/20';
      textColor = 'text-[#68b266]';
      break;
  }

  return (
    <div
      {...props}
      className="flex flex-row justify-between mt-5 ml-5 mr-5  items-center"
    >
      <div
        className={`p-1 flex rounded  flex-row ${bgColor} items-center justify-center`}
      >
        <p className={`text-xs font-medium text-left ${textColor}`}>
          {priority}
        </p>
      </div>
      <p className="text-base  font-bold text-left text-[#0d062d]">...</p>
    </div>
  );
};
const TextContent = ({
  text,
  ...styles
}: {
  text: string | undefined;
  [key: string]: any;
}) => {
  return (
    <p
      {...styles}
      className="w-[274px]  ml-5 mr-5  text-xs text-left text-[#787486]"
    >
      {text}
    </p>
  );
};
const ImageCompoent = ({
  images,
  ...styles
}: {
  images: string[] | undefined;
  [key: string]: any;
}) => {
  return (
    <div
      {...styles}
      className="   mt-2 flex items-center  flex-wrap  justify-evenly"
    >
      {images?.map((image, index) => (
        <img src={'/' + image} key={index} />
      ))}
    </div>
  );
};

export const CustomDragLayer = () => {
  const { getCardById } = useContext(MainContext);
  const { dragging, item, currentOffset } = useDragLayer((monitor) => {
    return {
      dragging: monitor.isDragging(),
      item: monitor.getItem(),
      currentOffset: monitor.getSourceClientOffset(),
    };
  });
  if (!dragging || !currentOffset || !item) return null;
  const card = getCardById(item.id);
  if (!card) return null;
  return (
    <div
      style={{
        left: currentOffset.x,
        top: currentOffset.y,
        zIndex: 100,
        position: 'fixed',
        pointerEvents: 'none',
        boxShadow: '0.5px 0.5px 10px 1px rgba(220,220,220,0.5)',
      }}
      className="relative ml-0 p-1 mr-0 w-[300px] hover:cursor-pointer rounded-2xl bg-white "
    >
      <Priority priority={card.priority} />
      <p className="ml-5 mr-5 mt-2 text-lg  font-semibold text-left text-[#0d062d]">
        {card.title}
      </p>
      {card.content.isText ? (
        <TextContent text={card.content.text} />
      ) : (
        <ImageCompoent images={card.content.images} />
      )}
      <div className="flex flex-row mt-7 justify-between">
        <div className=" relative flex flex-row  w-16 ml-5 ">
          {card.people.map((image, index) => {
            const left = `${16 * index}px`;
            const zIndex = `${10 * (3 - index)}`;

            return (
              <img
                key={index}
                style={{ left: left, zIndex: zIndex }}
                className="absolute  w-6 h-6 border rounded-full border-white"
                src={'/' + image}
              />
            );
          })}
        </div>

        <div className="flex flex-row mt-1 relative mr-5 mb-5">
          <div className="flex flex-row mr-5">
            <img className="mr-2" src="/svgs/todo-list/comment.svg" />
            <p className="text-[9px] lg:text-xs   font-medium text-left text-[#787486]">
              {card.comments.length} comments
            </p>
          </div>
          <div className="flex flex-row">
            <img className="mr-2" src="/svgs/todo-list/file.svg" />
            <p className=" text-[9px] lg:text-xs  font-medium text-left text-[#787486]">
              {card.files.length} files
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BaseCard = ({ card }: { card: ICard }) => {
  const slicedPeople = card.people.slice(0, 3);

  const divRef = useRef<HTMLDivElement | null>(null);
  const heightDivRef = useRef<HTMLDivElement | null>(null);
  const [heightDiv, setHeightDiv] = useState<number>(0);

  const [isAboveHalf, setIsaboveHalf] = useState<boolean | null>(null);
  const { moveCard } = useContext(MainContext);
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: () => ({
      id: card.id,
      heightOfDiv: heightDivRef.current ? heightDivRef.current.offsetHeight : 0,
    }),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (
      item: { id: number; heightOfDiv: number },
      monitor: DropTargetMonitor<unknown, unknown>
    ) => {
      const clientOffset: XYCoord | null = monitor.getClientOffset();

      if (divRef.current && clientOffset) {
        const { top, height } = divRef.current.getBoundingClientRect();

        const mouseY = clientOffset.y - top;
        const isAbove: boolean = mouseY < height / 2;

        moveCard(item.id, card.id, isAbove);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    hover(item, monitor) {
      if (item.id !== card.id) {
        const clientOffset: XYCoord | null = monitor.getClientOffset();

        if (divRef.current && clientOffset) {
          const { top, height } = divRef.current.getBoundingClientRect();
          const mouseY = clientOffset.y - top;
          const isAbove: boolean = mouseY < height / 2;

          setHeightDiv(item.heightOfDiv);
          setIsaboveHalf(isAbove);
        }
      }
    },
  }));
  if (!isOver && isAboveHalf !== null) {
    setIsaboveHalf(null);
  }
  return (
    <div ref={divRef}>
      <div
        ref={drop}
        style={{
          paddingTop: isAboveHalf === true ? heightDiv : 0,
          paddingBottom: isAboveHalf === false ? heightDiv : 0,
        }}
      >
        <div
          ref={heightDivRef}
          className="ml-5 mr-5    w-[300px] hover:cursor-pointer rounded-2xl bg-white "
        >
          <div
            ref={drag}
            style={{
              backgroundColor: isDragging ? 'rgb(80 48 229 / 0.06)' : 'white',
              border: isDragging ? '1px solid rgb(80 48 229 / 0.59)' : 'none',
              borderRadius: isDragging ? '10px' : '16px',
              borderStyle: isDragging ? 'dashed' : 'none',
            }}
            className="relative pt-2   w-[300px] hover:cursor-pointer rounded-2xl bg-white "
          >
            <CustomDragLayer />
            <DragPreviewImage
              connect={preview}
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png"
            />
            <Priority
              style={{ opacity: isDragging ? 0 : 1 }}
              priority={card.priority}
            />
            <p
              style={{ opacity: isDragging ? 0 : 1 }}
              className="ml-5 mr-5 mt-2 text-lg  font-semibold text-left text-[#0d062d]"
            >
              {card.title}
            </p>
            {card.content.isText ? (
              <TextContent
                style={{ opacity: isDragging ? 0 : 1 }}
                text={card.content.text}
              />
            ) : (
              <ImageCompoent
                style={{ opacity: isDragging ? 0 : 1 }}
                images={card.content.images}
              />
            )}
            <div
              style={{ opacity: isDragging ? 0 : 1 }}
              className="flex flex-row mt-7 justify-between"
            >
              <div className=" relative flex flex-row  w-16 ml-5 ">
                {slicedPeople.map((image, index) => {
                  const left = `${16 * index}px`;
                  const zIndex = `${10 * (3 - index)}`;

                  return (
                    <img
                      key={index}
                      style={{ left: left, zIndex: zIndex }}
                      className="absolute  w-6 h-6 border rounded-full border-white"
                      src={'/' + image}
                    />
                  );
                })}
              </div>

              <div
                style={{ opacity: isDragging ? 0 : 1 }}
                className="flex flex-row mt-1 relative mr-5 mb-5"
              >
                <div className="flex flex-row mr-5">
                  <img className="mr-2" src="/svgs/todo-list/comment.svg" />
                  <p className="text-[9px] lg:text-xs   font-medium text-left text-[#787486]">
                    {card.comments.length} comments
                  </p>
                </div>
                <div className="flex flex-row">
                  <img className="mr-2" src="/svgs/todo-list/file.svg" />
                  <p className=" text-[9px] lg:text-xs  font-medium text-left text-[#787486]">
                    {card.files.length} files
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseCard;
