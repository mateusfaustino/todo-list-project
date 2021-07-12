import React,{ useState } from 'react'
import styled from 'styled-components'
import { MdDelete, MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'
import { palette } from '../../styleguide/atoms/colors'
import atom from '../../styleguide/atoms'
const Li = styled.li`
    display:flex;
    justify-content:space-between;
    margin-bottom:8px;
    padding:8px;
    width:100%;
    background:${palette.background.light};
    box-shadow:${atom.shadow.shadow_4dp};
    ${atom.typography.paragraphBold}
    
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
        height:24px;
        width:auto;
        fill:${palette.primary.dark};
        margin-right:8px;
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
