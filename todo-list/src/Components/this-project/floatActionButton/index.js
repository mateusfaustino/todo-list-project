import {styled} from '@material-ui/core/styles'
import Fab from '@material-ui/core/fab'
import atom from '../../atoms'
import { flexbox } from '@material-ui/system'

const FloatButton = styled(Fab)({
    background:atom.color.primary,
    bottom:'32px',
    position:'absolute',
    '&:hover':{
        background:atom.color.primary_dark,
    }
})

export default function Float (props){
    return(
        <FloatButton color='primary'>+</FloatButton>
    )
}
