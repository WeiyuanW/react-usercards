import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import UserList from './components/UserList';
import SelectedUser from './components/SelectedUser';
import './App.css';

// Mock 用户数据（可以替换为真实 API）
const USERS = [
  { id: 1, name: 'Alice', age: 24, avatar: 'https://i.pravatar.cc/80?img=1' },
  { id: 2, name: 'Bob', age: 29, avatar: 'https://i.pravatar.cc/80?img=2' },
  { id: 3, name: 'Charlie', age: 22, avatar: 'https://i.pravatar.cc/80?img=3' },
  { id: 4, name: 'David', age: 31, avatar: 'https://i.pravatar.cc/80?img=4' },
];

function App() {
  // 父组件管理“被选中的用户”状态（演示子传父 → 父负责处理）
  const [selectedUser, setSelectedUser] = useState(null);

  // 子组件调用这个函数来告诉父组件哪个用户被选中
  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="app">
      <Header title="User Card Example — Component & Props & Child-to-Parent" />

      <div className="layout">
        <Card title="User List">
          <UserList users={USERS} onSelectUser={handleSelectUser} />
        </Card>

        <Card title="Selected User">
          <SelectedUser user={selectedUser} />
        </Card>
      </div>
    </div>
  );
}

export default App;
