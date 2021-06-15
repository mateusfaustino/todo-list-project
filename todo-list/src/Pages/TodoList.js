import React,{ useState } from 'react'
import styled from 'styled-components'
import { color,typography, border, breakpoint} from '../StyleGuide/styles'
import Input from '../Components/Input'
import Title from '../Components/Title'
import TodoNote from '../Components/TodoList/TodoNote'
const Container = styled.div`
    width:100%;
    margin:auto;
    max-width:900px;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    background:#10101E;
    width:100%;
    padding: 20vw 10vw;
    form{
        width:100%;
    }
    @media (min-width: ${breakpoint.mobile}) {
        padding: 10vw 10vw;
    }
    
`
    
const Todo =  (props) => {
    
    const [items, setItems] = useState([])
    const [text, setText] = useState()
    function handleChange(event) {
        let typedText = event.target.value
        setText(typedText)
    }
    function AddItem(event) {
        event.preventDefault()
        if(text){
            setItems(([...items, text]))
            setText("")
        }
    }
    return(
        <Container>
            <Title>To-Do List</Title>
            <form>
                <Input value={text} onClickButton={AddItem} onChange={handleChange} buttonText="Adicionar" placeholder="Adicione uma tarefa" type='text'></Input>               
            </form>
            <TodoNote items={items}/>
        </Container>

    )
}
export default Todo
