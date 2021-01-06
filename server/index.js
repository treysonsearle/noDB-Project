const express = require('express')
const budgetContoller = require('./budgets');



const app = express()

const port = 4444

app.use(express.json());

app.get('/api/budgets',  budgetContoller.getBudgets)
app.get( `/api/budgets/:id`,  budgetContoller.getBudget)
app.put( `/api/budgets/:id`,  budgetContoller.editBudget)

app.post('/api/budgets/',  budgetContoller.createBudget)
app.delete('/api/budgets/:id',  budgetContoller.deleteBudget)

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})