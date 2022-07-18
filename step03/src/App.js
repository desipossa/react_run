import { useState, useRef } from 'react';
import Todolist from './Todolist';
import CreateTodo from './CreateTodo';

const App = () => {
  const [todolist, setTodoList] = useState([]);
  const [todoitem, setTodoitem] = useState({});
  const nextID = useRef(1);
  const onChange = (e) => {
    const { name, value } = e.target;
    setTodoitem({ ...todoitem, [name]: value });
    console.log(todoitem)
  }
  const onCreate = () => {
    const todo = {
      id: nextID.current,
      ...todoitem
    }
    //setTodoitem({ ...todoitem, name: "1" });
    setTodoList([...todolist, todo]);
    nextID.current++;

    console.log(todolist);
    console.log(nextID.current);
  }


  return (
    <>
      <Todolist todolist={todolist} />
      <CreateTodo onCreate={onCreate} onChange={onChange} />
    </>
  )

}

export default App;