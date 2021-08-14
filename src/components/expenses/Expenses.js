import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import NewExpenses from '../expenses/NewExpenses/NewExpenses'
import ExpensesFilter from './ExpensesFilter';

const Dummy_Expenses = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14), },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28), },
    { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12), },
];

function Expenses() {

    const currentYear = new Date().getFullYear().toString();
    const [filteredYear, setFilteredYear] = useState(currentYear);

    const [expenses, SetExpenses] = useState(Dummy_Expenses);

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        // console.log(selectedYear);
    };

    const filteredExpenses = expenses.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    });
    // console.log('filteredExpenses list');
    // console.log(filteredExpenses);

    const expenseData = expense => {
        // console.log('Main Expense data!')
        // console.log(expense)
        SetExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        })
    }

    let expenseContext = <p className='no_data_found'>No Expenses Found!</p>
    if(filteredExpenses.length > 0){
        expenseContext = filteredExpenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)
    }

    return (
        <React.Fragment>
            <NewExpenses onExpenseData={expenseData} expenses={filteredExpenses} />
            <div className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expenseContext}
            </div>
        </React.Fragment>
    )
}

export default Expenses;