import React, {useState} from 'react';
import Chart from "../components/Chart";
import {expenses} from "../helpers/mock";

const Statistic = props => {
    const [currentMonth, setCurrentMonth] = useState('January');

    return (
        <div className='container'>
            Here will be second page of the task
            <Chart sections={expenses[currentMonth]}/>
        </div>
    );
};

export default Statistic;
