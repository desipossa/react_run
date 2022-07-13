import Wrapper from "./Wapper";
import { useRef, useState } from 'react';
import TodoCleate from "./TodoCleate";
function App() {
  const [todos, setTodo] = useState([]);
  const [TodoItem, setTodoItem] = useState()
  const nextId = useRef(1);
  //console.log(todo, setTodo);
  //배열에 값을 추가하기
  const onCreate = () => {
    const todo = {
      id: nextId.current,
      content: TodoItem
    };
    setTodo([...todos, todo]);

    nextId.current++
    console.log(nextId)
  }

  const onRemove = (id) => {
    setTodo(todos.filter((el) => el.id !== id));
    console.log(todos, nextId)
  }
  //입력값 받아와서 배열에 입력하기 
  const onTodo = (e) => {
    let todo = e.target.value;
    setTodoItem(todo);
    console.log(todo)
  }
  const Totolist = () => {
    return (
      <ul >
        {todos.map(el => <li key={el.id} onClick={() => onRemove(el.id)}>{el.id} {el.content}</li>)}
      </ul>

    )
  }
  return (
    <Wrapper className="wrap">
      <input name="할일" onChange={onTodo} value={TodoItem || ''} />
      <button onClick={onCreate}>할일추가</button>
      <Totolist />
    </Wrapper>
  );
}

export default App;
