import styled from "styled-components"
import { MdAdd } from 'react-icons/md';

import { palette } from "../../../style-guide/atoms/colors";
import atom from "../../../style-guide/atoms";


const SearchBtn =styled.button`
width: fit-content;
height: 100%;
display: inline-flex;
align-items: center;
justify-content: center;
background-color: ${palette.secondary.main};
border-radius: 0 8px 8px 0;
margin: 0 auto;
padding: 8px 12px;
overflow: hidden;
cursor: pointer;
position: relative;
border: none;
outline: 0;
box-shadow: ${atom.shadow.shadow_2dp};
p{
    display:none;
}
svg{
    fill:${palette.secondary.onMainText};
    width:32px;
    height:32px;
}
@media (min-width: ${atom.breakpoint.mobile}) {
    p{
        display:block;
    }
    svg{
        display:none;
    }    
}
`
const Text = styled.p`
    padding:8px;
    ${atom.typography.paragraphBold}
    color:${palette.secondary.onMainText};
    text-align: center;
    &::selection {
        background-color: transparent;
    }
`   
const Button = (props)=>
    <SearchBtn onClick={props.onClick} type="button">
    <MdAdd/>
        <Text>
        {props.children}
        </Text>       
    </SearchBtn>
    
export default Button
