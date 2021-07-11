// import React, { useState } from 'react';

import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';

function ExpenseItem(props){
    // console.log(props.data);

    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate data={props.data} />
            <div className="expense-item__description">
                <h2>{props.data.title}</h2>
                <div className="expense-item__price">${props.data.amount}</div>
            </div>
            {/* <button onClick={onClick} >Change Title</button> */}
        </Card>
        </li>
    )
}

export default ExpenseItem;