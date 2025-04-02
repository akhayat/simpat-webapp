import './css/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataTable } from './components/table.jsx';

function App() {
  console.log()
  return <DataTable dataUrl={process.env.REACT_APP_DATA_SERVER_URL + "/table-info"} />
}

export default App;
