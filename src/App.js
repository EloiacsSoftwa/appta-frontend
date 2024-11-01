import './App.css';
import 'tailwindcss/tailwind.css';
import First from './Components/First';
import ProductList from './Product Pages/ProductList';
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div className="App">
    <ProductList/>
    <Sidebar />
    </div>
  );
}

export default App;
