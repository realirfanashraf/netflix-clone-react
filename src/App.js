import './App.scss';
import Header from './Components/Header';
import HomeBanner from './Components/HomeBanner';
import Login from './Components/Login';
import Banner from './Components/Banner';
import List from './Components/List';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
            <Header/>
            <HomeBanner/>
            </>
          }/>
          <Route path='login' element={
           <>
           <Header/>
           <Login page={true}/>
           </>
          }/>
          <Route path='register' element={
           <>
           <Header/>
           <Login page={false}/>
           </>
          }/>
          <Route path='/dashboard' element={
            <>
            <Header/>
            <Banner/>
            <List/>
            </>
          }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
