const CreateUser = ({ username, email, onChange, onCreate }) => {
    return (
        <>
            <input
                name='username' onChange={onChange} value={username}
            />
            <input
                name='email' onChange={onChange} value={email}
            />
            <button onClick={onCreate}>등록</button>
        </>
    )
}
export default CreateUser;