import React,{ useState } from 'react'
import styled from 'styled-components'
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
    padding:8px;
    margin-bottom:8px;
    border-bottom: 1px solid ${palette.primary.main};
    h2{
        ${atom.typography.header1}
        color:${palette.primary.dark};
        font-weight: 400;
    }

`
const Header =  (props) => 
    <StyledHeader>
        <h2>lista de Tarefas</h2>
    </StyledHeader>
        
export default Header
