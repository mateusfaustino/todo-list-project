import React from 'react'
import styled from 'styled-components';
import { typography } from '../StyleGuide/styles';
import atom from './atoms';

const Title = styled.h1`
color:#fff;
padding-bottom:32px;
display:none;
${typography.header_2('#fff')}
${atom.breakpoint.lg}{
    display:flex;
}
`
const TitleComponent = (props) => {
    return(
        <Title>{props.children}</Title>
    )
}

export default TitleComponent