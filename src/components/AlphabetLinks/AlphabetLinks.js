import React from 'react';
import {Link} from "react-router-dom";

const AlphabetLinks = ({meals}) => {
    return (
        <div className="container">
            <div className="alphabet">
                {
                    meals.map(el => (
                        <span key={el}>
                        <Link to={`/browse_sort/${el}`}> {el} </Link>
                          /
                        </span>
                    ))
                }
            </div>
        </div>
    );
};
export default AlphabetLinks;