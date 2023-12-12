import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import Users from './Components/Users/Users';
import UsersContainer from './Components/Users/UsersContainer';

function App() {
  return (
    <div className="app">
        <Header />
        <Navbar />
        <div className='wrapper_container'>
            <Routes>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/users' element={<UsersContainer />}/>
            </Routes>
        </div>
        
        

      
    </div>
  );
}

export default App;
