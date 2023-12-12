import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        LOGO
      </header>

      <nav className='navbar'>
            <div>Profile</div>
            <div>Users</div>
            <div>Dialogs</div>
            <div>News</div>
      </nav>

      <div className='container'>
            My POsts
            <div>Post 1</div>
            <div>Post 2</div>
      </div>
    </div>
  );
}

export default App;
