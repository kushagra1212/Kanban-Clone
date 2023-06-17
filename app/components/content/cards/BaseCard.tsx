import { ICard } from '@/app/types';

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
        className={`w-[39px] h-[23px] flex rounded  flex-row ${bgColor} items-center justify-center`}
      >
        <p className={`text-xs font-medium text-left ${textColor}`}>High</p>
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
  console.log(images);
  return (
    <div className="w-[274px]  ml-5 mr-5 flex flex-wrap">
      {images?.map((image, index) => (
        <img src={image} key={index} className="mt-2" />
      ))}
    </div>
  );
};
const BaseCard = ({ card }: { card: ICard }) => {
  return (
    <div className="w-[314px] h-min rounded-2xl bg-white mb-5">
      <Priority priority="High" />
      <p className="ml-5 mr-5 mt-2 text-lg font-semibold text-left text-[#0d062d]">
        {card.title}
      </p>
      {card.content.isText ? (
        <TextContent text={card.content.text} />
      ) : (
        <ImageCompoent images={card.content.images} />
      )}
      <div className="flex flex-row mt-7 justify-between">
        <div className="flex flex-row relative  w-20 ml-5 ">
          {card.people.splice(0, 3).map((image, index) => {
            return (
              <img
                key={index}
                className={`absolute z-${10 * (3 - index)} left-${
                  5 * index
                } w-6 h-6 border rounded-full border-white`}
                src={image}
              />
            );
          })}
        </div>
        <div className="flex flex-row mt-1  mr-5 mb-5">
          <div className="flex flex-row mr-5">
            <img className="mr-2" src="svgs/todo-list/comment.svg" />
            <p className="text-xs font-medium text-left text-[#787486]">
              {card.comments.length} comments
            </p>
          </div>
          <div className="flex flex-row">
            <img className="mr-2" src="svgs/todo-list/file.svg" />
            <p className="text-xs  font-medium text-left text-[#787486]">
              {card.files.length} files
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseCard;
