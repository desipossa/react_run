const Todolist = ({ todolist }) => {
  return (
    <>
      {todolist.map(el => <li key={el.id}>{el.name}</li>)}
    </>
  )

}

export default Todolist;