import React, {useState, useEffect} from 'react';
import Chart from "../components/Chart";
import TotalPriceValues from '../Blocks/TotalPriceValues';
import SectionHeader from '../components/SectionHeader';
import { faDiceD6 } from '@fortawesome/free-solid-svg-icons';
import MonthPicker from '../components/MonthPicker';
import {getValuesSum, loadExpensesFromLS, roundFloat} from '../helpers/helperFunctions';
import Expenses from '../Blocks/Expenses';


const Statistic = props => {
    const expenses = loadExpensesFromLS();
    
    const [currentMonth, setCurrentMonth] = useState('March');
    const [currentExpenses, setCurrentExpenses] = useState(null);
    
    const income = expenses[currentMonth].income;
    const outcome = getValuesSum(expenses[currentMonth].outcome);
    
    useEffect(() => {
        setCurrentExpenses(null)
    }, [currentMonth]);
    
    return (
        <div className='container statistic'>
            <section>
                <SectionHeader header='Statistic' icon={faDiceD6}/>
                
                <MonthPicker
                    expenses={expenses}
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
