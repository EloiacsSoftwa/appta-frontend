import './App.css';
import 'tailwindcss/tailwind.css';
import First from './Components/First';
import SalesList from './Sales/Sales_List';
import ProductList from './Sales/Product_List';
import PurchaseList from './Sales/Purchase_List';
import ExpenseList from './Sales/Expense_List';



function App() {
  return (
    <div>
    {/* <First/> */}



<div>
  <SalesList />
</div>

<div>
<ProductList />
</div>

<div>
<PurchaseList />
</div>

<div>
  <ExpenseList />
</div>

    </div>
  );
}

export default App;
