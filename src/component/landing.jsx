import ExpenseTracker from "./expenseTracker"
import Income from "./income"
import Expense from "./expense"

const Landing = () =>{
return (
<div className="flex justify-center gap-1">
    <Income />
    <ExpenseTracker />
    <Expense />
</div>

)

}

export default Landing 