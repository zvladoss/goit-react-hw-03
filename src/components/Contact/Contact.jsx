import React from "react";

const Contact = ({ id, name, number, onDelete }) => {
  console.log();
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
