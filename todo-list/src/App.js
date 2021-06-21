import Home from './Pages/home/index'
import Navbar from './Components/style-guide/molecules/Header/index';
import Grid from './Components/style-guide/atoms/grid';
import Spacing from './Components/style-guide/atoms/spacing';
import GlobalStyle from './Components/style-guide/atoms/global';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

const spacing = new Spacing(8,'8px','32px')
const appLinks= {
  sorce:'https://github.com/mateusfaustino/consulta-de-endereco-pelo-cep',
  github:'https://github.com/mateusfaustino/',
  likedin:'https://www.linkedin.com/in/mateus-faustino-021967172/',
  email:'mailto:mateusfaustino2017@gmail.com'
}
const App = () =>  
   <Router>
     <GlobalStyle/>
     <Navbar appLinks={appLinks}/>
     <Switch>
       <Route path='/'>
         <Home/>
       </Route>
     </Switch>
   </Router>

export default App;
