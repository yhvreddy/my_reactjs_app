import React, {useState} from 'react'
import ExpensesForm from './ExpensesForm'

const NewExpenses = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const expenseSaveData = expenseNewData => {
        const expenseData = {
            ...expenseNewData,
            id:Math.random().toString(),
            // id:'e'+ (parseInt(props.expenses.length) + 1)
        }
        // console.log(expenseData)
        props.onExpenseData(expenseData)
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    };
    
    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && (<button onClick={startEditingHandler}>Add New Expense</button>)}
            {isEditing && (<ExpensesForm onExpenseSaveData={expenseSaveData} onCancel={stopEditingHandler} />)}
        </div>
    )
}

export default NewExpenses;