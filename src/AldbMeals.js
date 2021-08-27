import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const AldbMeals = () => {
    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
            .then(el => setMeals(el.data.meals))
    }, [])

    const handleSearch = (e) => {
      setSearch(e.target.value)
    }
    return (
        <div>
            <div className="input-center">
                <input onChange={handleSearch} className="search-input" placeholder="Search for meals...."/>
                <Link to={`/browse/${search}`} className="link-btn">Search</Link>
            </div>
            <div className="row">
                {
                    meals.map(item => (
                        <div key={item.idMeal} className="col-4">
                            <Link to={`/meal/${item.strMeal}`}>
                                <img src={item.strMealThumb} className="image"/>
                                <div>{item.strMeal}</div>
                            </Link>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}
export default AldbMeals