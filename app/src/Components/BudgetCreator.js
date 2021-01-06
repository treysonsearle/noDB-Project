import React, {Component  } from "react";
import BudgetList from './BudgetList';
import './BudgetCreator.css';

export default class BudgetCreator extends Component {
    constructor(){
        super()
        this.state = {
            inputIncomeAmt: '',
            inputIncomeName: '',
            inputExpenseName: '',
            inputExpenseAmt: '',
            income: {

            },
            expense: {

            },
            id: ''
            
            
            
            
 
        }
    this.pickBudget = this.pickBudget.bind( this )
    
        

    }

    handleIncomeNameChange = (event) =>{
        this.setState({inputIncomeName: event.target.value})
    }
    handleIncomeAmtChange=(event) =>{
        this.setState({inputIncomeAmt:event.target.value})
    }
    handleExpenseNameChange=(event) =>{
        this.setState({inputExpenseName: event.target.value})
    }
    handleExpenseAmtChange=(event) =>{
        this.setState({inputExpenseAmt: event.target.value})
    }

    clearBudget(){
        this.setState({income: {}})
        this.setState({expense: {}})
        this.setState({id: {}})
    }

    addIncome(key,amount ) {
        let num = parseInt(amount)
        if(num !== NaN && key !== ''){
          
          
          console.log(this.state.income[key] = amount)
          this.setState({income: {...this.state.income}})
          this.setState({inputIncomeAmt: ''})
          this.setState({inputIncomeName: ''})
        } else {
            alert("Income amount needs to be a number and needs a name")
        }
    }

    addExpense(key,amount ) {
        let num = parseInt(amount)
        if(num !== NaN && key !== ''){
          
          
          console.log(this.state.expense[key] = amount)
          this.setState({expense: {...this.state.expense}})
          this.setState({inputExpenseAmt: ''})
          this.setState({inputExpenseName: ''})
        } else {
            alert("Expense amount needs to be a number and needs a name")
        }
    }

    deleteExpense = (key) => {
        let copy = {...this.state.expense}
        delete copy[key]
        this.setState({expense: {...copy}})
      }
      
    
      deleteIncome = (key) => {
        let copy = {...this.state.income}
        delete copy[key]
        console.log(copy)
        this.setState({income: {...copy}})
        
      }

      createBudget = () => {
        const {editBudgetFn} = this.props
        const {income, expense} = this.state
        const {createBudgetFn} = this.props
        if(this.props.selectedBudgetId === this.state.id){
            console.log('hi')
            editBudgetFn(this.state.id, income, expense )
        }
        else {
            console.log('hello')


            createBudgetFn(income, expense)
            this.setState({income: {}})
            this.setState({expense: {}})
            this.setState({id: {}}) 
        }

      }

      pickBudget = (budget, id) => {
          console.log(id, 'id')
          this.props.selectedIdFn(id)
          this.setState({id: id})
          this.setState({income: {...budget.income}})
          this.setState({expense: {...budget.expense}})
          console.log(this.state.id)
      }


    


    render(){
        let {inputIncomeAmt, inputIncomeName, inputExpenseAmt, inputExpenseName} = this.state

        return (
            <span>
            <div className="creator">
                <h1>
                    Budget Creator
                </h1>
                <div>
                    <div className="income-measure"></div>
                    <div className="expense-measure"></div>
                </div>
                <div className="list-holder">
                    <h2>Income</h2>
                    <ul className="income-list">
                   
                   {Object.keys(this.state.income).map(element  =>  <li>{element} = { this.state.income[element]}
                  <button onClick={() => this.deleteIncome(element)}
                   >delete</button></li>)}
                   </ul>
                    <div className="income-btns">
                        <p>Name of income</p>

                    <input 
                        type="text"
                        onChange={ this.handleIncomeNameChange }
                        value={inputIncomeName}  />

                        <p>Amount</p> 

                        <input 
                            type="text"
                            onChange={ this.handleIncomeAmtChange }
                            value={inputIncomeAmt}/> 

                            <button onClick={() => this.addIncome(inputIncomeName, inputIncomeAmt)}>Add Income</button>
                    </div><h2>Expenses</h2>
                        <ul className="expense-list">
                            {Object.keys(this.state.expense).map(element  =>  <li>{element} = { this.state.expense[element]} {console.log(element)}
                            <button onClick={() => this.deleteExpense(element)}
                            >delete</button></li>)}
                        </ul>
                    <div className="expense-btns">
                    <p>Name of expense</p>

                    <input
                        type="text"
                        onChange={ this.handleExpenseNameChange }
                        value={inputExpenseName}  /> 
                        
                    <p>Amount</p> 
                    <input type="text"
                        onChange={ this.handleExpenseAmtChange }
                        value={inputExpenseAmt}/>
                    <button onClick={() => this.addExpense(inputExpenseName, inputExpenseAmt)}>Add Expense</button>
                </div>
                </div>
                <button onClick={() => this.createBudget()}>Add/Update Budget</button>
                <button onClick={() => this.clearBudget()}>Clear</button>
            </div>
            <BudgetList 
                      income = {this.state.income}  
                      expense = {this.state.expense}
                      budgets = {this.props.budgets}
                      selectedBudgetId = {this.props.selectedBudgetId}
                      deleteBudgetFn = {this.props.deleteBudgetFn}
                      editBudgetFn = {this.props.editBudgetFn}
                      pickBudgetFn = {this.pickBudget}
                      />
            </span>
            
        )
    }
}
      