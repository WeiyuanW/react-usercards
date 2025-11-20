// Single user card: the use of props and button event triggering (child-to-parent transmission).
function UserCard({ user, onSelect }) {
  return (
    <div className="user-card">
      <img className="avatar" src={user.avatar} alt={user.name} />
      <div className="user-info">
        <div className="name">{user.name}</div>
        <div className="age">Age: {user.age}</div>
      </div>
      <div className="actions">
        {/* When clicked, the user is passed back to the parent component as a parameter. */}
        <button className="btn" onClick={() => onSelect(user)}>
          Select
        </button>
      </div>
    </div>
  );
}

export default UserCard;
