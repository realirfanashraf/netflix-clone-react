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
              <List title="Netflix Originals" param="originals"/>
              <List title="Trending Now" param="trending"/>
              <List title="Now Playing" param="now_playing"/>
              <List title="popular" param="popular"/>
              <List title="Top Rated" param="top_rated"/>
              <List title="Upcoming" param="upcoming"/>
            </>
          }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
