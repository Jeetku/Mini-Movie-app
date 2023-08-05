import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import movies from "./Movie.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {movies.map((item) => (
          <Movie
            key={item.imdbID}
            title={item.Title}
            poster={item.Poster}
            year={item.Year}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
