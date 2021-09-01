import React from 'react';
import {Link} from "react-router-dom";

const MealDetails = ({meals, mealsIng}) => {
    return (
        <div className="row">
            <div className="col-6">
                <img src={meals.strMealThumb} className="image" alt={meals.strMeal} />
            </div>
            <div className="col-6">
                <div className="row">{
                    mealsIng.map(el =>
                        <div className="col-4">
                            <Link to={`/ingredient/${el}`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${el}.png`} className="image" alt={el}/>
                                <p>{el}</p>
                            </Link>
                        </div>
                    )
                }
                </div>
            </div>
            <div>{meals.strMeal}</div>
            <div>{meals.strArea}</div>
            <div>{meals.strInstructions}</div>
        </div>
    );
};

export default MealDetails;