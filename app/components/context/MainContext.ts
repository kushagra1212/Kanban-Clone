import { GetCardById, GetCardsByType, MoveCard } from '@/app/hooks/ManageCards';
import { CARDS } from '@/app/todo';
import { ICard } from '@/app/types';
import React from 'react';
interface IState {
  cards: ICard[];
  moveCard: MoveCard;
  getCardsByType: GetCardsByType;
  getCardById: GetCardById;
}
const MainContext = React.createContext<IState>({
  cards: [],
  moveCard: () => {},
  getCardsByType: () => [],
  getCardById: () => undefined,
}) as unknown as React.Context<IState>;

export default MainContext;
