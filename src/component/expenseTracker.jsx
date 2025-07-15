const ExpenseTracker = () => {
  //const categories = [""]

  return (
    <div className="flex flex-col h-full items-center w-[500px] border-black border-[1px] bg-gray-100 rounded-lg shadow-lg p-4 ">
      <h2 className="text-green-500">Expense Tracker</h2>
      <h3 className="text-gray-700">Balance</h3>
      <h2 className="text-gray-900">300$</h2>
      <div className="flex flex-col w-full p-3 gap-3">
        <select className="border p-2 rounded" defaultValue="">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select className="border p-2 rounded">
          <option value="">Category</option>

          
        </select>
           <input
          type="number"
          placeholder="Amount"
          className="p-2 rounded border"
          min="0"
        />
        <input type="date" className="p-2 rounded border" />
        </div>
      <div>
        <button className="border-black border-[1px] bg-gray-200 text-xs font-medium px-5 py-1 rounded"> Add New Item </button>
      
      </div>
     
    </div>
  );
};

export default ExpenseTracker;
