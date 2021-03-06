import {styled} from '@material-ui/core/styles'
import Fab from '@material-ui/core/fab'
import atom from '../../style-guide/atoms'
import Spacing from '../../style-guide/atoms/spacing';
import { palette } from '../../style-guide/atoms/colors';
import { MdAdd } from 'react-icons/md';
const spacing = new Spacing(8,'8px','32px')


const FloatButton = styled(Fab)({
    background:palette.secondary.main,
    color:palette.secondary.onMainText,
    bottom:'32px',
    position:'fixed',
    right: `calc(${spacing.margin} + ${spacing.cs})`,
    
    '&:hover':{
        background:palette.secondary.dark,
    }
})

export default function Float (props){
    return(
        <FloatButton ><MdAdd/></FloatButton>
    )
}
