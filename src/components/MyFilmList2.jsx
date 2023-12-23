import React from "react";
import axios from "axios";

class MyFilmList2 extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        this.fetchMovies();
    }

    fetchMovies = async () => {
        try {
            const response = await axios.get("http://www.omdbapi.com/", {
                params: {
                    apikey: "df8c0e46",
                    s: "Marvel",
                    type: "movie",
                },
            });

            if (response.data.Search) {
                this.setState({ movies: response.data.Search.slice(0, 4) });
            }
        } catch (error) {
            console.error("Errore durante il recupero dei film:", error);
        }
    };

    render() {
        const { movies } = this.state;

        return (
            <div className="p-3">
            <h2 className="text-white mb-3">Marvel</h2>
            <div className="row">
                {movies.map((movie) => (
                    <div key={movie.imdbID} className="col-6 col-sm-3 mb-3">
                        {movie.Poster && (
                            <img src={movie.Poster} alt="film" className="img-fluid w-100 hover-expand" />
                        )}
                    </div>
                ))}
            </div>
        </div>
        );
    }
}

export default MyFilmList2;