import React, { Component } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
`;

class App extends Component {
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        draggableId
      )
    );
  };
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <h1>Hello</h1>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <ListContainer>
            {lists.map((list) => (
              <TrelloList
                listId={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
            <TrelloActionButton list />
          </ListContainer>
        </DragDropContext>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
