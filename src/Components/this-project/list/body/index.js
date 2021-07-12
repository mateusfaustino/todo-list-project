import React,{ useState } from 'react'
import styled from 'styled-components'
import {palette} from '../../../styleguide/atoms/colors'
import Item from '../../item'

import Spacing from '../../../styleguide/atoms/spacing';
const spacing = new Spacing(8,'8px','32px')


const Container = styled.ul`
width:100%;
`
const Body =  (props) => 
    <Container>
    {props.items.map((item)=>
        <Item item={item} items={props.items} onItemChecked={props.onItemChecked} onItemDeleted={props.onItemDeleted}/>    
    )} 
    </Container>
        
export default Body
