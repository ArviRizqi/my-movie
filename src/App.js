import { useEffect, useState } from 'react';
import './App.css';
import { getMovieList, searchMovie } from './api';
import Header from './component/Header';

const App = () => {
  
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(()=>{
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
          <div className="Movie-wrapper" key={i}>
            <div className="Movie-title">{movie.title}</div>      
            <img className="Movie-image" alt={`gambar ${movie.title}`} src={`${process.env.REACT_APP_BASEIMAGEURL}/${movie.poster_path}`}/>
            <div className="Movie-date">{movie.release_date}</div>
            <div className="Movie-rate">{movie.vote_average}</div>
          </div>
      )
    })
  }

  const search = async(q) =>{
    if (q.length > 3){
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
  }

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <h1>My Movie List</h1>
          <input type="text" placeholder='Cari film' className='Movie-search'
          onChange={({target}) => search(target.value)}
        />

        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
