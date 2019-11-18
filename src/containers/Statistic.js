import React, {useState} from 'react';
import Chart from "../components/Chart";
import {expenses} from "../helpers/mock";

const Statistic = props => {
    const [currentMonth, setCurrentMonth] = useState('March');

    return (
        <div className='container'>
            Here will be second page of the task
            <div className='chart__wrap'>
              <Chart sections={expenses[currentMonth]}/>
            </div>
          
        </div>
    );
};

export default Statistic;
