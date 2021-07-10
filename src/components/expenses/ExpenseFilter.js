import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

	const [filterYear, setFilterYear] = useState( props.filterYear )
	,onChangeYear = event => {
		let year = +event.target.value;//cast to int to match date
		console.log("onChangeYear/", year );
		setFilterYear( year );
		props.onFilterYear( year );
	}



  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={filterYear}
								onChange={onChangeYear} >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;