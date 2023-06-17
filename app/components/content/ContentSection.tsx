import { CARDS } from '@/app/todo';
import ContentHeader from './ContentHeader';
import {
  DoneCardHolder,
  OnProgressCardHolder,
  ToDoCardHolder,
} from './Holders';
import { getCards } from '../utils';
import BaseCard from './cards/BaseCard';

const MainContent = () => {
  return (
    <div className="relative bg-white flex flex-wrap justify-between  absoluteshadow-xl ml-10 mr-16 mt-5 overflow-y-hidden hover:cursor-pointer">
      <ToDoCardHolder cards={getCards('todo')}>
        {getCards('todo').map((card, index) => (
          <BaseCard key={index} card={card} />
        ))}
      </ToDoCardHolder>
      <OnProgressCardHolder cards={getCards('progress')}>
        {getCards('progress').map((card, index) => (
          <BaseCard key={index} card={card} />
        ))}
      </OnProgressCardHolder>
      <DoneCardHolder cards={getCards('done')}>
        {getCards('done').map((card, index) => (
          <BaseCard key={index} card={card} />
        ))}
      </DoneCardHolder>
    </div>
  );
};

export const ConentSection = () => {
  return (
    <div className="absolute top-16 w-5/6 right-0">
      <ContentHeader />
      <MainContent />
    </div>
  );
};
