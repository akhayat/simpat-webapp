import './css/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataTable } from './components/table.jsx';
import { NavBarComponent } from './components/navbar.jsx';
import Container from 'react-bootstrap/Container';
import { BrowserRouter } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <NavBarComponent />
        <Container className="content">
          <DataTable dataUrl={process.env.REACT_APP_DATA_SERVER_URL + "/table-info"} />
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;
