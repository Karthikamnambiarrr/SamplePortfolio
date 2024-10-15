import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';


function Projects() {
  return (
    
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',backgroundColor:'black'}}>
       
       <MDBCard className='card' style={{width:'280px',height:'400px', margin:'50px'}}> 
      <MDBCardImage style={{height:'200px',width:'280px'}} src='../images/tictac.jpeg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>TicTacToe Game</MDBCardTitle>
        <MDBCardText>
          A TicTacToe game was build using html,css and js.
        </MDBCardText>
        <MDBBtn href='http://127.0.0.1:5501/Tic-Tac-Toe/index.html'>Check it out</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <MDBCard style={{width:'280px',height:'400px',margin:'50px'}}>
      <MDBCardImage style={{height:'200px',width:'280px'}} src='../images/bank.jpeg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Banking System</MDBCardTitle>
        <MDBCardText>
          A banking system using html,css and js
        </MDBCardText>
        <MDBBtn href='http://127.0.0.1:5500/index.html'>Check it out</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <MDBCard style={{width:'280px',height:'400px',margin:'50px'}}>
      <MDBCardImage style={{height:'200px',width:'280px'}} src='../images/sps.jpeg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Stone Papper Scissor</MDBCardTitle>
        <MDBCardText>
          Game stone,papper,scissor using html,css and js.
        </MDBCardText>
        <MDBBtn href='http://127.0.0.1:5500/index.html'>Check it out</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <MDBCard style={{width:'280px',height:'400px',margin:'50px'}}>
      <MDBCardImage style={{height:'200px',width:'280px'}} src='../images/tb.jpeg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Camels and Chocolates</MDBCardTitle>
        <MDBCardText>
          This is a travel blog designed by me using html,css and bootstrap.
        </MDBCardText>
        <MDBBtn href='https://karthikamnambiarrr.github.io/TravelBlog/'>Check it out</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <MDBCard style={{width:'280px',height:'400px',margin:'50px'}}>
      <MDBCardImage style={{height:'200px',width:'280px'}} src='../images/amtm.png' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>AMTM(Cloned)</MDBCardTitle>
        <MDBCardText>
          Here i have clonned a website called AMTM using html,css and bootstrap.
        </MDBCardText>
        <MDBBtn href='https://karthikamnambiarrr.github.io/AMTM-Cloned/'>Check it out</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <MDBCard style={{width:'280px',height:'400px',margin:'50px'}}>
      <MDBCardImage style={{height:'200px',width:'280px'}} src='../images/fur.jpeg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>SummerValley Woods</MDBCardTitle>
        <MDBCardText>
          Designed a furniture purchasing website using html,css,and bootstrap. 
        </MDBCardText>
        <MDBBtn href='https://karthikamnambiarrr.github.io/SummerValleyWoods/'>Check it out</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        
        
       
    </div>
  )
}

export default Projects