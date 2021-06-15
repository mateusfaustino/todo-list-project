import React from 'react'
import styled from 'styled-components';
import { typography } from '../StyleGuide/styles';

const Title = styled.h1`
color:#fff;
padding-bottom:32px;
${typography.header_2('#fff')}
`
const TitleComponent = (props) => {
    return(
        <Title>{props.children}</Title>
    )
}

export default TitleComponent