import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

const AldbListFoundMeals = () => {
    const [list, setList] = useState([])
    const [notFound, setNotFound] = useState("")
    const params = useParams()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
            .then(res => {
                console.log(res.data.meals)
                if (!res.data.meals){
                    setNotFound("Не найдено такое блюдо")
                } else {
                    return setList(res.data.meals)
                }


            })
    }, [params.name])

    return(
        <div>
            <p>{notFound}</p>
            <Link to="/">
                <button className="btn-home">Home</button>
            </Link>
            <div className="row">
                {
                    list.map(item => (
                        <div key={item.idMeal} className="col-4">
                            <Link to={`/meal/${item.strMeal}`}>
                                <img src={item.strMealThumb} className="image" alt={item.strMeal}/>
                                <div>{item.strMeal}</div>
                            </Link>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}
export default AldbListFoundMeals