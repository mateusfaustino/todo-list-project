import React,{ useEffect, useState } from 'react'
import styled from 'styled-components'
import { anime,color,typography, border, breakpoint} from '../StyleGuide/styles'
import Title from '../Components/Title'
import TodoList from '../Components/TodoList/TodoList'
import TodoForm from '../Components/TodoList/TodoForm'
import Item from '../Components/TodoList/Item'
import PuttinDancing from '../Components/TodoList/Puttin'
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
const SAVED_ITEMS = 'savedItems'
    
const Todo =  (props) => {
    
    const [puttinDancing, setPuttinDancing] = useState(false)
    const [items, setItems] = useState([])
    useEffect(()=>{
        let savedItems = JSON.parse( localStorage.getItem(SAVED_ITEMS));
        if(savedItems){
            setItems(savedItems);
        }
    },[])
    useEffect(()=>{
        localStorage.setItem(SAVED_ITEMS,JSON.stringify(items))
    },[items])
    function onAddItem(text) {
        let it = new Item(text);
        setItems(([...items, it]))
    }
    
    function onItemDeleted(item){
        let filteredItems = items.filter((it)=> it.id!=item.id)
        if(window.confirm(`Deseja apagar o item ${item.text}? `)) {
            setItems(filteredItems)
        }
    }
    function onPuttingDancing() {
        setPuttinDancing(true)
        setTimeout((time)=>{ 
            setPuttinDancing(false)
        }, 3000);
    }
    function onItemChecked (item) {
        let updatedItems = items.map((it)=>{
            if(it.id ==item.id){
                if(it.isDone==false){
                    onPuttingDancing()
                }
                it.isDone=!it.isDone;
            }
            return(it)
        }) 
        setItems(updatedItems);
    }
    return(
        <Container>
            <Title>To-Do List</Title>
            <TodoForm onAddItem={onAddItem}/>
            <TodoList onItemChecked={onItemChecked} onItemDeleted={onItemDeleted} items={items}/>
            <PuttinDancing isPuttinDancing={puttinDancing} onPuttingDancing={onPuttingDancing}/>
        </Container>
    )
}
export default Todo