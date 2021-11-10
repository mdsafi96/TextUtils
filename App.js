import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Component/Navbar';
import TextForms from './TextForms';
 function App(){
  return (
    <>
    <Navbar title="Shahzad"/>
    
   <TextForms Heading="Enter your text here"/>
</>
  )
};


export default App;