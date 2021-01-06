
const budgets = [];
let id = 0;

module.exports = {

    getBudgets: (req, res) => {
        res.status(200).send(budgets)
    },
    getBudget: (req, res) => {
        const {id} = req.params,
        //const {budget} = req.body;
        budget = budgets.find(element => element.id === +id);
        res.status(200).send(budget)
    },
    createBudget: (req, res) => {
        const{income, expense} = req.params;
        const budget = {}
        budget.income = income
        budget.expense = expense
        budget.id = id;
        id++;

        budgets.push(budget);
        res.status(200).send(budgets);
    },
    editBudget: (req, res) => {
        const {id} = req.params;
        const { income, expense, } = req.body;
        //const {budget} = req.body;
        console.log(req.body)
        let index = budgets.findIndex(element => element.id === +id);
        console.log(index)
        budgets[index].income = income
        budgets[index].expense = expense
        res.status(200).send(budgets);
    },


    deleteBudget: (req, res) => {
        const {id} = req.params;
        const index = budgets.findIndex(element => element.id === +id);
        budgets.splice(index, 1);
        console.log(budgets)
        res.status(200).send(budgets);
    },

    
}