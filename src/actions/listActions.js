import { CONSTANTS } from "../actions";

export const addList = (title) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title,
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIdIndexStart,
  droppableIndexEnd,
  draggableId
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIdIndexStart,
      droppableIndexEnd,
      draggableId,
    },
  };
};
