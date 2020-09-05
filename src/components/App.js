import React from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";

function App() {
  const { lists } = this.props;
  return (
    <div className="App">
      <h1>Hello</h1>

      {lists.map((list) => (
        <TrelloList title={list.title} cards={list.cards} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
