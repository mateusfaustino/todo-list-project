import React,{ useState } from 'react'
import styled from 'styled-components'
import { color,typography, border, breakpoint} from '../../../../StyleGuide/styles'
import atom from '../../../style-guide/atoms'
import {palette} from '../../../style-guide/atoms/colors'
import Spacing from '../../../atoms/spacing';
import Item from '../../../TodoList/listItem'

const spacing = new Spacing(8,'8px','32px')


const Container = styled.ul`
width:100%;
padding:8px;
min-height:100vh;
`
const Body =  (props) => 
    <Container>
    {props.items.map((item)=>
        <Item item={item} items={props.items} onItemChecked={props.onItemChecked} onItemDeleted={props.onItemDeleted}/>    
    )} 
    </Container>
        
export default Body
