import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";


const AldbMeals = () => {
    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState("")
    let history = useHistory()
    useEffect(() => {
        axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
            .then(el => setMeals(el.data.meals))
    }, [])

    const handleClick = () => {
        history.push(`/browse/${search}`)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div>
            <div className="input-center">
                <input onChange={handleSearch} className="search-input" placeholder="Search for meals...." onKeyPress={event => {
                    if(event.key === 'Enter')handleClick()
                }}/>
                <button onClick={handleClick} className="link-btn" disabled={!search}>Search</button>
            </div>
            <div className="row">
                {
                    meals.map(item => (
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
export default AldbMeals