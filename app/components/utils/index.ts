import { CARDS } from '@/app/todo';
import { ICardType } from '@/app/types';

export const getCards = (type: ICardType) => {
  return CARDS.filter((card) => card.type === type);
};
