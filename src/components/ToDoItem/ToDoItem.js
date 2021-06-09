import React from 'react';

const ToDoItem = props => {
  return (
    <li className="list__item">
      <h2 className="item__title">{props.description}</h2>
      <input type="checkbox" defaultChecked={props.completed} />
    </li>
  );
};

export default ToDoItem;
