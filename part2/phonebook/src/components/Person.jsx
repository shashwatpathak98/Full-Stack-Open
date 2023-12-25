import React from "react";

const Person = ({ person , handleDelete }) => {
  return (
    <div>
      <span>{person.name} {person.number} <button onClick={handleDelete}>delete</button></span>
    </div>
  );
};

export default Person;
