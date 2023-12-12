import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="app">
      <Header />

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
