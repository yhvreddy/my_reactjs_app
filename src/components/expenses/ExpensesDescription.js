import React from 'react'
// import ExpenseAction from "./ExpenseAction";

function ExpensesDescription(props) {
    const {title, amount} = props

    // const [titleName, setTitleName] = useState(title);

    // const clickHandler = () => {
    //     console.log("You have clicked change title button!");
    //     setTitleName('Title Updated!')
    // }

    return (
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${amount}</div>
            {/* <ExpenseAction clickHandler={clickHandler} /> */}
        </div>
    )
}

export default ExpensesDescription;