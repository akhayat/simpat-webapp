import 'bootstrap/dist/css/bootstrap.min.css';
import { DataTable } from './components/table.jsx';
import { NavBarComponent } from './components/navbar.jsx';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, useSearchParams, Outlet } from 'react-router';


function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <Container fluid>
      <NavBarComponent />
      <Routes>
        <Route path='/search' exact
               element={<DataTable dataUrl={process.env.REACT_APP_DATA_SERVER_URL + "/search"}
               searchParams={searchParams.toString()} />}/>
        <Route path="/generate" exact element={<p>not implemented yet</p>}/>
        <Route path='/' index element={<DataTable dataUrl={process.env.REACT_APP_DATA_SERVER_URL + "/table-info"} />} />
      </Routes>
    </Container>
  );
}

export default App;
