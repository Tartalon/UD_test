import './App.css';
import ToDoItem from './components/ToDoItem';
import todosData from './components/todosData';
import Header from './components/Header';

function App() {
  const todoItems = todosData.map(item => {
    return (
      <ToDoItem
        key={item.id}
        description={item.description}
        completed={item.completed}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <ul className="todo__list">{todoItems}</ul>
    </div>
  );
}

export default App;
