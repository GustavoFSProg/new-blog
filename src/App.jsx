import { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import Header from './components/header/Header'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import api from './api'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Container = styled.div` 
 display: flex;
 flex-direction: column;
 width: 100vw;
 height: 100vh;
 /* background: green; */
 align-items: center;
 justify-content: center;
 /* margin-top: 200px;  */


 @media screen and (max-width: 800px){
  /* justify-content: center; */
  justify-content: flex-start;
  margin-top: 32px;
 height: 58rem;

  }
`



const H1 = styled.h1` 
 /* display: flex; */
 color: #333333;
  margin-top: 83px;
  margin-bottom: 24px;


 @media screen and (max-width: 800px){
  margin-top: 3px;


  }
`

const ContainerText = styled.div` 
 display: flex;
 flex-direction: column;
 width: 55%;
 height: auto;
 align-items: center;
 justify-content: center;
 color: #404040;
 font-family: 'Open Sans';


 @media screen and (max-width: 800px){
  width: 85%;

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
/* align-items: center; */
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
   color: #333333;
   margin-top: 15px;

   @media screen and (max-width: 800px){
   
  margin-top: -11px;

  }
`

const ViewsSpanLikes = styled.div`  
   color: #333333;
   /* margin-top: 1px; */
   align-items: center;
   justify-content: center;
   display: flex;

   @media screen and (max-width: 800px){
   
  margin-top: 5px;
  justify-content: left;


  }
`

function App() {
  const [posts, setPosts] = useState([])
  const [buttonAbled, setButtonAbled] = useState(false)

  async function HandleGetAllPosts() {
    const { data } = await api.get('/get-all-posts')

    setPosts(data.data)

    console.log(data.data)

    return posts


  }


  // async function LocalStorage(id) {
  //   localStorage.setItem("ID", id)

  //   return true


  // }


  // async function handleLikes(id) {
  //   await api.put(`/likes/${id}`)
  //   handlePosts()

  //   setButtonAbled(true)
  // }


  async function UpdateLikes(id) {
    await api.put(`/update-likes/${id}`)

    // console.log(data.data)

    // alert("Like button updated!")

    setButtonAbled(true)

    HandleGetAllPosts()

    return null


  }


  async function UpdateViews(id) {
    localStorage.setItem("ID", id)
    await api.put(`/update-views/${id}`)



    // console.log(data.data)

    // alert("Like button updated!")



    return null


  }


  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  useEffect(() => {
    HandleGetAllPosts()
  }, [])

  return (
    <>
      {/* <div style={{
        display: 'flex',
        width: '100vw', height: '45px', background: 'green'
      }}>
      afasdf
    </div> */}

      <Header />
      {posts.map(item => {
        return (
          <>
            <Container>


              <H1 key={item.id}>{item.title}</H1>
              <Link to="/profile" onClick={() => UpdateViews(item.id)} style={{ textDecoration: 'none' }}>
                <Image src={item.image} alt="flores" />

              </Link>

              <AuthorContainer >
                <p style={{ color: '#333333', }}>
                  <strong >
                    Autor:
                  </strong>
                  <span style={{ marginLeft: '8px' }} >

                    {item.author}
                  </span>
                </p>
                <ViewsSpan >
                  <strong >
                    Views:
                  </strong>
                  <span style={{ marginLeft: '8px' }} >

                    {item.views}

                  </span>
                </ViewsSpan>


                <ViewsSpanLikes >

                  <button disabled={true} onClick={() => UpdateLikes(item.id)}
                    // <button disabled={buttonAbled} onClick={() => UpdateLikes(item.id)}
                    style={{
                      border: 'none',
                      background: 'none',
                    }}>

                    <ThumbUpAltIcon color="gray" style={{ fontSize: "27px" }} />
                  </button>


                  <strong >
                    {item.likes}

                  </strong>




                </ViewsSpanLikes>

              </AuthorContainer>

              <ContainerText >
                <Link to="/profile" onClick={() => LocalStorage(item.id)} style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'flex',

                    flexDirection: 'column'
                  }}>
                    <p style={{ textIndent: '17px', color: '#4d4d4d' }}>

                      {item.text}
                    </p>

                    <strong style={{ fontSize: '15px', marginLeft: '10px', color: '#4d4d4d' }}>
                      {getDateWithoutTime(item.createdAt)}
                    </strong>
                  </div>
                </ Link >
              </ContainerText>
            </Container >
          </>



        )
      })}



      <br />
      <br />

    </>
  )
}

export default App
