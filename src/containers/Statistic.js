import React, {useState} from 'react';
import Chart from "../components/Chart";
import {expenses} from "../helpers/mock";
import Price from '../components/Price';

const Statistic = props => {
    const [currentMonth, setCurrentMonth] = useState('March');

    return (
        <div className='container'>
            Here will be second page of the task
            <div className='chart__wrap'>
              <Chart sections={expenses[currentMonth]}/>
            </div>
          <Price value={expenses[currentMonth].income}/>
        </div>
    );
};

export default Statistic;
