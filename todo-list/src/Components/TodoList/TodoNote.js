import React,{ useState } from 'react'
import styled from 'styled-components'
import { color,typography, border, breakpoint} from '../../StyleGuide/styles'
const TodoListWhapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    border-radius:${border.border4};
    background: ${color.white};
    
    
    `
    const Header = styled.div`
    border-radius: 4px 4px 0 0 ;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;        
        width:100%;
        background:${color.primary0};
        padding:8px;
        h2{
            ${typography.header_1(color.dark2)}
            font-weight: 400;
        }
    
`
const TodoListBody = styled.ul`
    width:100%;
    padding:8px;
    li{
        margin-bottom:8px;
        width:100%;
        ${typography.paragraph_bold(color.dark2)}
        border-bottom: 1px solid ${color.dark2};
    }
`
const TodoNote =  (props) => {

    return(
            <TodoListWhapper>
                <Header>
                    <h2>lista de Tarefas</h2>
                </Header>
                <TodoListBody>
                    {props.items.map((item,index)=><li key={index}>{item}</li>)}
                </TodoListBody>
            </TodoListWhapper>
    )
}
export default TodoNote
