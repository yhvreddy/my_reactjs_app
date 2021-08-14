import React from 'react'
import ExpensesForm from './ExpensesForm'

const NewExpenses = (props) => {
    const expenseSaveData = expenseNewData => {
        const expenseData = {
            ...expenseNewData,
            id:Math.random().toString(),
            // id:'e'+ (parseInt(props.expenses.length) + 1)
        }
        // console.log(expenseData)
        props.onExpenseData(expenseData)
    }
    return (
        <div className='new-expense'>
            <ExpensesForm onExpenseSaveData={expenseSaveData} />
        </div>
    )
}

export default NewExpenses;