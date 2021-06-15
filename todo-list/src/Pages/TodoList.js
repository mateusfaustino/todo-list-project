import React,{ useState } from 'react'
import styled from 'styled-components'
import { color,typography, border, breakpoint} from '../StyleGuide/styles'
import Input from '../Components/Input'
import Title from '../Components/Title'
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
const TodoListWhapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    border-radius:${border.border4};
    background: ${color.white};
    
    
    `
    const Header = styled.div`
    border-radius: 4px 4px 0 0 ;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;        
        width:100%;
        background:${color.primary0};
        padding:8px;
        h2{
            ${typography.header_1(color.dark2)}
            font-weight: 400;
        }
    
`
const TodoListBody = styled.ul`
    width:100%;
    padding:8px;
    li{
        margin-bottom:8px;
        width:100%;
        ${typography.paragraph_bold(color.dark2)}
        border-bottom: 1px solid ${color.dark2};
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
        setItems(([...items, text]))
        setText("")
        
    }
    return(
        <Container>
            <Title>To-Do List</Title>
            <form>
                <Input value={text} onClickButton={AddItem} onChange={handleChange} buttonText="Adicionar" placeholder="Adicione uma tarefa" type='text'></Input>               
            </form>
            <TodoListWhapper>
                <Header>
                    <h2>lista de Tarefas</h2>
                </Header>
                <TodoListBody>
                    {items.map((item,index)=><li key={index}>{item}</li>)}
                </TodoListBody>
            </TodoListWhapper>
        </Container>

    )
}
export default Todo
