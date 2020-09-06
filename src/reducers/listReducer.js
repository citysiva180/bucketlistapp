import { CONSTANTS } from "../actions";

let listId = 2;
let cardID = 4;

const initialState = [
  {
    title: "List Name - 0",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "List Items - 1",
      },
      {
        id: `card-${1}`,
        text: "List Items - 2",
      },
    ],
  },
  {
    title: "List Name - 1",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "List Items - 3",
      },
      {
        id: `card-${3}`,
        text: "List Items - 4",
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
        id: `list-${listId}`,
      };
      listId += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`,
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
