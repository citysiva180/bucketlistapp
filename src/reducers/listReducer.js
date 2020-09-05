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
    default:
      return state;
  }
};

export default listsReducer;
