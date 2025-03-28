import './App.css';
import { useState } from 'react'
import $ from 'jquery';

function App() {
  const [table, setTable] = useState(<p>loading...</p>)

  $.getJSON("http://157.230.203.35:8000/table-info", function (data) {
    setTable(
    <table className="DataTable">
      <thead>
        <tr key={"header"}>
          {Object.keys(data[0]).map((prop) => (<th key={prop}>{prop}</th>))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.TableName}>
            {Object.values(item).map((val, index) => (<td key={index}>{val}</td>))}
          </tr>
        ))}
      </tbody>
    </table>)
  });

  return <div className="Container">{table}</div>
}

export default App;
