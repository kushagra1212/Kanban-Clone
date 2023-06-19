'use client';
import { CARDS } from '@/app/todo';
import ContentHeader from './ContentHeader';
import { CardHolder } from './Holders';
import { getCards } from '../utils';
import BaseCard, { CustomDragLayer } from './cards/BaseCard';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const MainContent = () => {
  const todoCards = getCards('todo');
  const progressCards = getCards('progress');
  const doneCard = getCards('done');

  return (
    <DndProvider backend={HTML5Backend}>
      <div className=" relative h-full  sm:space-x-5  pt-5 overflow-x-auto    sm:overflow-y-hidden overflow-y-auto space-y-9  sm:space-y-0 flex sm:flex-row flex-col   absoluteshadow-xl ">
        <CardHolder
          numberOfItems={todoCards.length}
          type="To Do"
          color="#5030E5"
          renderCard={todoCards.map((card, index) => (
            <BaseCard key={index} card={card} />
          ))}
        />
        <CardHolder
          numberOfItems={progressCards.length}
          type="On Progress"
          color="#76A5EA"
          renderCard={progressCards.map((card, index) => (
            <BaseCard key={index} card={card} />
          ))}
        />
        <CardHolder
          numberOfItems={doneCard.length}
          type="Done"
          color="#FFA500"
          renderCard={doneCard.map((card, index) => (
            <BaseCard key={index} card={card} />
          ))}
        />
      </div>
    </DndProvider>
  );
};

export default MainContent;
