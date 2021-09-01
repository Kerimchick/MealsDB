import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Ingredients from "../../components/Ingredients/Ingredients";


const AldbIngredients = () => {
    const [ingMeals, setIngMeals] = useState([])
    const params = useParams()
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
            setIngMeals(data.meals)
        }
        fetchData()
    }, [params.name])
    return (
        <div>
            <Link to="/">
                <button className="btn-home">Home</button>
            </Link>
            <Ingredients meals={ingMeals}/>
        </div>
    )
}
export default AldbIngredients