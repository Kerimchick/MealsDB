import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import MealsList from "../../components/MealsList/MealsList";

const AldbCountriesMeals = () => {
    const [meal, setMeal] = useState([])
    const params = useParams()
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.name}`)
                setMeal(data.meals)
        }
        fetchData()
    }, [params.name])
    console.log(params.name)
    return(
        <div className="container">
            <div>
                <Link to="/">
                    <button className="btn-home">Home</button>
                </Link>
                <div>
                    {meal ? <MealsList meals={meal}/> : "NOT FOUND MEALS"}
                </div>
            </div>
        </div>
    )
}
export default AldbCountriesMeals