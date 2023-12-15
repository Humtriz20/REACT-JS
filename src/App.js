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
import ForgottenPassword from './MOVIE/ForgottenPassword'
import VerificationCode from './MOVIE/VerificationCode'
import Verification from './MOVIE/Verification'
import VerificationComplete from './MOVIE/VerificationComplete'
import LoadingWelcome from './MOVIE/LoadingWelcome';
import { Table } from './TABLE/Table'
import { Modal } from './TABLE/Modal'
import { ImageCardSlider } from './TABLE/ImageCardSlider'




// import ItemList from './DYNAMIC/ItemList';
// import ItemDetails from './DYNAMIC/ItemDetails';
// import { items } from './itemsData';

export const App = () => {
 
  return (
  
    
    
     <div>
      {/* <Navi /> */}
      <AuthProvider>
        {/* <Routes>
          <Route path='/favorite' element={<Favorites />} />
          <Route path="/"  element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path='/watchList' element={<WatchList />}/>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path='/searchPage' element={<SearchPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/forgotten-Password' element={<ForgottenPassword />} />
          <Route path='/verificationCode' element={<VerificationCode />} />
          <Route path='/verification' element={<Verification />} />
          <Route path='/verificationcomplete' element={<VerificationComplete />} /> 
        </Routes> */}
        {/* <Modal /> */}
        {/* <Table /> */}
       <ImageCardSlider />
       </AuthProvider>
      <div>

     </div>
       
     
      </div>
  );
};

  
    