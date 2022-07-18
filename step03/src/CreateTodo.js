const CreateTodo = ({ name, onCreate, onChange }) => {

  return (
    <>
      <input name="name" onChange={onChange} />
      <button onClick={onCreate}>Click</button>
    </>
  )
}

export default CreateTodo;