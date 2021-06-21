import React,{ useState } from 'react'
import styled from 'styled-components'
import {palette} from '../../../style-guide/atoms/colors'
import Item from '../../item'

import Spacing from '../../../style-guide/atoms/spacing';
const spacing = new Spacing(8,'8px','32px')


const Container = styled.ul`
width:100%;
padding:8px;
min-height:100vh;
background:${palette.background.light};
`
const Body =  (props) => 
    <Container>
    {props.items.map((item)=>
        <Item item={item} items={props.items} onItemChecked={props.onItemChecked} onItemDeleted={props.onItemDeleted}/>    
    )} 
    </Container>
        
export default Body
