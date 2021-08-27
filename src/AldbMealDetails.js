import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

const AldbMealDetails = () => {
    const [meal, setMeal] = useState({})
    const params = useParams()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.title}`)
            .then(res => setMeal(res.data.meals[0]))
    }, [])

    const ingredients = Array(20).fill(0).reduce((acc, item, idx) => {
        if(meal[`strIngredient${idx + 1}`]){
            return [...acc, meal[`strIngredient${idx + 1}`]]
        }
        return acc
    }, [])
    console.log(ingredients)

    return (
        <div>
            <Link to="/">
                <button className="btn-home">Home</button>
            </Link>
            <div className="row">
                <div className="col-6">
                    <img src={meal.strMealThumb} className="image"/>
                </div>
                <div className="col-6">
                    <div className="row">{
                        ingredients.map(el =>
                            <div className="col-4">
                                <Link to={`/ingredient/${el}`}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${el}.png`} className="image"/>
                                    <p>{el}</p>
                                </Link>
                            </div>
                        )
                    }
                    </div>
                </div>
                <div>{meal.strMeal}</div>
                <div>{meal.strArea}</div>
                <div>{meal.strInstructions}</div>
            </div>

        </div>

    )
}
export default AldbMealDetails