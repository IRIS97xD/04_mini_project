import { useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: '저녁먹기',
      done: false,
    },
    {
      id: 2,
      title: '리액트 공부',
      done: false,
    },
    {
      id: 3,
      title: '잠자기',
      done: true,
    },
  ]);

  // Todo 추가하는 함수
  const addItem = (newItem) => {
    // newItem => { title: 'xxx' }
    newItem.id = todoItems.length + 1;
    newItem.done = false;
    // newItem => { title: 'xxx', id: n, done: false }

    setTodoItems([...todoItems, newItem]);
  };

  return (
    <div className="App">
      {/* todo 추가 input */}
      <AddTodo addItem={addItem} />

      {/* todo 목록 보이기 */}
      {todoItems.map((item) => {
        return <Todo key={item.id} item={item} />;
      })}
    </div>
  );
}

export default App;
