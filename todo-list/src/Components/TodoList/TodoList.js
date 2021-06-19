import React,{ useState } from 'react'
import styled from 'styled-components'
import { color,typography, border, breakpoint} from '../../StyleGuide/styles'
import { MdDelete, MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'
import Item from './listItem'
import Spacing from '../atoms/spacing';
const spacing = new Spacing(8,'8px','32px')

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
    min-height:100vh;
`
const Li = styled.li`
    display:flex;
    justify-content:space-between;
    margin-bottom:8px;
    width:100%;
    ${typography.paragraph_bold(color.dark2)}
    border-bottom: 1px solid ${color.dark2};
    .text{
        display:flex;
        align-items:center;
        .checkIcon{
            &.blank{
                display:${(props)=>props.isChecked? 'none':'flex'};
            }
            &.checked{
                fill:${color.success0};
                display:${(props)=>props.isChecked? 'flex':'none'};
            }
        }
    }
    svg{
        height:21px;
        width:auto;
        fill:${color.dark2}
    }
`
const TodoList =  (props) => {

    return(
            <TodoListWhapper>
                <Header>
                    <h2>lista de Tarefas</h2>
                </Header>
                <TodoListBody>
                    {props.items.map((item)=>
                        <Item item={item} items={props.items} onItemChecked={props.onItemChecked} onItemDeleted={props.onItemDeleted}/>    
                    )} 
                </TodoListBody>
            </TodoListWhapper>
    )
}
export default TodoList
