import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";

const TrelloList = ({ title, cards, listId }) => {
  return (
    <div style={styles.container}>
      <h1>{title}</h1>
      {cards.map((card) => (
        <TrelloCard key={card.id} text={card.text} />
      ))}
      <TrelloActionButton listId={listId}></TrelloActionButton>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "lightgrey",
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
    height: "100%",
  },
};

export default TrelloList;
