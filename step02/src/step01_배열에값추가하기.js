import Wrapper from "./Wapper";
import { useRef, useState } from 'react';
function App() {
    const [todo, setTodo] = useState([]);
    const nextId = useRef(1);
    //console.log(todo, setTodo);
    //배열에 값을 추가하기
    const onCreate = () => {
        setTodo([...todo, {
            id: nextId.current,
            content: '먼가를 추가해야할 텐데... 호잉???'
        }]);

        nextId.current++
        console.log(nextId)
    }
    const Totolist = () => {
        return (
            <ul>
                {todo.map(el => <li key={el.id}>{el.content}</li>)}
            </ul>

        )
    }
    return (
        <Wrapper className="wrap">
            <div onClick={onCreate}>click</div>
            <Totolist />
        </Wrapper>
    );
}

export default App;
