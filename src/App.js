import { Container } from 'react-bootstrap';
import './App.scss';
import SearchPage from './pages/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviePage from './pages/MoviePage';
import Switch from 'react-bootstrap/esm/Switch';
import { Redirect, Route, Router } from 'react-router';

function App() {
  return (
    <Container fluid>
      <Route path='/' component={SearchPage} exact />
      <Route path='/home' component={SearchPage} exact />
      <Route path='/moviepage' component={MoviePage} exact />
    </Container >
  );
}

export default App;
