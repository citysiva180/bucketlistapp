import React, { Component } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {
  onDragEnd = () => {
    //Todo - Reordering Logic
  };
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <h1>Hello</h1>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div style={styles.listsContainer}>
            {lists.map((list) => (
              <TrelloList
                listId={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
            <TrelloActionButton list />
          </div>
        </DragDropContext>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",

    padding: 8,
  },
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
