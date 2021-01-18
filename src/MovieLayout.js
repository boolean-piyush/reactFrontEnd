import React from "react";
import { Rating, Header, Icon, Modal } from "semantic-ui-react";

const genres = {
  id: {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10765: "Sci-Fi",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
    80: "Crime",
    10762: "Kids",
    10763: "News",
    10764: "Reality",
    10766: "Soap",
    10767: "Talk",
    10768: "Politics",
  },
};

function MovieLayout(props) {
  var myObj;
  var [plot, setplot] = React.useState("");
  const [open, setOpen] = React.useState(false);

  if (typeof props.jsonData !== "object") {
    try {
      myObj = JSON.parse(props.jsonData);
    } catch (error) {
      console.log("GOT JSON ERROR");
    }
  } else {
    myObj = props.jsonData;
  }

  function MyModel() {
    return (
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
        dimmer="blurring"
      >
        <Header icon>
          <Icon name="video camera" />
          Plot-Overview
        </Header>
        <Modal.Content>
          <p>
            {plot}
          </p>
        </Modal.Content>
      </Modal>
    );
  }

  const Columns = () => {
    var len, movieArray;
    try {
      movieArray = myObj.results;
      len = movieArray.length;
    } catch (error) {
      return <h2>Got nothing</h2>;
    }
    const movieList = [];
    for (let index = 0; index < len; index++) {
      const movie = movieArray[index];
      var movieRating = parseInt(parseFloat(movie.vote_average) + 0.5);
      var thumb;
      if (movieRating >= 5) {
        thumb = "thumbs up outline icon";
      } else {
        thumb = "thumbs down outline icon";
      }

      if (movie.poster_path === null) {
        continue;
      }
      movieList.push(
        <div
          key={index}
          className="eight wide mobile five wide tablet four wide computer column movieContainer"
        >
          <div className="poster">
            <img
              onClick={() => {
                setOpen(true);
                setplot(movie.overview);
              }}
              className="image"
              src={"https://image.tmdb.org/t/p/w154/" + movie.poster_path}
              alt={movie.original_title}
            />
            <p className="genre">
              {movie.genre_ids.map((value, index) => {
                return (
                  <span key={index}>
                    {genres.id[parseInt(value)]}
                    <br />
                  </span>
                );
              })}
            </p>
          </div>

          <p id="movieDetail">
            {movie.original_title +
              " (" +
              movie.release_date.split("-")[0] +
              ")"}
          </p>
          <Rating icon="star" defaultRating={movieRating} maxRating={10} />
          <br />
          <span>
            <i className={thumb}></i>&nbsp;{movie.vote_count}
          </span>
        </div>
      );
    }
    return movieList;
  };

  return (
    <div className="ui container">
      <MyModel/>
      <div className="ui grid">{<Columns />}</div>
    </div>
  );
}

export default MovieLayout;
