import React, {Component  } from "react";

export default class Budget extends Component {
    constructor(props){
        super(props)
        this.state = {
           

        }
        

    }


    render(){
        return(
            <li> Budget {this.props.budget.id}<button onClick={() => 
                {this.props.pickBudgetFn(this.props.budget, this.props.budget.id); } }>Edit</button>
                <button onClick={() => this.props.deleteBudgetFn(this.props.budget.id)}>Delete</button></li>
        )
    }
}