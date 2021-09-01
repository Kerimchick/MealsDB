import React from 'react';
import {Link} from "react-router-dom";

const Ingredients = ({meals}) => {
    return (
        <div className="row">
                {
                    meals.map(item => (
                        <div key={item.idMeal} className="col-4">
                            <Link to={`/meal/${item.strMeal}`}>
                                <img src={item.strMealThumb} className="image" alt={item.strMeal} />
                                <div>{item.strMeal}</div>
                            </Link>
                        </div>
                    ))
                }
        </div>
    );
};

export default Ingredients;