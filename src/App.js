import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [table, setTable] = useState(<p>loading...</p>)

  useEffect(() => {
    fetch(process.env.REACT_APP_DATA_SERVER_URL + "/table-info")
      .then((response) => response.json())
      .then((data) => {
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
      })
      .catch(() => {
        setTable(<p>An error occurred while fetching data</p>);
      });
  }, []);

  return <div className="Container">{table}</div>
}

export default App;
