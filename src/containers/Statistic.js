import React, {useState} from 'react';
import Chart from "../components/Chart";
import {expenses} from "../helpers/mock";
import Price from '../components/Price';
import TotalPriceValues from '../Blocks/TotalPriceValues';

const Statistic = props => {
    const [currentMonth, setCurrentMonth] = useState('March');
    const [currentExpenses, setCurrentExpenses] = useState('100.25');
    
    const income = expenses[currentMonth].income;
    const outcome = Object.values(expenses[currentMonth].outcome).reduce((sum, expence) => {
        return sum + expence;
    }, 0);
    
    
    return (
        <div className='container statistic'>
            <section>
                Here will be a header
                <div className='chart__wrap'>
                    <Chart
                        sections={expenses[currentMonth]}
                        returnValue={value => setCurrentExpenses(value)}
                    />
                </div>
                <div className='text--center'>
                    <Price value={currentExpenses}/>
                </div>
            </section>
            <TotalPriceValues
                income={income}
                outcome={outcome}
            />
        </div>
    );
};

export default Statistic;
