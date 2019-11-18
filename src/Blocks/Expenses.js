import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Price from '../components/Price';
import {chartSectionsIconMap, chartSectionsMap} from '../helpers/mock';

const Expenses = ({currentExpenses}) => {
    
    return (
        <div className='expenses'>
            {currentExpenses?
                <div>
                    <FontAwesomeIcon icon={chartSectionsIconMap[currentExpenses.key]}/>
                    &nbsp;&nbsp;&nbsp;
                    <Price value={currentExpenses.value}/>
                    <div className='expenses__text'>{chartSectionsMap[currentExpenses.key]}</div>
                </div>
                : null
            }
        </div>
    );
};

export default Expenses;
