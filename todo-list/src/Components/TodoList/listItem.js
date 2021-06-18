import React,{ useState } from 'react'
import styled from 'styled-components'
import { color,typography, border, breakpoint} from '../../StyleGuide/styles'
import { MdDelete, MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'
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
const Item =  (props) => {
    const item = props.item;
    return(
        <div>
            <Li isChecked={item.isDone?true:false} key={item.id}>
                    <div className='text'>
                    <MdCheckBoxOutlineBlank onClick={()=>props.onItemChecked(item)} className="checkIcon blank"/>
                    <MdCheckBox onClick={()=>props.onItemChecked(item)} className="checkIcon checked"/>
                    {item.text}
                    </div>
                    <MdDelete onClick={()=>props.onItemDeleted(item)}/>
            </Li>
        </div>    
    )
}
export default Item
