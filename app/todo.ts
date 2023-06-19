import { ICard } from './types';

export const CARDS: Array<ICard> = [
  {
    id: 1,
    type: 'todo',
    priority: 'Low',
    title: 'Brainstorming',
    content: {
      isText: true,
      text: "Brainstorming brings team members' diverse experience into play.",
    },
    people: [
      'images/Ellipse-1.png',
      'images/Ellipse-3.png',
      'images/Ellipse-4.png',
    ],
    comments: [1, 2, 3, 4],
    files: [1, 2],
  },

  {
    id: 2,
    type: 'todo',
    priority: 'High',
    title: 'Research',
    content: {
      isText: true,
      text: 'User research helps you to create an optimal product for users.',
    },
    people: ['images/Ellipse-2.png', 'images/Ellipse-5.png'],
    comments: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    files: [1, 2, 3],
  },
  {
    id: 3,
    type: 'todo',
    priority: 'High',
    title: 'Wireframes',
    content: {
      isText: true,
      text: 'Low fidelity wireframes include the most basic content and visuals.',
    },
    people: [
      'images/Ellipse-1.png',
      'images/Ellipse-3.png',
      'images/Ellipse-4.png',
    ],
    comments: [1, 2, 3, 4, 5],
    files: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 4,
    type: 'progress',
    priority: 'Low',
    title: 'Onboarding Illustrations',
    content: {
      isText: false,
      images: ['images/todo-list/obsi.png'],
    },
    people: [
      'images/Ellipse-4.png',
      'images/Ellipse-3.png',
      'images/Ellipse-1.png',
    ],
    comments: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    files: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    id: 5,
    type: 'progress',
    priority: 'Low',
    title: 'Moodboard',
    content: {
      isText: false,
      images: ['images/todo-list/mb-1.png', 'images/todo-list/mb-2.png'],
    },
    people: ['images/Ellipse-4.png'],
    comments: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    files: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 6,
    type: 'done',
    priority: 'Completed',
    title: 'Mobile App Design',
    content: {
      isText: false,
      images: ['images/todo-list/mg.png'],
    },
    people: ['images/Ellipse-5.png', 'images/Ellipse-3.png'],
    comments: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    files: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    id: 7,
    type: 'done',
    priority: 'Completed',
    title: 'Design System',
    content: {
      isText: true,
      text: 'It just needs to adapt the UI from what you did before ',
    },
    people: [
      'images/Ellipse-1.png',
      'images/Ellipse-4.png',
      'images/Ellipse-3.png',
    ],
    comments: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    files: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
];
