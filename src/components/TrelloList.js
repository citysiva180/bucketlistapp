import React from "react";
import TrelloCard from "./TrelloCard";

const TrelloList = ({ title }) => {
  return (
    <div style={styles.container}>
      <h1>{title}</h1>
      <TrelloCard></TrelloCard>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "lightgrey",
    borderRadius: 3,
    width: 300,
    padding: 8,
  },
};

export default TrelloList;
