import React from 'react'
import styled from 'styled-components'
import atom from '../../../style-guide/atoms'
import { palette } from '../../../style-guide/atoms/colors'
import Button from '../button'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    color: #fff;
    font-family: "Segoe UI", sans-serif;
    width:100%;
    background:#fff;
    margin: 8px 0;
    border-radius: ${atom.border.border8};
    box-shadow:${atom.shadow.shadow_3dp};

`
const Input = styled.input`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    font-family: "Segoe UI", sans-serif;
    width:100%;
    hight:100%;
    border-radius:${atom.border.border8};
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
    background: ${palette.background.light}!important;

`
const InputComponent = (props) =>
    <Container >
            <Input  value={props.value} onChange={props.onChange}  type="text" spellcheck="false" role="combobox" placeholder={props.placeholder} aria-live="polite"></Input>
            <Button onClick={props.onClickButton}>{props.buttonText}</Button>
    </Container>

export default InputComponent
 