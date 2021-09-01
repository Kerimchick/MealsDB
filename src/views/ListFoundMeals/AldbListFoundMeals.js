import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import MealsList from "../../components/MealsList/MealsList";

const AldbListFoundMeals = () => {
    const [list, setList] = useState([])
    const [notFound, setNotFound] = useState(false)
    const params = useParams()
    useEffect(() => {
        const fetchData = async () => {
          const {data} = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
                 data.meals ? setList(data.meals) : setNotFound(true)
        }
        fetchData()
    }, [params.name])
    return(
        <div>
            <Link to="/">
                <button className="btn-home">Home</button>
            </Link>
            <div className="row">
                {notFound ? <p>NOT FOUND MEALS</p> : <MealsList meals={list}/>}
            </div>
        </div>
    )
}
export default AldbListFoundMeals