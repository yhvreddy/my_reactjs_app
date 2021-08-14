import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpensesDescription from "./ExpensesDescription";
import ExpenseCard from "./ExpenseCard";

function ExpenseItem (props) {

    const {title, amount, date} = props;

    return(
        <ExpenseCard className='expense-item'>
            <ExpenseDate date={date} />
            <ExpensesDescription title={title} amount={amount}/>
        </ExpenseCard>
    )
}

export default ExpenseItem;