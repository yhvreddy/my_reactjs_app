import React from "react"
import ExpenseItem from "./ExpenseItem"

const ExpensesList = props => {

    if(props.items.length === 0){
        return <p className='no_data_found expenses-list__fallback'>No Expenses Found!</p>     
    }

    return <ul className='expenses-list'>
        {props.items.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)}
    </ul>
}

export default ExpensesList