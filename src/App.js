// import { useState } from 'react';
// import ExpensesFilter from './components/expenses/ExpenseFilter';
import ExpenseList from './components/expenses/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  function rand(upperBound){
    return Math.floor(Math.random()*upperBound)
  }
  function price(){
    return (Math.random() * 20).toFixed(2);
  }
  function date(){
    let y = [2018,2019,2020,2021,2022][rand(5)]
    ,m = rand(12)
    ,d = rand(30)
    // console.log( y,m,d );
    return new Date(y, m, d);
  }
  function title(){
    return ["Lettuce", "Tabasco","Burritos","Steak","Jalapenos"][rand(5)]
  }
  function generateExpenses(){
    let n = rand(25)
    ,ary = []
    ;
    for (let i = 0; i < n; i++) {
      ary.push({
        id: `e${i}`
        ,title: title()
        ,price: price()
        ,date: date()
      });
    }// for(n)
    return ary;
  }

  const expAry = generateExpenses()
  // [
  //   {id: "e1", title: 'Lettuce', price: price(), date: date()}
  //   ,{id: "e2", title: 'Tabasco', price: price(), date: date()}
  //   ,{id: "e3", title: 'Burritos', price: price(), date: date()}
  //   ,{id: "e4", title: 'Steak', price: price(), date: date()}
  //   ,{id: "e5", title: 'Jalapenos', price: price(), date: date()}
  // ]
  ;

  const onAddExpense = newExp => {
    console.log("New exp:", newExp );
  }
  ;


  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={onAddExpense} />
      <ExpenseList className="expense-list" expenseAry={expAry} />
    </div>
  );
}

export default App;
