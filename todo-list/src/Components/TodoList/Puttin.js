import PuttinGif from './putin.crdownload'
import React, { useState } from 'react'
import styled from 'styled-components'
import { anime } from '../../StyleGuide/styles'

const PuttinDancing = styled.img`
    position:absolute;
    display: ${(props)=>props.isVisible?"block":"none"};
    ${anime.fastAppearing}
`

const Puttin = (props)=>{
    return(
        <PuttinDancing  isVisible={props.isPuttinDancing} src={PuttinGif}></PuttinDancing>
    )
}

export default Puttin
