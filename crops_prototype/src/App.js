import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import CustomerOrder from './components/sales/CustomerOrder';

function App() {
  return (
    <div className="App">
     {/* <Home /> */}
     <CustomerOrder />
    </div>
  );
}

export default App;
