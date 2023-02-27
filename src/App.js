import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap'
import './App.css';
import Menu from './components/Menu';
function App() {
  return (
    <div className="App">
     <Navbar dark color="primary">
      <div className='container'>
      <NavbarBrand href="/">Ristorante My App</NavbarBrand>
      </div>

     </Navbar>

     <Menu/>
    </div>
  );
}

export default App;
