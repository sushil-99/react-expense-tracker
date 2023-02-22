import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Expenses } from './components/Expenses';
import { Income } from './components/Income';
import { Input } from './components/Input';

function App() {
  return (
    <div>
      <h1 className='text-center mt-3' >My Expenses Tracker</h1>
      <Input/>
      <Income/>
      <Expenses/>
    </div>
  );
}

export default App;
