import React from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading:true,
    movies:[]
    
  };
  getMovies = async() => {
    const  {data:{data:{movies}}}= await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=raing")
    
    movies.sort(function(a,b){
        return a.rating > b.rating ? -1 : a.rating < b.name ? 1 : 0
    }); // 정렬해준 후 setstate로 보내주기
    this.setState({movies, isLoading: false});
  };
  
  componentDidMount(){
    this.getMovies();
  };

  render() {
        
    const {isLoading, movies} = this.state;
    console.log(movies);
    return(
      <section className = "container">
        {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
        ) : (
          <div className = "movies">
            {movies.map(movie => (
            <Movie 
            key= {movie.id} 
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
            genres={movie.genres}
            rating = {movie.rating}
            />
            ))}
          </div>
        ) 
      }
      </section>
    )
  } 
}
export default Home;
