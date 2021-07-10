// import React, { useState } from 'react';

import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';

function ExpenseItem(props){
    // console.log(props.data);

    // create state for title & extract into local const for use in the jsx template (also cannot be assigned to [that is wrong use])
    // Also extract/name the matching setter for it (which we also don't want to overwrite)
    // const [title, setTitle] = useState(props.title);// always returns 2 elements, current value & method to set it, names are by convention

    // const onClick = click => {
    //     // title = "asd";// wrong & fails bc it's a const
    //     setTitle(`test`);// correct & triggers ui update
    //     console.log("onClick/", title, click );
    //     console.log("onClick/ og data:", props.data );
    // }

    return (
        <Card className="expense-item">
            <ExpenseDate data={props.data} />
            <div className="expense-item__description">
                <h2>{props.data.title}</h2>
                <div className="expense-item__price">${props.data.price}</div>
            </div>
            {/* <button onClick={onClick} >Change Title</button> */}
        </Card>
    )
}

export default ExpenseItem;