import UserCard from './UserCard';

// List component: render multiple identical components using a map (component reuse).
function UserList({ users, onSelectUser }) {
  return (
    <div className="user-list">
      {users.map((u) => (
        <UserCard key={u.id} user={u} onSelect={onSelectUser} />
      ))}
    </div>
  );
}

export default UserList;
