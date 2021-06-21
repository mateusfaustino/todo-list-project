import React,{ useEffect, useState } from 'react'
import Title from '../../Components/Title'
import List from '../../Components/this-project/list'
import Item from '../../Components/TodoList/Item'
import FloatButton from '../../Components/this-project/floatActionButton/'
import StyledHome from './styles'
import AddForm from '../../Components/this-project/addForm/index'
import Spacing from '../../Components/atoms/spacing';
const spacing = new Spacing(8,'8px','32px')

const SAVED_ITEMS = 'savedItems'
    
const Todo =  (props) => {
    
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
    
    function onItemChecked (item) {
        let updatedItems = items.map((it)=>{
            if(it.id ==item.id){
                
                it.isDone=!it.isDone;
            }
            return(it)
        }) 
        setItems(updatedItems);
    }
    return(
        <StyledHome>
            <AddForm  onAddItem={onAddItem}/>
            <List onItemChecked={onItemChecked} onItemDeleted={onItemDeleted} items={items}/>
            <FloatButton/>
        </StyledHome>
    )
}
export default Todo