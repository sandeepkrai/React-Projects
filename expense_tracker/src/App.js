import  ExpenseItem  from './Components/ExpenseItem';


function App() {
  const date = new Date(2023,2,15);
  return (
    <div className="App">
      <ExpenseItem time = {date} title="Car" price="100"/>
    </div>
  );
}

export default App;
