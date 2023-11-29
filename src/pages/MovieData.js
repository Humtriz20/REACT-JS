import React, { useEffect, useState } from 'react'


export const MovieData = () => {
    //we will first create a state to manage our data
    const [movies, setMovies] = useState([]);
    //we will then import useEffect to fetch API
   
    useEffect(() => {
        const fetchMovies = async () => {
          try {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular');
            const data = await response.json();
            setMovies(data);
          } catch (error) {
            console.error('Error fetching movie data:', error);
          }
        };
    
        fetchMovies();
      }, []); // Empty dependency
    
  return (
    <>
      <h1>Movie App</h1>
        <div className='movieContainer'>
            {movies.map((movie)=>(
            <div key={movie.id}>
                <img src={movie.Poster} alt=''/>
                <h3>{movie.Title}</h3>
                <p>{movie.Overview}</p>
                <p>{movie.Year}</p>
            </div>

            ))}

        </div>
    </>
      

  )

}

// {/* <div className="productList">
// {productList.map((product, index) => (
//   <div key={product.id}>
//   <img className='img' src={product.src} alt="images1" />
//     <h3>{product.name}</h3>
//     <p className='p'>Price: #{product.price}</p>
//     <button className='btn'onClick={()=> addToCart(product)}>Add To cart</button>
//   </div>
//   //we are using arrowfunction because the function is having a parameter
// ))} 

// </div> */}