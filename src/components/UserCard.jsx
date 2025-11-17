// 单个用户卡片：演示 props 的使用和按钮事件触发（子传父）
function UserCard({ user, onSelect }) {
  return (
    <div className="user-card">
      <img className="avatar" src={user.avatar} alt={user.name} />
      <div className="user-info">
        <div className="name">{user.name}</div>
        <div className="age">Age: {user.age}</div>
      </div>
      <div className="actions">
        {/* 当点击时，把 user 作为参数传回父组件 */}
        <button className="btn" onClick={() => onSelect(user)}>
          Select
        </button>
      </div>
    </div>
  );
}

export default UserCard;
