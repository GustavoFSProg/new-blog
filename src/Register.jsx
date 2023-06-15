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

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13864.321459381743!2d-51.16563020159699!3d-29.688449621316085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519430fe9e6c739%3A0xf84a18d61173cf13!2sR.%20J%C3%A1guari%2C%20207%20-%20Primavera%2C%20Novo%20Hamburgo%20-%20RS%2C%2093340-040!5e0!3m2!1spt-BR!2sbr!4v1686839218027!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: '0', color: 'black' }} allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>

        <h2 style={{ color: 'black' }}>
          REGISTER
        </h2>

      </ContainerDiv>

    </>
  )
}

export default Register
