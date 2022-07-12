
function UserList({ users }) {
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <b>{user.username}</b> <span>({user.email})</span>
                </li>
            ))}
        </ul>
    );
}

export default UserList;