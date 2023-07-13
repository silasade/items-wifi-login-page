import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from "./logox.png"
import Title from './Components/Title';
import Form from './Components/Form'
import End from './Components/End';



function App() {
  return (
    <div className="App container-fluid">
      <div className='logo'>
      <img className='img-fluid' src={logo}/>
        
      </div>
      <br/>
        
      <Title/>
      
      <Form/>
      <End/>
    </div>
  );
}

export default App;
