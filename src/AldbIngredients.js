import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";


const AldbIngredients = () => {
    const [ingMeals, setIngMeals] = useState([])
    const params = useParams()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
            .then(res => setIngMeals(res.data.meals))
    }, [params.name])
    return (
        <div>
            <Link to="/">
                <button className="btn-home">Home</button>
            </Link>
            <div className="row">
                {
                    ingMeals.map(item => (
                        <div key={item.idMeal} className="col-4">
                            <Link to={`/meal/${item.strMeal}`}>
                                <img src={item.strMealThumb} className="image" alt={item.strMeal} />
                                <div>{item.strMeal}</div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default AldbIngredients