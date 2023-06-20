'use client';

import { CardHolder } from './Holders';
import BaseCard, { CustomDragLayer } from './cards/BaseCard';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import instance from '../../hooks/ManageCards';
import MainContext from '../context/MainContext';
import { CARDS } from '@/app/todo';
import useManageCards from '../../hooks/ManageCards';
import { memo, useContext } from 'react';

const MainContent = memo(() => {
  const { getCardsByType } = useContext(MainContext);
  const todoCards = getCardsByType('todo');
  const progressCards = getCardsByType('progress');
  const doneCard = getCardsByType('done');
  return (
    <DndProvider backend={HTML5Backend}>
      <div className=" relative h-full  sm:space-x-5  pt-5 overflow-x-auto    sm:overflow-y-hidden overflow-y-auto space-y-9  sm:space-y-0 flex sm:flex-row flex-col   absoluteshadow-xl ">
        <CardHolder
          numberOfItems={todoCards.length}
          type="To Do"
          color="#5030E5"
          renderCard={todoCards.map((card, index) => (
            <BaseCard key={card.id} card={card} />
          ))}
        />
        <CardHolder
          numberOfItems={progressCards.length}
          type="On Progress"
          color="#76A5EA"
          renderCard={progressCards.map((card, index) => (
            <BaseCard key={card.id} card={card} />
          ))}
        />
        <CardHolder
          numberOfItems={doneCard.length}
          type="Done"
          color="#FFA500"
          renderCard={doneCard.map((card, index) => (
            <BaseCard key={card.id} card={card} />
          ))}
        />
      </div>
    </DndProvider>
  );
});

export default MainContent;
