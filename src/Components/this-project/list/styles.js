import styled from 'styled-components'
import atom from '../../styleguide/atoms'
import { palette } from '../../styleguide/atoms/colors'

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    border-radius:${atom.border};
`
const StyledList = (props)=>
    <Container>{props.children}</Container>

export default StyledList


