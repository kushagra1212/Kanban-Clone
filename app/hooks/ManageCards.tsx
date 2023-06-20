'use client';

import { ICard } from '@/app/types';
import { useEffect, useRef, useState } from 'react';

type Props = {
  CARDS: Array<ICard>;
};
export type Cards = Array<ICard>;
export type MoveCard = (fromId: number, toId: number) => void;
export type GetCardsByType = (type: string) => Array<ICard>;
export type GetCardById = (id: number) => ICard | undefined;
const useManageCards = ({ CARDS }: Props) => {
  const [cards, setCards] = useState<Array<ICard>>([]);

  useEffect(() => {
    setCards(CARDS);
    console.log('Cards changed');
  }, []);

  const moveCard: MoveCard = (fromId: number, toId: number): void => {
    let travellerIndex = cards.findIndex((card) => card.id === fromId);
    let destinationIndex = cards.findIndex((card) => card.id === toId);
    let traveller = JSON.parse(JSON.stringify(cards[travellerIndex]));
    traveller.type = JSON.parse(JSON.stringify(cards[destinationIndex].type));
    let newCards = [];
    let done = false;
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === cards[destinationIndex].id && !done) {
        newCards.push(JSON.parse(JSON.stringify(traveller)));
        done = true;
      }
      if (cards[i].id !== cards[travellerIndex].id) {
        newCards.push(JSON.parse(JSON.stringify(cards[i])));
      }
    }
    console.log(newCards);
    setCards(newCards);
  };

  const getCardsByType: GetCardsByType = (type: string): Array<ICard> => {
    return cards.filter((card) => card.type === type);
  };

  const getCardById: GetCardById = (id: number): ICard | undefined => {
    return cards.find((card) => card.id === id);
  };

  return { cards, moveCard, getCardsByType, getCardById };
};
export default useManageCards;
