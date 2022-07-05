const NotFound = () => {
    let date = new Date();
    let day = date.getDay();
    let daay = date.getDate();
    const yoil = ['일', '월', '화', '수', '목', '금', '토'];
    return (
        <>
            <div>{daay} {yoil[day]}</div>
            <strong>404 NOT FOUND</strong>
        </>
    )
}
export default NotFound;