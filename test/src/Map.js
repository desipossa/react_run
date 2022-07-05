const Header = () => {
    const data = [
        { id: 1, title: "나는 바보다", content: "바보면 올 때 메로나 사와" },
        { id: 2, title: "나는 천재다", content: "천재면 올 때 메로나 사와" },
        { id: 3, title: "나는 메로나다", content: "너나 메로나 먹거..." }
    ];
    const List = data.map(el => (
        <li key={el.id}>
            <strong>{el.title}</strong>
            <p>
                {el.content}
            </p>
        </li>
    ))
    return (
        <>
            <ul>
                {List}
            </ul>
        </>
    )
}
export default Header;