import { useEffect, useState } from "react"
import CustomInp from "../component/CustomInp"

function Home() {
    const [inputMovie , setInputMovie] = useState([]);
    useEffect(() =>{
        getMovieData();
    }, []);
    async function getMovieData(){
        try{
            let url = "https://www.omdbapi.com/?apikey=32eafd2e&s=avengers"
            let data = await fetch(url);
            let movie = await data.json();
            setInputMovie(movie.Search);
        }
        catch(err){
            return err;
        }
    }
    return (
    <div>
        <h2>Create your Input</h2>
        <span>First Input</span>
        <CustomInp/>
            <div>
            {
                inputMovie.map((element) => {
                    return(
                        <h2 key = {element.imdbID}> {element.Title} </h2>
                    )
                })
            }
            </div>
    </div>
  )


}

export default Home


// https://www.omdbapi.com/?apikey=32eafd2e&s=