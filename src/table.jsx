import './css/table.css';
import { useState, useEffect } from 'react'

export function DataTable({dataUrl}) {
  const [table, setTable] = useState(<p>loading...</p>)

  useEffect(() => {
    fetch(dataUrl)
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
