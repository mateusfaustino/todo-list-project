import TodoList from './Pages/TodoList'
import Navbar from './Components/Header';
import scroll from './StyleGuide/atoms/scroll';
import { animation, color } from './StyleGuide/styles';
import { createGlobalStyle } from 'styled-components';
import Grid from './Components/atoms/grid';
import Spacing from './Components/atoms/spacing'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const spacing = new Spacing(8,'8px','32px')
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ${scroll}
  ${animation}
  body{
    background: ${color.dark2};
  }
  li{
    list-style:none;
  }
  a{
    text-decoration:none;
  }
`
const appLinks= {
  sorce:'https://github.com/mateusfaustino/consulta-de-endereco-pelo-cep',
  github:'https://github.com/mateusfaustino/',
  likedin:'https://www.linkedin.com/in/mateus-faustino-021967172/',
  email:'mailto:mateusfaustino2017@gmail.com'
  }
function   App() {
  return (
   <Router>
     <GlobalStyle/>
     <Navbar spacing={spacing} appLinks={appLinks}/>
     <Switch>
       <Route path='/'>
         <TodoList/>
       </Route>
     </Switch>
     <Grid Gap={spacing.gap} Margin={spacing.margin} Columns={spacing.columns}/>
   </Router>
  );
}

export default App;
