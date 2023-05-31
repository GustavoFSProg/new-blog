import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import flores from './assets/flores.jpg'
import Header from './components/header/Header'

const Container = styled.div` 
 display: flex;
 flex-direction: column;
 width: 100vw;
 height: 100vh;
 /* background: green; */
 align-items: center;
 justify-content: center;


 @media screen and (max-width: 800px){
  /* justify-content: center; */
  justify-content: flex-start;
  margin-top: 32px;

  }
`

const AuthorContainer = styled.div` 
 display: flex;
 
 margin-top: 3px;
  width: 41rem;
  /* background: green;  */
    justify-content: space-between;
     color: black;




 @media screen and (max-width: 800px){
    /* margin-left: 410px; */
    font-size: 15px;
flex-direction: column;
align-items: center;
width: 11rem;

  }
`

const Image = styled.img` 
 display: flex;
 width:750px; 
  height:450px;
  border-radius: 15px;

  @media screen and (max-width: 800px){
    width:270px; 
  height:160px;
  /* margin-top: -270px; */
  /* align-items: center; */
 justify-content: center;

  }
`
const ViewsSpan = styled.div`  
   color: black;
   margin-top: 15px;

   @media screen and (max-width: 800px){
   
  margin-top: -11px;

  }
`


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div style={{
        display: 'flex',
        width: '100vw', height: '45px', background: 'green'
      }}>
      afasdf
    </div> */}

      <Header />
      <Container>
        <Image src={flores} alt="flores" />

        <AuthorContainer >
          <p style={{ color: 'black' }}>
            <strong >
              Autor:
            </strong>
            <span style={{ marginLeft: '8px' }} >

              Vera Sanches
            </span>
          </p>
          <ViewsSpan >
            <strong >
              Views:
            </strong>
            <span style={{ marginLeft: '8px' }} >

              36
            </span>
          </ViewsSpan>
        </AuthorContainer>
      </Container>

    </>
  )
}

export default App
