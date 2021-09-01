import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import Youtube from "../../components/Youtube/Youtube";
import MealDetails from "../../components/MealDetails/MealDetails";

const AldbMealDetails = () => {
    const [meal, setMeal] = useState({})
    const [youtube, setYoutube] = useState("")
    const params = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.title}`)
            const obj = data.meals[0]
            setMeal(obj)
            let str = obj.strYoutube
            setYoutube(str.slice(str.indexOf('v=') + 2, str.length))
        } 
        fetchData()
    }, [params.title])
    const ingredients = Array(20).fill(0).reduce((acc, item, idx) => {
        if(meal[`strIngredient${idx + 1}`]){
            return [...acc, meal[`strIngredient${idx + 1}`]]
        }
        return acc
    }, [])
    return (
        <div>
            <Link to="/">
                <button className="btn-home">Home</button>
            </Link>
            <div className="row">
                <MealDetails meals={meal} mealsIng={ingredients}/>
                <div>
                    <Youtube meals={youtube} />
                </div>
            </div>
        </div>
    )
}
export default AldbMealDetails