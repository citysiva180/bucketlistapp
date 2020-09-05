const initialState = [
  {
    title: "List Name",
    id: 0,
    cards: [
      {
        id: 0,
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
