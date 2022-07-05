import { useState } from "react";

const Tab01 = () => {

    const [tab, setTab] = useState(0);
    const tabData = [
        { id: 1, content: '01우리나라 대한민국' },
        { id: 2, content: '02우리나라 대한민국' },
        { id: 3, content: '03우리나라 대한민국' },
    ]
    const tabHandler = (amunum) => {
        setTab(amunum);
    }
    return (
        <>
            <ul>
                {tabData.map((elm, idx) => (
                    <li onClick={() => tabHandler(idx)} key={elm.id}>menu0{elm.id}</li>
                ))}
                {/* <li onClick={() => tabHandler(0)}>menu01</li>
                <li onClick={() => tabHandler(1)}>menu02</li>
                <li onClick={() => tabHandler(2)}>menu03</li> */}
            </ul>
            <div className="tab">
                <div>{tabData[tab].content}</div>
            </div>
        </>
    )
}

export default Tab01;