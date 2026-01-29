import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UserList from './UserList.jsx';
import Counter from './Counter.jsx';

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];

  return (
    <>
      <h1>Vite + React</h1>

      <h2>Counter</h2>
      <Counter />

      <h2>Users</h2>
      <UserList users={users} />
    </>
  );
}

export default App;
