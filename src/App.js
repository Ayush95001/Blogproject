import{ useState } from 'react'
// import './App.css';
import React from 'react';
// import './Error.css';
import Blog from './Blog';
import Navbar from './Navbar'
import Detail from './BlogDetails';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
import Notfoundpage from './Notfoundpage';
import SearchResults from './SearchResults';
// import Somethingwrong from './Somethingwrong';
// import Unauthorizepage from './Unauthorizepage';
// import Topbar from './Topbar';

function App() {
  const [isloggedIn,setisloggedIn]= useState(false);
  const updateLoggedinStatus=(status)=>{
    setisloggedIn(status)
  }


  return (
    <>
      <Router>

        <Navbar isloggedIn={isloggedIn} setisloggedIn={updateLoggedinStatus} />

        {/* <Topbar isUserLoggedin={isloggedIn} setLoginStatus={updateLoggedinStatus}/>  */}

      <main className='classes.MainContainer'>
        <Routes>
          <Route path='/' element={<Blog/>} exact />
          <Route path='/blog/:D_id' element={<Detail isloggedIn={isloggedIn}/> }/>
          <Route path='/login' element={ <Login isloggedIn={isloggedIn} setislogged={updateLoggedinStatus} />}/>
         <Route path ='/notfound' Component={Notfoundpage}/>
         <Route path='/search' Component={SearchResults}/>
          {/* <Route path ='/somethingwrong' Component={Somethingwrong}/>
          <Route path ='/unauthorized' Component={Unauthorizepage}/>   */}


        </Routes>
        </main>
      </Router>

    
    </>
  );
}

export default App;