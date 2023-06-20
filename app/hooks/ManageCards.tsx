'use client';

import { ICard } from '@/app/types';
import { useEffect, useRef, useState } from 'react';

type Props = {
  CARDS: Array<ICard>;
};
export type Cards = Array<ICard>;
export type MoveCard = (
  fromId: number,
  toId: number,
  isAboveHalf: boolean
) => void;
export type GetCardsByType = (type: string) => Array<ICard>;
export type GetCardById = (id: number) => ICard | undefined;

export type MoveCardToType = (fromId: number, toType: string) => void;
const useManageCards = ({ CARDS }: Props) => {
  const [cards, setCards] = useState<Array<ICard>>([]);

  useEffect(() => {
    setCards(CARDS);
  }, []);

  const moveCard: MoveCard = (
    fromId: number,
    toId: number,
    isAboveHalf: boolean
  ): void => {
    if (fromId === toId) return;

    //console.log(newCards);
    setCards((prevCards) => {
      let travellerIndex = prevCards.findIndex(
        (card: ICard) => card.id === fromId
      );
      let destinationIndex = prevCards.findIndex(
        (card: ICard) => card.id === toId
      );
      let traveller = JSON.parse(JSON.stringify(prevCards[travellerIndex]));
      traveller.type = JSON.parse(
        JSON.stringify(prevCards[destinationIndex].type)
      );
      let newCards = [];
      console.log(isAboveHalf);
      if (isAboveHalf) {
        for (let i = 0; i < prevCards.length; i++) {
          if (prevCards[i].id === toId) {
            newCards.push(JSON.parse(JSON.stringify(traveller)));
            newCards.push(JSON.parse(JSON.stringify(prevCards[i])));
          } else if (prevCards[i].id !== fromId && prevCards[i].id !== toId) {
            newCards.push(JSON.parse(JSON.stringify(prevCards[i])));
          }
        }
      } else {
        for (let i = 0; i < prevCards.length; i++) {
          if (prevCards[i].id === toId) {
            newCards.push(JSON.parse(JSON.stringify(prevCards[i])));
            newCards.push(JSON.parse(JSON.stringify(traveller)));
          } else if (prevCards[i].id !== fromId && prevCards[i].id !== toId) {
            newCards.push(JSON.parse(JSON.stringify(prevCards[i])));
          }
        }
      }
      console.log(newCards);
      return newCards;
    });
  };
  const moveCardToType: MoveCardToType = (fromId: number, toType: string) => {
    setCards((prevCards) => {
      let travellerIndex = prevCards.findIndex(
        (card: ICard) => card.id === fromId
      );
      let traveller = JSON.parse(JSON.stringify(prevCards[travellerIndex]));
      traveller.type = toType;
      let newCards = [];
      for (let i = 0; i < prevCards.length; i++) {
        if (prevCards[i].id !== fromId) {
          newCards.push(JSON.parse(JSON.stringify(prevCards[i])));
        } else {
          newCards.push(JSON.parse(JSON.stringify(traveller)));
        }
      }

      return newCards;
    });
  };
  const getCardsByType: GetCardsByType = (type: string): Array<ICard> => {
    return cards.filter((card: ICard) => card.type === type);
  };

  const getCardById: GetCardById = (id: number): ICard | undefined => {
    return cards.find((card: ICard) => card.id === id);
  };

  return { cards, moveCard, getCardsByType, getCardById, moveCardToType };
};
export default useManageCards;
