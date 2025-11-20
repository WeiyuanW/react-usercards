import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import UserList from './components/UserList';
import SelectedUser from './components/SelectedUser';
import './App.css';

const USERS = [
  { id: 1, name: 'Alice', age: 24, avatar: 'https://i.pravatar.cc/80?img=1' },
  { id: 2, name: 'Bob', age: 29, avatar: 'https://i.pravatar.cc/80?img=2' },
  { id: 3, name: 'Charlie', age: 22, avatar: 'https://i.pravatar.cc/80?img=3' },
  { id: 4, name: 'David', age: 31, avatar: 'https://i.pravatar.cc/80?img=4' },
];

function App() {
  // The parent component manages the state of the "selected user" 
  // (demonstrating child-to-parent pass-through → parent component is responsible for handling).
  const [selectedUser, setSelectedUser] = useState(null);

  // child calls this function to tell the parent which user has been selected. callback function.
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


/*
The value of components: reusable, maintainable, and like building blocks like Lego.

Component reuse: UserCard uses a map to render multiple cards.
The purpose of keys in lists: improve rendering performance and correctly track elements.

useState manages state: The parent component stores the selectedUser name.

Parent to Child: props
passing data from parent to child (unidirectional data flow); also passing functions.

Child to parent: callback function
Child component clicks a button → calls the parent component's function
 → passes in the user name → parent component updates its state.

Child to Child: 
1.
Lifting State Up - Indirect communication, Promote the state that needs to be shared 
to the nearest common parent component.
2.
React Context API - useContext（When the component hierarchy is very deep, Crossing the middle layer）
ChildA / ChildB (Initiator) -> Parent (State Holder) -> ChildA / ChildB (Subscriber)
3.
Global Store - create a Global Data Warehouse with Redux / Zustand / Recoil, large complex applications.
Store is a JavaScript object or container that exists throughout the entire lifecycle of the application.
child connect to the Store via a Hook. useSelector / useStore / ...
ChildA (Initiator) -> Independent Store (Central Repository) -> ChildB (Subscriber)

component lifecycle: Create (Mount), Update (Update), Destroy (Unmount)
1. Class Component
Mount: constructor → render → componentDidMount (component first appearance / initialization)
Update: render → componentDidUpdate (component update: state or props change) 
Unmount: componentWillUnmount (removing the component from the page) 
2. Function Component（Hooks）
Hooks don't have lifecycle functions; use `useEffect` to simulate all lifecycle events.
React simplifies the lifecycle into one concept: Side Effects.
Mount: useEffect(..., []) <=> componentDidMount
Update: useEffect(..., [deps]) <=> componentDidUpdate
Unmount: return () => cleanup <=> componentWillUnmount （effect cleanup）
* The lifecycle allows you to insert code at each critical moment in a component's 
"appearance → update → disappearance" to perform work (side effects) beyond the UI.

class component vs function component
Function Components are simpler, require less code, and perform better; 
they are the standard approach in modern React. 
Class Components are the older approach, only seen when maintaining legacy projects.
Almost all modern React features are based on Hooks.
useEffect integrates all lifecycle operations together.

Hooks = a set of functionalities that enable Function Components 
to have state, lifecycle, performance optimization, and other features.
With the advent of Hooks, Function Components truly became complete components.
Therefore, almost all of React's current functionality is accomplished through Hooks.
"hooked", turns an ordinary function into a stateful React component with a lifecycle.
*/