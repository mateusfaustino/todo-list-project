import React,{useState} from 'react'
import Input from '../Input'

const TodoForm =  (props) => {
    const [text, setText] = useState()
    
    function handleChange(event) {
        let typedText = event.target.value
        setText(typedText)
    }
    function AddItem(event) {
        event.preventDefault()
        if(text){
            setText("")
            props.onAddItem(text)
        }
    }
    return(
        <form>
            <Input value={text} onClickButton={AddItem} onChange={handleChange} buttonText="Adicionar" placeholder="Adicione uma tarefa" type='text'></Input>               
        </form>
    )
}

export default TodoForm