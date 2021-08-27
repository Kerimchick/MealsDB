import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Meals = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        axios("https://gist.githubusercontent.com/juravlevdima/b239931140d1c3ae402a87b130f2caa6/raw/2aeee347830d20ec0720293d32905b0ae359526c/food.json")
            .then(el => setMeals(el.data))
    }, [])

    return (
        <div>
            All meals
            <div className="row">
                {
                    meals.map(item => (
                        <div key={item.id} className="col-4">
                            <Link to={`/meal/${item.id}`}>
                                <img src={item.image} className="image"/>
                                <div>{item.title}</div>
                            </Link>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}
export default Meals