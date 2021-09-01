import axios from "axios";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import MealsList from "../../components/MealsList/MealsList";
import CountriesList from "../../components/CountriesList/CountriesList";
import AlphabetLinks from "../../components/AlphabetLinks/AlphabetLinks";

const AldbMeals = () => {
    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState("")
    let history = useHistory()
    const countries = {'gb' : "British", 'us' : "American", 'fr' : "French", 'ca' : "Canadian", 'jm' : "Jamaican",
        'cn' : "Chinese", 'nl' : "Dutch", 'eg' : "Egyptian", 'gr' : "Greek", 'in' : "Indian", 'ie' : "Irish",
        'it' : "Italian", 'jp' : "Japanese", 'kn' : "Kenyan", 'my' : "Malaysian", 'mx' : "Mexican",
        'ma' : "Moroccan", 'hr' : "Croatian", 'no' : "Norwegian", 'pt' : "Portuguese", 'ru' : "Russian",
        'ar' : "Argentinian", 'es' : "Spanish", 'sk' : "Slovakian", 'th' : "Thai", 'sa' : "Saudi Arabian",
        'vn' : "Vietnamese", 'tr' : "Turkish", 'sy' : "Syrian", 'dz' : "Algerian", 'tn' : "Tunisian", 'pl' : "Polish"}
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
            setMeals(data.meals)
        }
        fetchData()
        }, [])
    const alphabet = new Array(26).fill(1).map((_, index) => String.fromCharCode(65 + index))
    const handleClick = () => {
        if(search.trim()){
            history.push(`/browse/${search}`)
        }
    }
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className="container">
            <div className="input-center">
                <input onChange={handleSearch} className="search-input" placeholder="Search for meals...." onKeyPress={event => {
                    if(event.key === 'Enter')handleClick()
                }}/>
                <button onClick={handleClick} className="link-btn">Search</button>
            </div>
            <MealsList meals={meals}/>
            <CountriesList meals={countries} />
            <AlphabetLinks meals={alphabet}/>
        </div>
    )
}
export default AldbMeals