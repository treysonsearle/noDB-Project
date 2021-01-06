import React, {Component} from 'react';
import Header from './Components/Header';
import BudgetCreator from './Components/BudgetCreator';
import BudgetList from './Components/BudgetList';
import axios from 'axios';
import './App.css';
//import express from 'express';
// import budgets from '../../server/budgets';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      budgets: [

    
      ],
      id: 0,
      selectedBudgetId: 0,

    }

    // this.addIncome = this.addIncome.bind(this)
    // this.addExpense = this.addExpense.bind(this)

    this.deleteBudget = this.deleteBudget.bind(this)
    this.editBudget = this.editBudget.bind(this)
    this.selectedId = this.selectedId.bind(this)
  }

  componentDidMount = () => {
    axios.get('/api/budgets').then( results => {
      this.setState({ budgets: results.data });
    })
    .catch(error => console.log(error));
    
  }
  

  // createBudget = (income, expense) => {
  //   let budget = {id: this.state.id, income, expense}
  //   this.setState({id: 1 + this.state.id})
    
  //   this.setState({budgets: [...this.state.budgets, budget]})
  // }

  
  createBudget = (income, expense) => {
    console.log(income)
    axios.post(`/api/budgets/`, {income, expense})
    .then(results => {
      this.setState({budgets: results.data});
    })
    .catch(error => 
      console.log(error));
  }



  // deleteBudget = (id) => {
    
  //   let array = [...this.state.budgets]
  //   console.log(id)
  //   console.log(array.findIndex(e => e.id === id))
  //   array.splice(array.findIndex(e => e.id === id), 1)
  //   console.log(array)
  //   this.setState({budgets: [...array]})
  // }
  deleteBudget = (id) => {
    axios.delete(`/api/budgets/${id}`)
    .then(results => {
      this.setState({budgets: results.data});
    })
    .catch(error => console.log(error));

  }
  // editBudget = (income, expense, id) => {
  //   let array = [...this.state.budgets]
  //   let index = array.findIndex(budget => budget.id === id)
  //   array[index].income = {...income}
  //   array[index].expense = {...expense}
  //   this.setState({budgets: [...array]})
  // }

  editBudget = ( id, income, expense) => {
    console.log(income)
    axios.put(`/api/budgets/${id}`, {income, expense})
    .then(results => {
      this.setState({budgets: results.data});
    })
    .catch(error => console.log(error));
  }

  selectedId = (id) => {
    this.setState({selectedBudgetId: id})
  }

  addIncome = (key, amount) => {
    
    let num = parseInt(amount)
    if(num !== NaN && key !== ''){
      let copy = this.state.budgets
      copy.find(e => e.id === this.state.selectedBudgetId).income[key] = amount
      this.setState({budgets: [...this.state.budgets]})
    } else {
        alert("Income amount needs to be a number and needs a name")
    }
    console.log('click')
    
  }

  addExpense = (key, amount) => {
    let num = parseInt(amount)
    if(num !== NaN && key !== ''){
      let copy = this.state.budgets
      copy.find(e => e.id === this.state.selectedBudgetId).expense[key] = amount
      this.setState({budgets: [...this.state.budgets]})
    } else {
        alert("Expense amount needs to be a number and needs a name")
    }
    console.log('click')
  }



  render(){

    console.log(this.state.budgets)
    return (
      <main className="App">
        <Header />
        <BudgetCreator 
          createBudgetFn = {this.createBudget}
          budgets = {this.state.budgets}
          selectedBudgetId = {this.state.selectedBudgetId}
          selectedIdFn = {this.selectedId}
          deleteBudgetFn = {this.deleteBudget}
          editBudgetFn = {this.editBudget}
          />


      </main>
    )
  }
}

export default App;



