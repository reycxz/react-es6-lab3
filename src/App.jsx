import Counter from './Counter.jsx';
import UserList from './UserList.jsx';
import UserAPI from './UserAPI';

function App() {
  const isLoggedIn = true; // simulate login
  {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
  const users = ['Alice', 'Bob', 'Charlie'];

  return (
    <div>
      <h1>Vite + React</h1>

      {/* Conditional Rendering */}
      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please log in</p>
      )}

      <Counter />

      <UserList users={users} />

      <UserAPI />
    </div>
  );
}

export default App;
