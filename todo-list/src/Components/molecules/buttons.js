import React from 'react'
import styled from 'styled-components'
import atom from '../atoms'
import { hover } from '../atoms/backgrounds'

const StyledButton = styled.button`
    position: relative;

    display: block;
    margin: 30px auto;
    padding: 0;
    box-shadow: ${atom.shadow.shadow_3dp};

    ${(props) => props.Width ? `width:${props.Width};` : '' }
    ${(props) => props.Background ? props.Background : `${atom.background.primary}` }
    
    &:hover, &:focus {
        ${(props) => props.Hover ? props.Hover : `` }
        box-shadow: ${atom.shadow.shadow_1dp};
    }
    overflow: hidden;

    border-width: 0;
    outline: none;
    border-radius: 2px;
    
    
    transition: background-color .3s;
    ${atom.animation.buttonClick}
    
`
const Label = styled.span`
    display: block;
    padding: 12px 24px;
`
const Button = (props)=>{
    return(
        <StyledButton Hover={props.Hover} Background={props.Background} Width={props.Width} class="btn" type="button">
            <Label>{props.children}</Label>
        </StyledButton>
    )
} 

export default Button