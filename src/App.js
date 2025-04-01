import './css/App.css';
import { DataTable } from './table.jsx';

function App() {
  console.log()
  return <DataTable dataUrl={process.env.REACT_APP_DATA_SERVER_URL + "/table-info"} />
}

export default App;
