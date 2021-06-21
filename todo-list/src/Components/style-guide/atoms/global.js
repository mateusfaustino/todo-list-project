import { createGlobalStyle } from 'styled-components';
import {palette} from './colors';
import scroll from './scroll'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${palette.background.main};
    ${scroll}
  }
  li{
    list-style:none;
  }
  a{
    text-decoration:none;
  }
`
const Global = (props) => <GlobalStyle/>
    
export default Global
