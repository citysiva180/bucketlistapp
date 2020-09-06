import { CONSTANTS } from "../actions";

let listId = 2;
let cardID = 4;

const initialState = [
  {
    title: "List Name - 0",
    id: 0,
    cards: [
      {
        id: 0,
        text: "List Items",
      },
      {
        id: 1,
        text: "List Items",
      },
    ],
  },
  {
    title: "List Name - 1",
    id: 1,
    cards: [
      {
        id: 0,
        text: "List Items",
      },
      {
        id: 1,
        text: "List Items",
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: "listId",
      };
      listId += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardID,
      };
      cardID += 1;

      const newState = state.map((list) => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });

      return newState;

    default:
      return state;
  }
};

export default listsReducer;
