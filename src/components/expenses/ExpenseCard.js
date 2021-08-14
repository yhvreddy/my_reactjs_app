import React from 'react'

function ExpenseCard(props){
    const classes = 'expenses__card '+ props.className;
    return(
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default ExpenseCard;