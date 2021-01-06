import React, {Component  } from "react";
import './BudgetList.css';
import Budget from './Budget';



const BudgetList = props =>  {
    const mappedBudgets = props.budgets.map((budget, i) => (
        <Budget 
            key={i}
            budget={budget}
            pickBudgetFn = {props.pickBudgetFn}
            deleteBudgetFn = {props.deleteBudgetFn}/>
    ))

    return(
            <aside className="budgets-container">
                <h2>List of Budgets</h2>
                <ol className="budgets-list">
                    {mappedBudgets}
                   </ol> 
                 </aside>   
                )

                
                }          

                    
 





    export default  BudgetList;