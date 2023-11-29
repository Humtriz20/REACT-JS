// src/utils/localStorage.js

export const savePost = (posts) => {
    localStorage.setItem('posts', JSON.stringify(posts));
  };
  
  export const deletePost = () => {
    localStorage.removeItem('posts');
  };
  