import axios from "axios";
import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import MealsList from "../../components/MealsList/MealsList";

const AldbSortMeals = () => {
    const [sorts, setSorts] = useState([])
    const [notFound, setNotFound] = useState(false)
    let params = useParams()
    let char = params.symbol.toLowerCase()
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?f=${char}`)
            data.meals ? setSorts(data.meals) : setNotFound(true)
        }
        fetchData()
    }, [char])
    return(
        <div>
            <Link to="/">
                <button className="btn-home">Home</button>
            </Link>
            <div className="row">
                {notFound ? <p>NOT FOUND MEALS</p> : <MealsList meals={sorts}/>}
            </div>
        </div>
    )
}
export default AldbSortMeals