import React from 'react';
import {Link} from "react-router-dom";

const CountriesList = ({meals}) => {
    return (
        <div>
            <div>
                {
                    Object.keys(meals).map(elem => (
                        <Link to={`/browse_country/${meals[elem]}`}>
                            <img src={`https://www.themealdb.com/images/icons/flags/big/64/${elem}.png`}
                                 className="image" alt="#"/>
                        </Link>
                    ))
                }
            </div>
        </div>)
};

export default CountriesList;