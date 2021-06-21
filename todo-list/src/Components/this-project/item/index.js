import React,{ useState } from 'react'
import styled from 'styled-components'
import { MdDelete, MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'
import { palette } from '../../style-guide/atoms/colors'
import atom from '../../style-guide/atoms'
const Li = styled.li`
    display:flex;
    justify-content:space-between;
    margin-bottom:8px;
    width:100%;
    ${atom.typography.paragraphBold}
    
    border-bottom: 1px solid ${palette.primary.dark};
    .text{
        display:flex;
        align-items:center;
        .checkIcon{
            &.blank{
                display:${(props)=>props.isChecked? 'none':'flex'};
            }
            &.checked{
                fill:${palette.sucess.main};
                display:${(props)=>props.isChecked? 'flex':'none'};
            }
        }
    }
    svg{
        height:21px;
        width:auto;
        fill:${palette.primary.dark}
    }
`
const Item =  (props) => {
    const item = props.item;
    return(
        <Li isChecked={item.isDone?true:false} key={item.id}>
                <div className='text'>
                <MdCheckBoxOutlineBlank onClick={()=>props.onItemChecked(item)} className="checkIcon blank"/>
                <MdCheckBox onClick={()=>props.onItemChecked(item)} className="checkIcon checked"/>
                {item.text}
                </div>
                <MdDelete onClick={()=>props.onItemDeleted(item)}/>
        </Li>    
    )
}
export default Item
