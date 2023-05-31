import { useState } from 'react'
import styled from 'styled-components'
import Header from './components/header/Header'
import React from 'react'

const ContainerDiv = styled.div` 
 display:flex;
 width: 100vw;
 height: 100vh;
 align-items: center;
 justify-content: center;

@media screen and (max-width: 800px){
  display: flex;
  /* width: 100vw */
    }
 `

const FormContainer = styled.div`
   display: flex;
    width: 50%;
     align-items: center;
               justify-content: center; 
               margin-right: 115px;


@media screen and (max-width: 800px){
  display: flex;
  margin-top: 300px;
  margin-left: 100rem;
    }

 `

export const Button = styled.button` 
 display: flex;
  margin-top: -34px; height: 40px;
              border-radius: 5px; border: none ; background: lightblue;
               width: 33.5rem; margin-left: 30px; align-items: center;
              justify-content: center;
cursor: pointer; 
              transition: 0.6s;

              &:hover {
                background: green;
              }

@media screen and (max-width: 800px){
 display: flex;
 width: 113%;
   }
`

function Register() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  return (
    <>
      <Header />
      <ContainerDiv>

        <h2 style={{ color: 'black' }}>
          REGISTER
        </h2>

      </ContainerDiv>

    </>
  )
}

export default Register
