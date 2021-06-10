import React from 'react';

const ToDoItem = props => {
  const resolvedClass = {
    textDecoration: 'line-through',
  };

  return (
    <li className="list__item">
      <div className="title-wrapper">
        <h2
          className="item__title"
          style={props.completed === true ? resolvedClass : {}}
        >
          {props.description}
        </h2>
      </div>
      <div className="input-wrapper">
        <input
          type="checkbox"
          defaultChecked={props.completed}
          onChange={props.handleChange}
        />
      </div>
    </li>
  );
};

export default ToDoItem;
