import React,{ useState } from 'react'
import styled from 'styled-components'
import { color,typography, border, breakpoint} from '../../../../StyleGuide/styles'
import atom from '../../../style-guide/atoms'
import {palette} from '../../../style-guide/atoms/colors'
import Spacing from '../../../style-guide/atoms/spacing';
const spacing = new Spacing(8,'8px','32px')


const StyledHeader = styled.div`
border-radius: 4px 4px 0 0 ;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;        
    width:100%;
    background:${palette.primary.main};
    padding:8px;
    h2{
        ${atom.typography.header1}
        color:${palette.primary.onMainText};
        font-weight: 400;
    }

`
const Header =  (props) => 
    <StyledHeader>
        <h2>lista de Tarefas</h2>
    </StyledHeader>
        
export default Header
