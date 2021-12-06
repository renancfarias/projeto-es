import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import '@fontsource/roboto/300.css'
import SignIn from './components/SignIn'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import Card from './components/Card'
import Form from './components/Form'
import Results from './components/Results'
import {useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


// function App() {

//   const [login, setLogin] = useState(false)

//     if (login == false){
//       return (
//         <>
//           <SignIn login = {()=>setLogin()}/>
//           <Footer />
//         </>
//       )
//     }else{
//       return(
//         <>
//           <h1>Logado com sucesso!!</h1>
//           <Card/>
//         </>
      
//       )
//     }
// }

// function App() {
//   return(
//     <>       
//       <Card nome= 'Fulano' cargo='Prefeito' partido='PPP'/>
//     </>
//   )       

// }

function App() {
    return(
     <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="cadastro" element={<SignUp />} />
          <Route path="form" element={<Form />} />
          <Route path="resultados" element={<Results />} />
        </Routes>
      </BrowserRouter>
      </>
    )      
  
  }

export default App;
