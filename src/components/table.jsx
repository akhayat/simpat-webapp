import './css/table.scss';
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

export function DataTable({dataUrl, searchParams}) {
  const loading = <p>loading...</p>
  const [table, setTable] = useState(loading)

  useEffect(() => {
    setTable(loading);
    fetch(dataUrl + (searchParams ? "?" + searchParams : ""))
      .then((response) => response.json())
      .then((data) => {
        setTable(
          <Table className="data-table" striped hover>
            <thead>
              <tr key={"header"}>
                {Object.keys(data[0]).map((prop) => (<th key={prop}>{prop}</th>))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((val, index) => (<td key={index}>{val}</td>))}
                </tr>
              ))}
            </tbody>
          </Table>)
      })
      .catch(() => {
        setTable(<p>An error occurred while fetching data</p>);
      });
  }, [dataUrl, searchParams]);

  return <Container>{table}</Container>
}
