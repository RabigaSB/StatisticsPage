import React from 'react';
import Price from '../components/Price';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLevelUpAlt, faLevelDownAlt } from '@fortawesome/free-solid-svg-icons';


const TotalPriceValues = props => {
    

    return (
        <div className='total-price-values'>
            <div className='total-price-values__income'>
                +<Price value={props.income}/>
                <span className='total-price-values__icon--up'>
                    <FontAwesomeIcon icon={faLevelUpAlt} />
                </span>
            </div>
            <div className='total-price-values__outcome'>
                -<Price value={props.outcome}/>
                <span className='total-price-values__icon--down'>
                    <FontAwesomeIcon icon={faLevelDownAlt} />
                </span>
            </div>
        </div>
    );
};

export default TotalPriceValues;
