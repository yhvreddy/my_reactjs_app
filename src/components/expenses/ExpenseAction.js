import React from 'react'

function ExpenseAction(props){
    const {clickHandler} = props;

    return (
        <div className='expense-item__action'>
            <button onClick={() => clickHandler()}>Change Title</button>
        </div>
    )
}

export default ExpenseAction;