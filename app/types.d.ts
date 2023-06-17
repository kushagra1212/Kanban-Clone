export type ICardType = 'todo' | 'progress' | 'done';
export interface IContent {
  isText: boolean;
  images?: Array<string>;
  text?: string;
}
export interface ICard {
  id: number;
  priority: 'Low' | 'Completed' | 'High';
  title: string;
  type: ICardType;
  content: IContent;
  people: Array<string>;
  comments: Array<number> | Array<string>;
  files: Array<number> | Array<string>;
}
