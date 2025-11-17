// 展示选中用户的详细信息（展示 Props 也可作为独立组件）
function SelectedUser({ user }) {
  if (!user) {
    return <div className="selected-empty">No user selected yet. Click the Select button on the right to choose a user.</div>;
  }

  return (
    <div className="selected-user">
      <img className="avatar-large" src={user.avatar} alt={user.name} />
      <div className="selected-info">
        <h3>{user.name}</h3>
        <p>Age: {user.age}</p>
        <p>User ID: {user.id}</p>
      </div>
    </div>
  );
}

export default SelectedUser;
