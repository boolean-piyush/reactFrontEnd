import React from "react";
import MovieLayout from "./MovieLayout";
import "./stylesheets/MovieStyle.css";

function Cards() {
  const [movieToSearch, setmovieToSearch] = React.useState("Death");
  const [data, setdata] = React.useState("");
  const [inputSearch, setinputSearch] = React.useState("");
  const [page, setpage] = React.useState(1);
  const apiKey = "api_key=df652458c0e8ecc102850164be64f942";
  const accessToken ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjY1MjQ1OGMwZThlY2MxMDI4NTAxNjRiZTY0Zjk0MiIsInN1YiI6IjYwMDJiNzhmZDQwZDRjMDAzZjU2NTA5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eD_6v45LAyguN9XJg52ES2tVcEY0d7PjC4-YiepGW9E";

//   const trendingMovieWeek = "/trending/movie/week";
  var urlToquery = "https://api.themoviedb.org/3/search/movie?"+apiKey+"&language=en-US&query="+movieToSearch+"&page="+page+"&include_adult=false";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      setdata(this.responseText);
    }
  };
  xhttp.open("GET", urlToquery, true);
  xhttp.setRequestHeader("Authorization", "Bearer " + accessToken);
  xhttp.send();
  return (
    <div className="ui container">
      <div className="ui fluid icon input">
      <i className="search icon"></i>
        <input
          className="movieInput"
          type="text"
          placeholder="Search Movie Here"
          value={inputSearch}
          onKeyUp={(event) =>
            event.key === "Enter" ? setmovieToSearch(inputSearch) : false
          }
          onChange={(e) => {setinputSearch(e.target.value);
            }}
        />
      </div>
      <br />
      <MovieLayout jsonData={data} /> <hr/>
      <div className="pagination">
      <button id="prev" type="button" onClick={()=>(page===1?true:setpage(page-1))}> <span>{"<<<"}</span> Previous</button>
      <button id="next" type="button" onClick={()=>setpage(page+1)}>Next <span>{">>>"}</span></button>
      </div>
    </div>
  );
}

export default Cards;
