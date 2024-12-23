import './App.css';
import Customer from './components/Customer'

const customer = {
  'id' : 1,
  'name' : '바이동',
  'birthday': '9661222',
  'gender': '남자',
  'job' :'대학생'
}

function App() {
  return (
    <div className="App">
      <h2>
        <Customer
          
          name={customer.name}
          birthday={customer.birthday}
          gender={customer.gender}
          job={customer.job}        
        />
      </h2>
    </div>
  );
}

export default App;
