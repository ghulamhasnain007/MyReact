import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Hello World"
  const list = ["ABC", 123, "Hello"]
  const data = "We are United"
  const dataList = {name: "Hello World 1",age: 23,name: "Hasnain" }
  return (
    <div className="App">
      
      <p>{name}</p>
      <div>
        {list.map((value, index) => (
          <p key={index}>{value}</p>
        ))}
      </div>
      <p>{data}</p>
      {/* <div>
    {dataList.map((value, index) => (
      <p key={index}>{value.age}</p>
    ))}
  </div> */}
    </div>
  );
}

export default App;
