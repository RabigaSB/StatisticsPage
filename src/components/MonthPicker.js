import React, {useState, useEffect} from 'react';
import {expenses} from '../helpers/mock';

const MonthPicker = props => {
    
    
    const [value, setValue] = useState('January');
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        Object.keys(expenses).map((month, index) => {
            if (month === props.value)
                setIndex(index);
        });
    }, []);
    
    useEffect(() => {
        setValue(props.value);
    }, [props.value]);
    
    return (
        <div
            style={{transform: `translateX(${(2 - index) * 100}px)`}}
            className='month-picker'>
            {Object.keys(expenses).map((month, index) => {
                return (
                    <input
                        onClick={e => {
                            const value = e.target.value;
                            setIndex(index);
                            props.onValueChange(value);
                        }}
                        readOnly
                        key={month}
                        value={month}
                        className={`month-picker__month
                        ${month === value? 'month-picker__month--active' : ''}`}
                    />
                )
            })
            }
        
        </div>
    );
};

export default MonthPicker;
