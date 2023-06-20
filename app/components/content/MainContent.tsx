'use client';

import { CardHolder } from './Holders';
import BaseCard, { CustomDragLayer } from './cards/BaseCard';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import instance from '../../hooks/ManageCards';
import MainContext from '../context/MainContext';
import { CARDS } from '@/app/todo';
import useManageCards from '../../hooks/ManageCards';
import { memo, useContext, useEffect, useState } from 'react';
import { ICard } from '@/app/types';

const MainContent = memo(() => {
  const { cards, moveCard, getCardsByType, getCardById, moveCardToType } =
    useManageCards({
      CARDS,
    } as { CARDS: Array<ICard> });
  return (
    <MainContext.Provider
      value={{
        cards,
        moveCard,
        getCardsByType,
        getCardById,
        moveCardToType,
      }}
    >
      <DndProvider backend={HTML5Backend}>
        <div className=" relative h-full  sm:space-x-5  pt-5 overflow-x-auto    sm:overflow-y-hidden overflow-y-auto space-y-9  sm:space-y-0 flex sm:flex-row flex-col   absoluteshadow-xl ">
          <CardHolder
            numberOfItems={getCardsByType('todo').length}
            type="To Do"
            realType="todo"
            color="#5030E5"
            renderCard={getCardsByType('todo').map((card, index) => (
              <BaseCard key={card.id} card={card} />
            ))}
          />
          <CardHolder
            numberOfItems={getCardsByType('progress').length}
            type="On Progress"
            realType="progress"
            color="#76A5EA"
            renderCard={getCardsByType('progress').map((card, index) => (
              <BaseCard key={card.id} card={card} />
            ))}
          />
          <CardHolder
            numberOfItems={getCardsByType('done').length}
            type="Done"
            color="#FFA500"
            realType="done"
            renderCard={getCardsByType('done').map((card, index) => (
              <BaseCard key={card.id} card={card} />
            ))}
          />
        </div>
      </DndProvider>
    </MainContext.Provider>
  );
});

export default MainContent;
