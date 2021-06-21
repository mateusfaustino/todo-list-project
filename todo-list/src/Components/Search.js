import React, {useState } from 'react'
import styled from 'styled-components'
import {color, shadow,border,anime,typography} from  '../StyleGuide/styles'
import {SearchButton} from './this-project/addForm/Button';
import borders from '../StyleGuide/atoms/borders';

const Container = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
`;
const Search = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    color: #fff;
    font-family: "Segoe UI", sans-serif;
    width:100%;
    max-width:900px;
    background:#fff;
    margin: 8px 0;
    border-radius: ${borders.border32};
    box-shadow:${shadow.shadow3};
    @media(max-width: 400px) {
    }
    `;
    const Input = styled.input`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    font-family: "Segoe UI", sans-serif;
    width:100%;
    hight:100%;
    border-radius:${borders.border32};
    line-height: 25px;
    border: none;
    margin: 7px 0 6px;
    padding: 0 0 0 19px;
    font-size: 18px;
    font-family: Roboto,Helvetica Neue,Arial,sans-serif;
    color: rgba(0,0,0,.87);
    word-wrap: break-word;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    background: ${color.white}!important;
    
    
    @media(max-width: 400px) {
        
    }
    `
    const ErrorMessage = styled.div`
        display:${props => props.visible ? 'flex' : 'none' };
        flex-direction:column;
        color:${color.dark2};
        width:100%;
        padding:8px;
        border-radius:${border.border8};
        box-shadow: ${shadow};
        max-width:900px;
        background:${color.warning0};
        ${anime.scaleUp}
        h2{
            margin-bottom:8px;
            ${typography.header_5}
        }
    `   
export default function SearchForm() {
    
    return (
        <Container>
            <Search >
                <Input  id={props.id} type="text" spellcheck="false" role="combobox" placeholder="Digite um CEP" aria-live="polite"></Input>
                <SearchButton onClick={()=>searchAdress()} >Pesquisar</SearchButton>
            </Search>
        </Container>
    )
}
