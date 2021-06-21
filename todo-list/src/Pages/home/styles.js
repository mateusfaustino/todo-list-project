import styled from 'styled-components'
import { anime,color,typography, border, breakpoint} from '../../StyleGuide/styles'
import Spacing from '../../Components/style-guide/atoms/spacing';
import { palette } from '../../Components/style-guide/atoms/colors';
const spacing = new Spacing(8,'8px','32px')

const Container = styled.div`
    width:100%;
    margin:auto;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    background:${palette.background.main};
    width:100%;
    padding: 20vw ${spacing.margin};
    form{
        width:100%;
    }
    @media (min-width: ${breakpoint.mobile}) {
        padding: 10vw ${spacing.margin};
    }
    
`

const StyledHome = (props)=>
    <Container>
        {props.children}
    </Container>

export default StyledHome
