
import axios from 'axios';
import './App.css';
import MoviesList from './components/moviesList';
import Navbr from './components/navbar';
// import MoviesList from "./components/moviesList.js"
import { Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Details from './components/movieDetails';

import { Route, Routes } from 'react-router-dom';
function App() {
  let [movie, setMovie] = useState([])
  let [pages, setPages] = useState();
  const getMovies=async ()=>{
   let res=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=f1aca93e54807386df3f6972a5c33b50&language=ar")
  
    setMovie(res.data.results);
    setPages(res.data.total_pages);
    // console.log(res.data.total_pages);

     
}
  const getSearch = async (word) => {
    if (word === "") {
      getMovies();
    }
    else {
      let res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=f1aca93e54807386df3f6972a5c33b50&language=ar&query=${word}`
      );
      
      setMovie(res.data.results);
       setPages(res.data.total_pages);
      
    }

     
}
  const getPaginate=async (page)=>{
     let res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f1aca93e54807386df3f6972a5c33b50&language=ar&page=${page}`
      );
      
    setMovie(res.data.results);
     setPages(res.data.total_pages);
  }
  useEffect(() => {
    getMovies(); 
   
  },[])
 
  return (
    <div>
      <Navbr serche={getSearch} />
      <Container>
        <Routes>
          <Route
            path="/"
            element={<MoviesList List={movie} getPaginate={getPaginate} />}
          ></Route>
          <Route
            path="/movie/:id"
            element={<Details/>}
          ></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
