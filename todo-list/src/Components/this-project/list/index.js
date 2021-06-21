import React,{ useState } from 'react'
import styled from 'styled-components'
import { color,typography, border, breakpoint} from '../../../StyleGuide/styles'
import { MdDelete, MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'
import Spacing from '../../atoms/spacing';
import StyledList from './styles'
import Header from './header'
import Body from './body'
const spacing = new Spacing(8,'8px','32px')


const TodoList =  (props) => 

    <StyledList>
        <Header/>
        <Body items={props.items} onItemChecked={props.onItemChecked} onItemDeleted={props.onItemDeleted}/>
    </StyledList>
    

export default TodoList
