import React, { useState, useEffect } from 'react';
import CreatePostForm from './MyPost/CreatePostForm';
import { savePost, deletePost } from './utils/localStorage';
import Post from './MyPost/Post';
import MovieList from './MOVIE/MovieList'
// import { Quiz } from './pages/Quiz'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MovieDetails from './MOVIE/MovieDetails';
import Favorites from './MOVIE/Favorite'
// import { Navba } from './MOVIE/Navba';
import './index.css'; // Import index.css
import { WatchList } from './MOVIE/WatchList'
import Login from './MOVIE/Login'
import SearchPage from './MOVIE/SearchPage'
import Navi from './DYNAMIC/Navbar'
import SignUp from './MOVIE/SignUp'
import AuthProvider from './MOVIE/AuthProvider';
import Profile from './MOVIE/Profile'




// import ItemList from './DYNAMIC/ItemList';
// import ItemDetails from './DYNAMIC/ItemDetails';
// import { items } from './itemsData';

export const App = () => {
  
  
  return (
  
    
    
     <div>
      {/* <Navi /> */}
      <AuthProvider>
        <Routes>
          <Route path='/favorite' element={<Favorites />} />
          <Route path="/"  element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path='/watchList' element={<WatchList />}/>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path='/searchPage' element={<SearchPage />} />
          <Route path='/profile' element={<Profile />} />
          
        </Routes>
       </AuthProvider>
      <div>

     </div>
       
     
      </div>
  );
};

  
    