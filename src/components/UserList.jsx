import UserCard from './UserCard';

// 列表组件：演示 map 渲染多个相同组件（组件复用）
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
