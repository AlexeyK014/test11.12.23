import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
        <Header />
        <Navbar />
      

      <div className='container'>
            My POsts
            <div>Post 1</div>
            <div>Post 2</div>
      </div>
    </div>
  );
}

export default App;
