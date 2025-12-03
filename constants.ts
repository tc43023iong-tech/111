import { QuestionA, QuestionD, QuestionBonus, QuestionBGroup, QuestionH, QuestionC, QuestionVocab } from './types.ts';

export const QUESTIONS_A: QuestionA[] = [
  { id: 1, word: 'ham', answer: 'U' },
  { id: 2, word: 'cheese', answer: 'U' },
  { id: 3, word: 'butter', answer: 'U' },
  { id: 4, word: 'rice', answer: 'U' },
  { id: 5, word: 'congee', answer: 'U' },
  { id: 6, word: 'soup', answer: 'U' },
  { id: 7, word: 'sugar', answer: 'U' },
  { id: 8, word: 'salt', answer: 'U' },
  { id: 9, word: 'jam', answer: 'U' },
  { id: 10, word: 'mushrooms', answer: 'C' },
  { id: 11, word: 'onions', answer: 'C' },
  { id: 12, word: 'sausages', answer: 'C' },
  { id: 13, word: 'vegetables', answer: 'C' },
  { id: 14, word: 'noodles', answer: 'C' },
];

export const QUESTIONS_B: QuestionBGroup[] = [
  {
    id: 1,
    title: 'Apple Questions',
    image: '🍎',
    options: [
      { label: 'A', text: 'apple' },
      { label: 'B', text: 'apple juice' },
      { label: 'C', text: 'apples' },
    ],
    questions: [
      { id: '1-1', text: 'There are some ____.', answer: 'C' },
      { id: '1-2', text: 'There is some ____.', answer: 'B' },
      { id: '1-3', text: 'There is an ____.', answer: 'A' },
    ]
  },
  {
    id: 2,
    title: 'Orange Questions',
    image: '🍊',
    options: [
      { label: 'A', text: 'orange' },
      { label: 'B', text: 'orange juice' },
      { label: 'C', text: 'oranges' },
    ],
    questions: [
      { id: '2-1', text: 'There is an ____.', answer: 'A' },
      { id: '2-2', text: 'There are some ____.', answer: 'C' },
      { id: '2-3', text: 'There is some ____.', answer: 'B' },
    ]
  }
];

export const WORD_BANK_D = ['a lot of', 'healthy', 'sausages', 'noodles', 'salad', 'perfect'];

export const QUESTIONS_D: QuestionD[] = [
  {
    id: 1,
    sentencePart1: 'The chef cooks a hot bowl of',
    sentencePart2: 'with beef for dinner.',
    answer: 'noodles',
  },
  {
    id: 2,
    sentencePart1: 'Look! The boy has three',
    sentencePart2: 'on his plate.',
    answer: 'sausages',
  },
  {
    id: 3,
    sentencePart1: 'My sister likes to mix corn, lettuce and tomatoes to make a',
    sentencePart2: '.',
    answer: 'salad',
  },
  {
    id: 4,
    sentencePart1: 'This chocolate cake tastes',
    sentencePart2: '! It is so sweet.',
    answer: 'perfect',
  },
  {
    id: 5,
    sentencePart1: 'Playing football every day is',
    sentencePart2: 'for our body.',
    answer: 'healthy',
  },
  {
    id: 6,
    sentencePart1: 'The shopkeeper has',
    sentencePart2: 'eggs in the big basket.',
    answer: 'a lot of',
  },
];

export const QUESTIONS_H: QuestionH[] = [
  {
    id: 1,
    segments: [
      { text: "Are", isMistake: true, correction: "Is", options: ["Is", "Do", "Does"] },
      { text: "there" },
      { text: "any" },
      { text: "sugar" },
      { text: "in" },
      { text: "the" },
      { text: "jar?" }
    ]
  },
  {
    id: 2,
    segments: [
      { text: "There" },
      { text: "are", isMistake: true, correction: "is", options: ["is", "have", "has"] },
      { text: "some" },
      { text: "juice." }
    ]
  },
  {
    id: 3,
    segments: [
      { text: "There" },
      { text: "are" },
      { text: "any", isMistake: true, correction: "some", options: ["some", "much", "a"] },
      { text: "onions." }
    ]
  },
  {
    id: 4,
    segments: [
      { text: "There" },
      { text: "is" },
      { text: "not" },
      { text: "some", isMistake: true, correction: "any", options: ["any", "a", "many"] },
      { text: "cheese." }
    ]
  },
  {
    id: 5,
    segments: [
      { text: "There" },
      { text: "are", isMistake: true, correction: "is",