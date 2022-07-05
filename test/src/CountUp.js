import { useState } from "react";

const Main = () => {
    const [count, setCount] = useState(0);
    const countHandler = () => {
        setCount(count + 1)
    }
    return (
        <>
            <div>{count}</div>
            <button onClick={countHandler}>count up</button>
        </>
    )
}
export default Main;