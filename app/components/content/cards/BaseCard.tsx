'use client';

import { ICard } from '@/app/types';
import { useCallback, useMemo } from 'react';

const Priority = ({ priority }: { priority: 'Low' | 'High' | 'Completed' }) => {
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
    <div className="flex flex-row justify-between mt-5 ml-5 mr-5  items-center">
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
const TextContent = ({ text }: { text: string | undefined }) => {
  return (
    <p className="w-[274px]  ml-5 mr-5  text-xs text-left text-[#787486]">
      {text}
    </p>
  );
};
const ImageCompoent = ({ images }: { images: string[] | undefined }) => {
  return (
    <div className="   mt-2 flex items-center  flex-wrap  justify-evenly">
      {images?.map((image, index) => (
        <img src={image} key={index} />
      ))}
    </div>
  );
};
const BaseCard = ({ card }: { card: ICard }) => {
  return (
    <div className="relative ml-5 mr-5 w-[300px] hover:cursor-pointer  rounded-2xl bg-white ">
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
          {card.people.splice(0, 3).map((image, index) => {
            const left = `${16 * index}px`;
            const zIndex = `${10 * (3 - index)}`;

            return (
              <img
                key={index}
                style={{ left: left, zIndex: zIndex }}
                className="absolute  w-6 h-6 border rounded-full border-white"
                src={image}
              />
            );
          })}
        </div>

        <div className="flex flex-row mt-1 relative mr-5 mb-5">
          <div className="flex flex-row mr-5">
            <img className="mr-2" src="svgs/todo-list/comment.svg" />
            <p className="text-[9px] lg:text-xs   font-medium text-left text-[#787486]">
              {card.comments.length} comments
            </p>
          </div>
          <div className="flex flex-row">
            <img className="mr-2" src="svgs/todo-list/file.svg" />
            <p className=" text-[9px] lg:text-xs  font-medium text-left text-[#787486]">
              {card.files.length} files
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseCard;
