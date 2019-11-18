import React, {useState} from 'react';
import Chart from "../components/Chart";
import {expenses} from "../helpers/mock";
import TotalPriceValues from '../Blocks/TotalPriceValues';
import SectionHeader from '../components/SectionHeader';
import { faDiceD6 } from '@fortawesome/free-solid-svg-icons';
import MonthPicker from '../components/MonthPicker';
import {getValuesSum, roundFloat} from '../helpers/helperFunctions';
import Expenses from '../Blocks/Expenses';


const Statistic = props => {
    const [currentMonth, setCurrentMonth] = useState('March');
    const [currentExpenses, setCurrentExpenses] = useState(null);
    
    const income = expenses[currentMonth].income;
    const outcome = getValuesSum(expenses[currentMonth].outcome);
    console.log(currentExpenses);
    
    return (
        <div className='container statistic'>
            <section>
                <SectionHeader header='Statistic' icon={faDiceD6}/>
                
                <MonthPicker
                    onValueChange={v => setCurrentMonth(v)}
                    value={currentMonth} />
                    
                <Chart
                    sections={expenses[currentMonth]}
                    returnValue={value => setCurrentExpenses(value)} />
    
                <Expenses currentExpenses={currentExpenses}/>
            </section>
            <TotalPriceValues
                income={income}
                outcome={roundFloat(outcome)}
            />
        </div>
    );
};

export default Statistic;
