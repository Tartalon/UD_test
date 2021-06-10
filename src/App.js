import './App.css';
import ToDoItem from './components/ToDoItem';
import todosData from './components/todosData';
import Header from './components/Header';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: todosData,
    };
  }

  handleChange = id => {
    const index = this.state.todoItems.map(item => item.id).indexOf(id);
    this.setState(state => {
      let { todoItems } = state;
      todoItems[index].completed = true;
      return todoItems;
    });
  };

  render() {
    const { todoItems } = this.state;
    const activeTasks = todoItems.filter(task => task.completed === false);
    const completedTasks = todoItems.filter(task => task.completed === true);
    const finalTasks = [...activeTasks, ...completedTasks].map(item => {
      return (
        <ToDoItem
          key={item.id}
          description={item.description}
          completed={item.completed}
          handleChange={() => {
            this.handleChange(item.id);
          }}
        />
      );
    });

    return (
      <div className="App">
        <Header />
        <ul className="todo__list">{finalTasks}</ul>
      </div>
    );
  }
}

export default App;
