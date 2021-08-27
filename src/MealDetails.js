import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

const MealDetails = () => {
    const [meal, setMeal] = useState({})
    const params = useParams()
    useEffect(() => {
        axios(`https://gist.githubusercontent.com/juravlevdima/b239931140d1c3ae402a87b130f2caa6/raw/2aeee347830d20ec0720293d32905b0ae359526c/food.json`)
            .then(res => setMeal(res.data.find(el => el.id === params.id)))
    }, [])
    // console.log(params.id)

    return (
        <div className="meal">
            <img src={meal.image} />
            <div>{meal.title}</div>
            <div>{meal.price}</div>
            <div>{meal.description}</div>
        </div>
    )
}
export default MealDetails